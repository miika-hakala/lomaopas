# Affiliate-avainten standardit

Tämä dokumentti määrittelee nimeämiskäytännöt affiliate-avaimille.

## Kategoriat

### 1. accommodation.{city}

Majoituslinkit (Booking.com)

**Muoto:**
```typescript
accommodation.{city_slug}: {
  url: `https://www.booking.com/city/es/{city_slug}.html?aid=${AFFILIATE_IDS.booking}`,
  label: 'Hae majoitusta {Kaupunki}',
  partner: 'Booking.com',
}
```

**Nykyiset:**
- `accommodation.fuengirola`
- `accommodation.malaga`
- `accommodation.torremolinos`
- `accommodation.benalmadena`

**Lisättäessä uusi kaupunki:**
1. Tarkista Booking.com city slug (URL-osoitteesta)
2. Lisää avain samalla formaatilla
3. Label muodossa "Hae majoitusta {Kaupunki}" (elatiivi)

---

### 2. activities.{destination}

Retket ja aktiviteetit (GetYourGuide)

**Muoto:**
```typescript
activities.{destination}: {
  url: `https://www.getyourguide.com/{destination}-l{id}/?partner_id=${AFFILIATE_IDS.getyourguide}`,
  label: 'Katso retket {Kohde}',
  partner: 'GetYourGuide',
}
```

**Nykyiset:**
- `activities.malaga` / `activities.malagaDayTrips`
- `activities.fuengirolaDayTrips`
- `activities.torremolinos`
- `activities.benalmadena`
- `activities.ronda`
- `activities.mijas`
- `activities.granada`
- `activities.nerja`

**Käyttö:**
- Päiväretket-sivuilla kohdekaupunkeihin
- Nähtävyydet-sivuilla aktiviteetteihin

**Nimeäminen:**
- `activities.{city}` = retket kaupunkiin
- `activities.{city}DayTrips` = päiväretket kaupungista (harvoin tarpeen)

---

### 3. tickets.{attraction}

Lippulinkit nähtävyyksiin (GetYourGuide)

**Muoto:**
```typescript
tickets.{attraction_slug}: {
  url: `https://www.getyourguide.com/{city}-l{id}/{slug}-t{ticket_id}/?partner_id=${AFFILIATE_IDS.getyourguide}`,
  label: 'Osta liput {Nähtävyys}',
  partner: 'GetYourGuide',
}
```

**Nykyiset:**
- `tickets.bioparc` (Fuengirola)
- `tickets.picassoMuseum` (Málaga)
- `tickets.alcazaba` (Málaga)
- `tickets.aqualand` (Torremolinos)
- `tickets.selwoMarina` (Benalmádena)
- `tickets.teleferico` (Benalmádena)
- `tickets.seaLife` (Benalmádena)
- `tickets.tivoliWorld` (Benalmádena)

**Nimeäminen:**
- camelCase
- Nähtävyyden nimi englanniksi/espanjaksi
- Ei kaupungin nimeä avaimessa (selviää kontekstista)

---

### 4. transport.*

Kuljetuspalvelut (yleisiä, ei kaupunkikohtaisia)

**Nykyiset:**
- `transport.airportTransfer` (Welcome Pickups)
- `transport.carRental` (Rentalcars)

**Käyttö:**
- Kaikilla liikkuminen-sivuilla
- Päiväretket-sivuilla (carRental)

---

## Lisäysprosessi

### Uusi kaupunki

1. Lisää `accommodation.{city}` (PAKOLLINEN)
2. Lisää `activities.{city}` (jos GYG-sivu löytyy)
3. Lisää kaupunkikohtaiset `tickets.*` (jos nähtävyyksiä)

### Uusi nähtävyys

1. Etsi GetYourGuide-linkki
2. Lisää `tickets.{attraction}` camelCase-nimellä
3. Käytä nähtävyydet-sivulla

---

## URL-slugit (GetYourGuide)

| Kohde | GYG Location ID |
|-------|-----------------|
| Málaga | l162 |
| Fuengirola | l967 |
| Torremolinos | l968 |
| Benalmádena | l969 |
| Ronda | l963 |
| Granada | l38 |
| Nerja | l1122 |
| Mijas | l4535 |

---

## Tarkistuslista uudelle affiliate-linkille

- [ ] Avain on camelCase
- [ ] URL on oikea (testattu selaimessa)
- [ ] Label on suomeksi
- [ ] Partner-nimi on oikein
- [ ] Lisätty oikeaan kategoriaan
- [ ] Käytetty `satisfies AffiliateLink`
