-- Admin users table (explicit allowlist)
CREATE TABLE IF NOT EXISTS admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Allow a user to read only their own admin row
CREATE POLICY "Admin users can read own row"
  ON admin_users FOR SELECT
  USING (auth.uid() = user_id);

-- Allow service role to manage admin users (service role bypasses RLS in practice)
CREATE POLICY "Service role can manage admin users"
  ON admin_users FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Remove broad authenticated write policies
DROP POLICY IF EXISTS "Authenticated users can manage destinations" ON destinations;
DROP POLICY IF EXISTS "Authenticated users can manage articles" ON articles;
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can manage sources" ON sources;

-- Restrict write access to admin users only
CREATE POLICY "Admins can manage destinations"
  ON destinations FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()));

CREATE POLICY "Admins can manage articles"
  ON articles FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()));

CREATE POLICY "Admins can manage categories"
  ON categories FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()));

CREATE POLICY "Admins can manage sources"
  ON sources FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid()));
