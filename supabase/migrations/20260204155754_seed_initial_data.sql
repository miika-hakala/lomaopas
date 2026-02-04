-- Insert Espanja (maa)
INSERT INTO destinations (slug, name, type, published)
VALUES ('espanja', 'Espanja', 'country', true);

-- Insert Fuengirola (kaupunki, parent = Espanja)
INSERT INTO destinations (slug, name, type, parent_id, published)
VALUES (
  'fuengirola',
  'Fuengirola',
  'city',
  (SELECT id FROM destinations WHERE slug = 'espanja'),
  true
);

-- Insert kategoria: Rannat
INSERT INTO categories (slug, name)
VALUES ('rannat', 'Rannat');

-- Insert artikkeli: Fuengirolan rannat
INSERT INTO articles (
  slug,
  title,
  content,
  destination_id,
  category_id,
  published
)
VALUES (
  'rannat',
  'Fuengirolan rannat',
  'Fuengirola tunnetaan upeista rannoistaan. Kaupungissa on useita suosittuja rantoja.',
  (SELECT id FROM destinations WHERE slug = 'fuengirola'),
  (SELECT id FROM categories WHERE slug = 'rannat'),
  true
);
