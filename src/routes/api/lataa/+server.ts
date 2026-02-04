/**
 * GET /api/lataa?token=xxx
 *
 * Phase 1: Stripe disabled for Vercel preview builds
 */

import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  throw error(503, 'Stripe is disabled in Phase 1 previews');
};
