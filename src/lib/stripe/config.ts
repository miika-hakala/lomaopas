/**
 * Stripe configuration (server-side only)
 *
 * Phase 3.5: Single product (Fuengirola PDF)
 */

import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

export const stripe = new Stripe(STRIPE_SECRET_KEY);

// Re-export products for server-side use
export { PRODUCTS, type ProductId } from './products';
