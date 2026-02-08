# Lomatyypit (Trip Types)

## Rakenne

Lomatyypit ovat destination-tason tageja (many-to-many).
Yksi kohde voi kuulua useaan lomatyyppiin.

### Taulut

- `trip_types` — lomatyyppien määrittely (slug, name, parent_id, sort_order)
- `destination_trip_types` — liitostaulut (destination_id, trip_type_id)

### Hierarkia (parent_id)

Trip types tukee hierarkiaa parent_id-sarakkeella:
- Pääkategoria: parent_id = NULL (esim. Urheilulomat)
- Alakategoria: parent_id = pääkategorian id (esim. Laskettelu, Golf)

Alakategorioita voi lisätä myöhemmin admin-puolelta tai migraatiolla.

### Ero categories-tauluun

- `categories` = artikkelitason luokittelu (artikkelin aihe)
- `trip_types` = destination-tason luokittelu (lomatyyppi)

Nämä ovat erillisiä järjestelmiä eikä niitä saa sekoittaa.

## MVP:n lomatyypit

| Slug | Nimi | Sort |
|------|------|------|
| rantalomat | Rantalomat | 1 |
| kaupunkilomat | Kaupunkilomat | 2 |
| perhelomat | Perhelomat | 3 |
| urheilulomat | Urheilulomat | 4 |
| luontolomat | Luontolomat | 5 |
| kulttuurilomat | Kulttuurilomat | 6 |
| luksuslomat | Luksuslomat | 7 |
| budjettilomat | Budjettilomat | 8 |
| kotimaan-lomat | Kotimaan lomat | 9 |

## Käyttö

Lomatyyppejä voi:
- Lisätä ja poistaa vapaasti admin-puolelta
- Liittää kohteisiin (destination_trip_types)
- Käyttää filtteröintiin, navigaatioon ja etusivun ryhmittelyyn

## Tulevaisuus

- Omat reitit: `/rantalomat` → listaa kaikki rantalomakohteet
- Etusivun kategorianäkymä
- Header-navigaation kategorialinkit
