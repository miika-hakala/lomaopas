# Admin-roolien rajoitukset

## Nykytila

Lomaopas.fi käyttää yksinkertaista admin-mallia:
- Yksi admin-rooli (admin_users-taulu)
- Admin näkee ja muokkaa kaikkea sisältöä
- Ei erillisiä rooleja (editor, viewer jne.)

## Tietoinen valinta

Tämä on tietoinen rajaus MVP-vaiheessa:
- Projektissa on yksi admin (omistaja)
- Monimutkaisempi roolimalli ei ole tarpeen
- Jos admin-rooleja eriytetään tulevaisuudessa,
  query-tason suodatus pitää lisätä admin-sivuille

## Rakenteelliset riskit

Admin-sivujen queryt hakevat KAIKEN datan (myös unpublished):
- src/routes/admin/+page.server.ts — kaikki artikkelit
- src/routes/admin/articles/new/+page.server.ts — kaikki destinaatiot
- src/routes/admin/articles/[id]/+page.server.ts — kaikki destinaatiot

Tämä on OK niin kauan kuin:
- Admin = yksi henkilö (omistaja)
- RLS estää ei-adminien pääsyn

Jos rooleja eriytetään, jokaiseen queryyn pitää lisätä
roolin mukainen suodatus.

## Tulevaisuuden laajennuspiste

Phase 9+ voi sisältää:
- City editor -rooli (näkee vain oman alueen)
- Content reviewer -rooli (read-only)
- Super admin vs. regular admin

Tämä vaatii:
- admin_users-taulun laajentamista (role-sarake)
- RLS-policyjen päivittämistä
- Query-tason suodatusta admin-sivuilla

---

## Rate limiting (login)

Admin-login käyttää Supabase Auth:n (GoTrue) sisäänrakennettua
rate limitingiä. Oletusasetus rajoittaa kirjautumisyrityksiä
per IP ja per email.

### Tarkistettavat asetukset (Supabase Dashboard)

1. Avaa Supabase Dashboard → Authentication → Rate Limits
2. Varmista että seuraavat ovat käytössä:
   - Rate limit for signing in with email: ON (oletus: 30/hour)
   - Rate limit for token refresh: ON
3. Säädä tarvittaessa tiukemmaksi

### Ei server-side toteutusta

Rate limiting hoidetaan Supabase-tasolla, ei SvelteKit-koodissa.
Tämä on tietoinen valinta:
- Vähemmän koodia ylläpidettäväksi
- Supabase päivittää rate limiting -logiikkaa automaattisesti
- Jos tarvitaan tiukempaa rajoitusta, harkitaan Vercel Edge Middleware:a
