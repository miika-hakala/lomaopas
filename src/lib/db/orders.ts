/**
 * Order operations with Supabase persistence
 *
 * Production-ready: persistent storage, atomic updates
 */

import { supabase, type Order } from './supabase';

const DOWNLOAD_EXPIRY_DAYS = 7;
const MAX_DOWNLOADS = 5;

/**
 * Create a new pending order
 */
export async function createOrder(
  stripeSessionId: string,
  productId: string
): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .insert({
      stripe_session_id: stripeSessionId,
      product_id: productId,
      status: 'pending',
    })
    .select()
    .single();

  if (error) {
    console.error('Failed to create order:', error);
    return null;
  }

  return data;
}

/**
 * Mark order as paid, set expiry, generate download token
 */
export async function markOrderPaid(
  stripeSessionId: string,
  email: string
): Promise<Order | null> {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + DOWNLOAD_EXPIRY_DAYS);

  const downloadToken = crypto.randomUUID();

  const { data, error } = await supabase
    .from('orders')
    .update({
      status: 'paid',
      email,
      paid_at: new Date().toISOString(),
      expires_at: expiresAt.toISOString(),
      download_token: downloadToken,
      max_downloads: MAX_DOWNLOADS,
    })
    .eq('stripe_session_id', stripeSessionId)
    .select()
    .single();

  if (error) {
    console.error('Failed to mark order paid:', error);
    return null;
  }

  return data;
}

/**
 * Get order by Stripe session ID
 */
export async function getOrderBySession(
  stripeSessionId: string
): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .select()
    .eq('stripe_session_id', stripeSessionId)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      // Not "no rows" error
      console.error('Failed to get order:', error);
    }
    return null;
  }

  return data;
}

/**
 * Get order by download token
 */
export async function getOrderByToken(token: string): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .select()
    .eq('download_token', token)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error('Failed to get order by token:', error);
    }
    return null;
  }

  return data;
}

/**
 * Validate and increment download count atomically
 * Returns order if download is allowed, null otherwise
 */
export async function validateAndIncrementDownload(
  token: string
): Promise<{ order: Order | null; error: string | null }> {
  // First get the order
  const order = await getOrderByToken(token);

  if (!order) {
    return { order: null, error: 'Latauslinkkiä ei löydy.' };
  }

  if (order.status !== 'paid') {
    return { order: null, error: 'Maksua ei ole vahvistettu.' };
  }

  if (order.expires_at && new Date(order.expires_at) < new Date()) {
    return { order: null, error: 'Latauslinkki on vanhentunut (7 päivää).' };
  }

  if (order.download_count >= order.max_downloads) {
    return {
      order: null,
      error: `Latausraja saavutettu (${order.max_downloads} latausta).`,
    };
  }

  // Atomically increment download count with optimistic locking
  const { data, error } = await supabase
    .from('orders')
    .update({ download_count: order.download_count + 1 })
    .eq('download_token', token)
    .eq('download_count', order.download_count) // Optimistic lock
    .select()
    .single();

  if (error || !data) {
    // Race condition or error - retry once
    const retryOrder = await getOrderByToken(token);
    if (retryOrder && retryOrder.download_count >= retryOrder.max_downloads) {
      return {
        order: null,
        error: `Latausraja saavutettu (${retryOrder.max_downloads} latausta).`,
      };
    }
    return { order: null, error: 'Lataus epäonnistui. Yritä uudelleen.' };
  }

  return { order: data, error: null };
}
