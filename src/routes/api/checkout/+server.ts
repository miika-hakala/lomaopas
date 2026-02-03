/**
 * POST /api/checkout
 *
 * Creates a Stripe Checkout Session for the specified product
 */

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { stripe, PRODUCTS, type ProductId } from '$lib/stripe/config';
import { createOrder } from '$lib/stripe/orders';

export const POST: RequestHandler = async ({ request, url }) => {
  const body = await request.json().catch(() => ({}));
  const productId = body.product as ProductId;

  if (!productId || !PRODUCTS[productId]) {
    throw error(400, 'Invalid product');
  }

  const product = PRODUCTS[productId];
  const baseUrl = url.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/kiitos?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout?cancelled=true`,
      customer_email: body.email || undefined,
    });

    // Store pending order
    createOrder(session.id, productId);

    return json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    throw error(500, 'Failed to create checkout session');
  }
};
