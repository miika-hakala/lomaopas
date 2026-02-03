/**
 * In-memory order storage
 *
 * Phase 3.5: Minimal implementation
 * TODO: Replace with database in production
 */

export interface Order {
  id: string;
  sessionId: string;
  email: string;
  productId: string;
  status: 'pending' | 'paid' | 'failed';
  createdAt: Date;
  paidAt?: Date;
  downloadToken?: string;
}

// In-memory store (replace with DB in production)
const orders = new Map<string, Order>();

/**
 * Create a new pending order
 */
export function createOrder(sessionId: string, productId: string): Order {
  const order: Order = {
    id: crypto.randomUUID(),
    sessionId,
    email: '',
    productId,
    status: 'pending',
    createdAt: new Date(),
  };
  orders.set(sessionId, order);
  return order;
}

/**
 * Mark order as paid and generate download token
 */
export function markOrderPaid(sessionId: string, email: string): Order | null {
  const order = orders.get(sessionId);
  if (!order) return null;

  order.status = 'paid';
  order.email = email;
  order.paidAt = new Date();
  order.downloadToken = crypto.randomUUID();

  return order;
}

/**
 * Get order by session ID
 */
export function getOrderBySession(sessionId: string): Order | null {
  return orders.get(sessionId) ?? null;
}

/**
 * Get order by download token
 */
export function getOrderByToken(token: string): Order | null {
  for (const order of orders.values()) {
    if (order.downloadToken === token) {
      return order;
    }
  }
  return null;
}

/**
 * Get all orders (for debugging)
 */
export function getAllOrders(): Order[] {
  return Array.from(orders.values());
}
