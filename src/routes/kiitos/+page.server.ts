/**
 * Server-side load for /kiitos page
 *
 * Fetches order status and generates signed download token if paid
 */

import type { PageServerLoad } from './$types';
import { getOrderBySession } from '$lib/db/orders';
import { createDownloadToken } from '$lib/stripe/tokens';

export const load: PageServerLoad = async ({ url }) => {
  const sessionId = url.searchParams.get('session_id');

  if (!sessionId) {
    return {
      status: 'error' as const,
      message: 'Tilausnumeroa ei löydy.',
    };
  }

  const order = await getOrderBySession(sessionId);

  if (!order) {
    // Order might not exist yet if webhook hasn't processed
    return {
      status: 'pending' as const,
      sessionId,
    };
  }

  if (order.status !== 'paid') {
    return {
      status: 'pending' as const,
      sessionId,
    };
  }

  // Order is paid - generate signed download token
  if (!order.download_token) {
    return {
      status: 'error' as const,
      message: 'Latauslinkkiä ei voitu luoda. Ota yhteyttä tukeen.',
    };
  }

  const signedToken = createDownloadToken(order.id, order.download_token);
  const remainingDownloads = order.max_downloads - order.download_count;
  const expiresAt = order.expires_at ? new Date(order.expires_at) : null;

  return {
    status: 'paid' as const,
    downloadUrl: `/api/lataa?token=${encodeURIComponent(signedToken)}`,
    remainingDownloads,
    expiresAt: expiresAt?.toISOString() ?? null,
    email: order.email,
  };
};
