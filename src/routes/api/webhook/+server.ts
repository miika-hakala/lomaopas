/**
 * POST /api/webhook
 *
 * Stripe webhook endpoint
 * Handles checkout.session.completed events
 */

import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { stripe } from '$lib/stripe/config';
import { markOrderPaid } from '$lib/stripe/orders';
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

      const order = markOrderPaid(session.id, email);

      if (order) {
        console.log(`Order ${order.id} marked as paid. Email: ${email}`);
        // TODO: Send confirmation email with download link
      } else {
        console.warn(`Order not found for session ${session.id}`);
      }
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return json({ received: true });
};
