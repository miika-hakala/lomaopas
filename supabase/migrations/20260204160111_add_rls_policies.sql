-- Enable RLS for all tables
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;

-- Public read policies for published content
CREATE POLICY "Public can read published destinations"
  ON destinations FOR SELECT
  USING (published = true);

CREATE POLICY "Public can read published articles"
  ON articles FOR SELECT
  USING (published = true);

CREATE POLICY "Public can read all categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Public can read all sources"
  ON sources FOR SELECT
  USING (true);

-- Authenticated users can do everything
CREATE POLICY "Authenticated users can manage destinations"
  ON destinations FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage articles"
  ON articles FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage categories"
  ON categories FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage sources"
  ON sources FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
