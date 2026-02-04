/**
 * Server-side load for /kiitos page
 *
 * Phase 1: Stripe disabled for Vercel preview builds
 */

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    status: 'error' as const,
    message: 'Maksut eivät ole käytössä Phase 1 -vaiheessa.',
  };
};
