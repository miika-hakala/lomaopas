/**
 * POST /api/webhook
 *
 * Stripe webhook endpoint
 * This is the ONLY source of truth for payment status
 */

import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { stripe } from '$lib/stripe/config';
import { markOrderPaid, createOrder, getOrderBySession } from '$lib/db/orders';
import { STRIPE_WEBHOOK_SECRET } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    throw error(400, 'Missing stripe-signature header');
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    throw error(400, 'Invalid signature');
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const email = session.customer_email || session.customer_details?.email || '';

      // Check if order exists (might have been created during checkout)
      let order = await getOrderBySession(session.id);

      // If no order exists, create it (handles edge cases)
      if (!order) {
        console.log(`Creating order for session ${session.id} via webhook`);
        order = await createOrder(session.id, 'fuengirola_pdf');
      }

      // Mark as paid - this is the source of truth
      const paidOrder = await markOrderPaid(session.id, email);

      if (paidOrder) {
        console.log(
          `Order ${paidOrder.id} marked as paid. Email: ${email}, Token: ${paidOrder.download_token}`
        );
        // TODO: Send confirmation email with download link
      } else {
        console.error(`Failed to mark order as paid for session ${session.id}`);
      }
      break;
    }

    case 'checkout.session.expired': {
      const session = event.data.object;
      console.log(`Checkout session expired: ${session.id}`);
      // Order stays as 'pending' - can be cleaned up later
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return json({ received: true });
};
