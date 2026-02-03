/**
 * Supabase client configuration
 *
 * Required env vars:
 * - SUPABASE_URL
 * - SUPABASE_SERVICE_KEY (service role key for server-side operations)
 */

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from '$env/static/private';

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

/**
 * Orders table schema (create in Supabase Dashboard):
 *
 * CREATE TABLE orders (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   stripe_session_id TEXT UNIQUE NOT NULL,
 *   email TEXT,
 *   product_id TEXT NOT NULL DEFAULT 'fuengirola_pdf',
 *   status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed')),
 *   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 *   paid_at TIMESTAMPTZ,
 *   expires_at TIMESTAMPTZ,
 *   download_count INTEGER NOT NULL DEFAULT 0,
 *   max_downloads INTEGER NOT NULL DEFAULT 5,
 *   download_token TEXT UNIQUE
 * );
 *
 * CREATE INDEX idx_orders_session ON orders(stripe_session_id);
 * CREATE INDEX idx_orders_token ON orders(download_token);
 */

export interface Order {
  id: string;
  stripe_session_id: string;
  email: string | null;
  product_id: string;
  status: 'pending' | 'paid' | 'failed';
  created_at: string;
  paid_at: string | null;
  expires_at: string | null;
  download_count: number;
  max_downloads: number;
  download_token: string | null;
}
