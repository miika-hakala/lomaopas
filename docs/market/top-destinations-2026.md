# Top 20 matkakohdetta 2026 – suomalaiset matkanjärjestäjät

Tämä dokumentti määrittää **Lomaopas.fi-projektin virallisen kohdeprioriteettilistan**. Lista perustuu siihen, **mihin suomalaiset matkanjärjestäjät (TUI, Tjäreborg, Aurinkomatkat, Detur ym.) myyvät pakettimatkoja ja kaupunkilomia vuonna 2026**.

Dokumenttia käytetään:
- roadmap-priorisointiin
- automaation (new-city) ajamisjärjestykseen
- PDF-masterien ja kohdesivujen tuotantoon

---

## P0 – Ehdoton ydin (suurin volyymi)

1. **Gran Canaria**
2. **Teneriffa**
3. **Thaimaa** (Phuket / Krabi / Koh Samui)
4. **Mallorca**
5. **Costa del Sol** (Málaga, Fuengirola, Torremolinos, Marbella)

> Näiden kohteiden tulisi olla ensimmäinen täysin valmis klusteri.

---

## P1 – Suuret aurinko- ja perhelomakohteet

6. **Kreeta**
7. **Rodos**
8. **Antalya**
9. **Alanya**
10. **Hurghada**

---

## P1 – Kaupunkilomat ja yhdistelmäkohteet

11. **Barcelona**
12. **Rooma**
13. **Pariisi**
14. **Lontoo**
15. **New York**

---

## P2 – Tärkeät mutta pienempi volyymi

16. **Kypros** (Pafos / Ayia Napa)
17. **Zakynthos**
18. **Lissabon** (+ Algarve yhdistelmänä)
19. **Cancún**
20. **Fuerteventura**

---

## Käyttöohje projektille

### Priorisointi
- **P0**: rakennetaan ensin (täysi PDF + sivut + QA)
- **P1**: seuraava aalto automaatiolla
- **P2**: laajennus, kun perusta valmis

### Automaatio
`npm run new-city` ajetaan tässä järjestyksessä.
PDF-master syntyy stubina ja täytetään kohdekohtaisesti.

### Scope-rajaus
- Kaikki kohteet käsitellään **1–14 vrk lomailijan näkökulmasta**
- Ei asumista, viranomaisasioita tai muuttosisältöä

---

**Status:** Lukittu lähtölista vuodelle 2026  
**Päivitetään vain strategisella päätöksellä**
