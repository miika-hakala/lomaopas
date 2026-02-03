# Roadmap

## Phase 0 – DONE
- Nimi: Lomaopas.fi
- Kohderyhmä & sisältörajaus
- Taksonomia & URL-rakenne
- City-sivun template

## Phase 1: Fuengirola MVP – DONE
- **Tavoite:** Ensimmäisen kohdeoppaan julkaisu (Fuengirola).
- **Laajuus:** Espanja > Fuengirola.
- **Sisältö:** Hub-sivu, Liikkuminen, Rannat, Ravintolat, Päiväretket, Nähtävyydet, FAQ.
- **Tekniikka:** SvelteKit-pohja, reititys ja SEO-perusta.

## Phase 1.5: Fuengirola SEO & QA – DONE
- SEO-optimointi ja sisäinen linkitys.
- Sisällön viimeistely.
- Dokumentaation päivittäminen.

---

## Phase 2: LomaSihteeri MVP – DONE

**Tavoite:** Personoitu päivän kirje live-datalla Fuengirolan käyttäjille.

### 2.1 Sää (AEMET) – DONE
- AEMET OpenData -integraatio (Fuengirola, municipio 29054)
- Suomenkielinen sääteksti ja johtopäätös
- Fallback-tuki API-virheille

### 2.2 Tapahtumat (live + curated fallback) – DONE
- Visit Costa del Sol -API (ensisijainen)
- Kuratoidut viikottaiset tapahtumat (fallback)
- Päiväkohtainen valinta (dayOfWeek)

### 2.3 Häiriöt/varoitukset (AEMET CAP) – DONE
- AEMET avisos_cap -endpoint (Málaga zone 61)
- Severity-mapping: red/orange/yellow
- Suomenkieliset varoitustekstit ja toimintaohjeet

### 2.4 Unified Daily Briefing + Cache – DONE
- `/api/briefing` yhdistää sää, varoitukset, tapahtumat
- In-memory cache (TTL 30 min)
- Best-effort: ok=true jos sää TAI tapahtumat onnistuu

### Phase 2 valmis ja testattu
- `npm run check` + `npm run build` läpäisty
- E2E smoke-testi (Playwright) vihreä
- Phase Gate -käytäntö dokumentoitu (`docs/testing.md`)

---

## Phase 3 – Monetisointi (PENDING – tauolla)
- Affiliate-linkkien integrointi (hotellit, retket, kuljetukset).
- Premium PDF-oppaiden lanseeraus.

## Phase 4 – Premium & App (PENDING – tauolla)
- Laajennus premium-sisältöön (offline-kartat, syvemmät oppaat).
- Mahdollinen natiivisovellus.
