/**
 * Stripe configuration (server-side only)
 *
 * Phase 1: Stripe disabled for Vercel preview builds
 */

// Stripe is disabled in Phase 1; adapter kept for Phase 3 re-enable.
export const stripe = null;

// Re-export products for server-side use
export { PRODUCTS, type ProductId } from './products';
