-- Trip types (lomatyypit: rantalomat, kaupunkilomat jne.)
CREATE TABLE trip_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  parent_id UUID REFERENCES trip_types(id) ON DELETE CASCADE,
  description TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for parent-child queries
CREATE INDEX idx_trip_types_parent ON trip_types(parent_id);

-- Many-to-many: destinations <-> trip_types
CREATE TABLE destination_trip_types (
  destination_id UUID REFERENCES destinations(id) ON DELETE CASCADE,
  trip_type_id UUID REFERENCES trip_types(id) ON DELETE CASCADE,
  PRIMARY KEY (destination_id, trip_type_id)
);

-- Indexes
CREATE INDEX idx_destination_trip_types_dest ON destination_trip_types(destination_id);
CREATE INDEX idx_destination_trip_types_type ON destination_trip_types(trip_type_id);
CREATE INDEX idx_trip_types_slug ON trip_types(slug);
CREATE INDEX idx_trip_types_sort ON trip_types(sort_order);

-- RLS
ALTER TABLE trip_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE destination_trip_types ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "Public can read all trip types"
  ON trip_types FOR SELECT
  USING (true);

CREATE POLICY "Public can read destination trip types"
  ON destination_trip_types FOR SELECT
  USING (true);

-- Admin manage
CREATE POLICY "Authenticated users can manage trip types"
  ON trip_types FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage destination trip types"
  ON destination_trip_types FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Seed trip types
INSERT INTO trip_types (slug, name, sort_order) VALUES
  ('rantalomat', 'Rantalomat', 1),
  ('kaupunkilomat', 'Kaupunkilomat', 2),
  ('perhelomat', 'Perhelomat', 3),
  ('urheilulomat', 'Urheilulomat', 4),
  ('luontolomat', 'Luontolomat', 5),
  ('kulttuurilomat', 'Kulttuurilomat', 6),
  ('luksuslomat', 'Luksuslomat', 7),
  ('budjettilomat', 'Budjettilomat', 8),
  ('kotimaan-lomat', 'Kotimaan lomat', 9);
