-- ============================================================
-- Region hierarchy migration
-- Adds region type, restructures destination hierarchy
-- ============================================================

-- 1. Allow new types in destinations
-- Check current type constraint
-- If there's a CHECK constraint on type, alter it to include 'region' and 'island'

-- First check if type has a constraint
DO $$
BEGIN
  -- Try to add region and island as valid types
  -- If type column uses a CHECK constraint, update it
  IF EXISTS (
    SELECT 1 FROM information_schema.check_constraints
    WHERE constraint_name LIKE '%destinations%type%'
  ) THEN
    -- Drop old constraint and add new one
    EXECUTE (
      SELECT 'ALTER TABLE destinations DROP CONSTRAINT ' || constraint_name
      FROM information_schema.check_constraints
      WHERE constraint_name LIKE '%destinations%type%'
      LIMIT 1
    );
  END IF;
END $$;

-- Add updated constraint (if original had one)
-- Skip if type is just TEXT without constraint
ALTER TABLE destinations DROP CONSTRAINT IF EXISTS destinations_type_check;
ALTER TABLE destinations ADD CONSTRAINT destinations_type_check
  CHECK (type IN ('country', 'region', 'island', 'city'));

-- 2. Create Costa del Sol region
INSERT INTO destinations (slug, name, type, parent_id, published)
VALUES (
  'costa-del-sol',
  'Costa del Sol',
  'region',
  (SELECT id FROM destinations WHERE slug = 'espanja'),
  true
);

-- 3. Move Fuengirola under Costa del Sol
UPDATE destinations
SET parent_id = (SELECT id FROM destinations WHERE slug = 'costa-del-sol')
WHERE slug = 'fuengirola';

-- 4. Change Kanariansaaret: country → region, parent = espanja
UPDATE destinations
SET type = 'region',
    parent_id = (SELECT id FROM destinations WHERE slug = 'espanja')
WHERE slug = 'kanariansaaret';

-- 5. Change Gran Canaria: city → island
UPDATE destinations
SET type = 'island'
WHERE slug = 'gran-canaria';

-- 6. Change Teneriffa: city → island
UPDATE destinations
SET type = 'island'
WHERE slug = 'teneriffa';
