import fs from 'fs';
import path from 'path';

function toTitleCase(str: string): string {
    return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

function printUsage() {
    console.log('Usage: npm run new-city -- <city_slug> [city_name (optional)] [--region <region>]');
}

function ensureDirectory(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
        return;
    }
    console.log(`Exists, skipped: ${dirPath}`);
}

function writeFileIfMissing(filePath: string, content: string) {
    if (fs.existsSync(filePath)) {
        console.log(`Exists, skipped: ${filePath}`);
        return false;
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created file: ${filePath}`);
    return true;
}

function escapeRegex(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function ensureAffiliateEntry(
    filePath: string,
    objectName: 'accommodation' | 'activities',
    entryKey: string,
    entryContent: string,
) {
    if (!fs.existsSync(filePath)) {
        console.warn(`Warning: Affiliate links file not found: ${filePath}. Skipping.`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const anchor = `export const ${objectName} = {`;
    const startIndex = content.indexOf(anchor);
    if (startIndex === -1) {
        console.warn(`Warning: Could not find ${objectName} block in ${filePath}. Skipping.`);
        return;
    }

    const endIndex = content.indexOf('};', startIndex);
    if (endIndex === -1) {
        console.warn(`Warning: Could not find end of ${objectName} block in ${filePath}. Skipping.`);
        return;
    }

    const block = content.slice(startIndex, endIndex);
    const escapedKey = escapeRegex(entryKey);
    const entryRegex = new RegExp(`\\n\\s*['"]?${escapedKey}['"]?\\s*:\\s*{`);
    if (entryRegex.test(block)) {
        console.log(`Affiliate ${objectName}.${entryKey} exists, skipped`);
        return;
    }

    const updated =
        content.slice(0, endIndex) +
        `  '${entryKey}': {\n${entryContent}\n  } satisfies AffiliateLink,\n` +
        content.slice(endIndex);

    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Added affiliate stub: ${objectName}.${entryKey}`);
}

function ensureRegionCard(region: string, citySlug: string, cityName: string) {
    const filePath = path.join('src/routes', region, '+page.svelte');
    if (!fs.existsSync(filePath)) {
        console.warn(`Warning: Region hub not found: ${filePath}. Skipping.`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const cityLink = `/${region}/${citySlug}`;
    if (content.includes(`href=\"${cityLink}\"`) || content.includes(`href='${cityLink}'`)) {
        console.log(`City card exists, skipped: ${citySlug}`);
        return;
    }

    const insertionPoint = '<!-- NEW_CITY_CARD_INSERTION_POINT -->';
    if (!content.includes(insertionPoint)) {
        console.warn(`Warning: Card insertion point not found in ${filePath}. Skipping.`);
        return;
    }

    const card = `  <div class=\"city-card\">\n    <h3>${cityName}</h3>\n    <p>\n      TODO: Lyhyt kuvaus ${cityName}sta (ranta, vanhakaupunki, tunnelma).\n    </p>\n    <p><strong>Sopii:</strong> TODO</p>\n    <p><a href=\"${cityLink}\">Tutustu ${cityName}an →</a></p>\n  </div>\n\n  `;

    const updated = content.replace(insertionPoint, `${card}${insertionPoint}`);
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Added city card: ${citySlug}`);
}

function buildPdfStub(cityName: string) {
    return `# ${cityName.toUpperCase()} – Täydellinen lomaopas suomalaisille

**Suunniteltu 1–14 vrk lomalle – toimii offline**

---

## OFFLINE-PIKAOPAS (tallenna puhelimeen)

### Tärkeimmät hakusanat Google Mapsiin

| Tarkoitus | Hae näin |
|-----------|----------|
| Vanhakaupunki | \`TODO\` |
| Rantabulevardi | \`TODO\` |
| Juna-/linja-autoasema | \`TODO\` |
| Ruokakauppa | \`TODO\` |
| Apteekki | \`TODO\` |
| Taksi | \`TODO\` |
| Sairaala / päivystys | \`TODO\` |

### Hätänumerot

- Yleinen hätänumero: **112**
- Poliisi: **091**
- Päivystys: Hae \`TODO\`

### Tyypilliset hinnat

| Asia | Hintahaarukka |
|------|---------------|
| Bussi lentokentältä | ~TODO € |
| Paikallisbussi | ~TODO € |
| Aurinkotuoli + varjo | TODO–TODO € / päivä |
| Kahvi | TODO–TODO € |
| Lounas (menú del día) | TODO–TODO € |
| Illallinen | TODO–TODO € |

*Hinnat vaihtelevat kauden, sijainnin ja kysynnän mukaan.*

---

## CHECKLISTA: ENNEN MATKAA

### Viikkoa ennen

- [ ] Matkavakuutus voimassa
- [ ] Maksukorttien PIN-koodit muistissa
- [ ] Majoituksen osoite ja yhteystiedot tallennettu
- [ ] Google Maps: tallenna kartat offline-tilaan (\`${cityName}\`)
- [ ] TODO: liput/varaukset

### Päivää ennen

- [ ] Tulosta tai tallenna tämä PDF puhelimeen
- [ ] Lentolippujen mobiilikortti valmiina
- [ ] Lentokentältä kulkeminen tarkistettu

### Laukkuun

- [ ] EHIC/KELA-kortti
- [ ] Aurinkovoide
- [ ] Hattu ja aurinkolasit
- [ ] Mukavat kävelykengät
- [ ] Uimapuku ja pyyhe

---

## CHECKLISTA: EKA PÄIVÄ PERILLÄ

### Heti saapuessa

- [ ] Osta bussilippu / järjestä kuljetus
- [ ] Löydä lähin ruokakauppa
- [ ] Kävele keskustassa ja rannalla

### Illalla

- [ ] Kokeile paikallista ravintolaa
- [ ] Suunnittele seuraavan päivän ranta tai nähtävyys

---

## 1. TERVETULOA ${cityName.toUpperCase()}

TODO: 2–3 kappaletta (kaupungin profiili, ranta + kaupunki).

### Kenelle sopii

- TODO

### Kenelle ei sovi

- TODO

---

## 2. SAAPUMINEN KOHDESEEN

TODO: lentokentältä, bussi/taksi/juna + kesto + hinnat.

---

## 3. LIIKKUMINEN LOMALLA

TODO: kävely, bussi/juna, taksi, sovellukset, vuokra-auto.

---

## 4. ALUEET JA MAJOITUS

TODO: alueet + kenelle sopii + plussat/miinukset.

---

## 5. RANNAT

TODO: tärkeimmät rannat + rantavinkit.

---

## 6. RAVINTOLAT

TODO: hintataso, ruokailuajat, parhaat alueet.

---

## 7. NÄHTÄVYYDET JA TEKEMINEN

TODO: nähtävyydet, kävelyreitit, aktiviteetit.

---

## 8. PÄIVÄRETKET

TODO: lähikohteet + liikkuminen.

---

## 9. KÄYTÄNNÖN ASIAT

TODO: ruokakaupat, apteekit, raha, turvallisuus.

---

## 10. HYÖDYLLISET SOVELLUKSET

TODO: Google Maps, paikallisliikenne, taksisovellukset, käännös.

---

## 11. FAQ

TODO: 6–10 yleisintä kysymystä + linkitys checklisteihin.

---

## Lopuksi

TODO: lyhyt loppukappale kaupungin profiilista.
`;
}

async function main() {
    const args = process.argv.slice(2);
    let citySlug: string | undefined;
    let cityName: string | undefined;
    let region = 'espanja';

    // Parse arguments for city_slug and city_name
    const normalizedArgs = args[0] === '--' ? args.slice(1) : args;

    if (normalizedArgs.includes('--help') || normalizedArgs.includes('-h')) {
        printUsage();
        process.exit(0);
    }

    for (let i = 0; i < normalizedArgs.length; i += 1) {
        const current = normalizedArgs[i];
        if (current === '--region') {
            if (normalizedArgs[i + 1]) {
                region = normalizedArgs[i + 1];
                i += 1;
            }
            continue;
        }

        if (!current.startsWith('--')) {
            if (!citySlug) {
                citySlug = current;
            } else if (!cityName) {
                cityName = current;
            }
        }
    }

    if (!citySlug) {
        printUsage();
        process.exit(1);
    }

    if (!cityName) {
        cityName = toTitleCase(citySlug);
    }

    console.log(`Scaffolding new city: ${cityName} (${citySlug}) [region: ${region}]\n`);

    const baseSourcePath = 'src/routes/espanja/fuengirola';
    const baseDestPath = path.join('src/routes', region, citySlug);

    // Ensure base destination directory exists
    ensureDirectory(baseDestPath);

    const pages = [
        { src: '+page.svelte', dest: '+page.svelte' },
        { src: 'faq/+page.svelte', dest: 'faq/+page.svelte' },
        { src: 'liikkuminen/+page.svelte', dest: 'liikkuminen/+page.svelte' },
        { src: 'missa-asua/+page.svelte', dest: 'missa-asua/+page.svelte' },
        { src: 'nahtavyydet/+page.svelte', dest: 'nahtavyydet/+page.svelte' },
        { src: 'paivaretket/+page.svelte', dest: 'paivaretket/+page.svelte' },
        { src: 'rannat/+page.svelte', dest: 'rannat/+page.svelte' },
        { src: 'ravintolat/+page.svelte', dest: 'ravintolat/+page.svelte' },
        // Add lomasihteeri pages
        { src: 'lomasihteeri/+page.svelte', dest: 'lomasihteeri/+page.svelte' },
        { src: 'lomasihteeri/onboarding/+page.svelte', dest: 'lomasihteeri/onboarding/+page.svelte' },
    ];

    for (const page of pages) {
        const sourceFilePath = path.join(baseSourcePath, page.src);
        const destFilePath = path.join(baseDestPath, page.dest);
        const destDir = path.dirname(destFilePath);

        if (!fs.existsSync(sourceFilePath)) {
            console.warn(`Warning: Source file not found: ${sourceFilePath}. Skipping.`);
            continue;
        }

        if (fs.existsSync(destFilePath)) {
            console.log(`Exists, skipped: ${destFilePath}`);
            continue;
        }

        fs.mkdirSync(destDir, { recursive: true });

        let content = fs.readFileSync(sourceFilePath, 'utf8');

        // Replace placeholders
        content = content.replace(/Fuengirola/g, cityName);
        content = content.replace(/fuengirola/g, citySlug);
        content = content.replace(/\/espanja\//g, `/${region}/`);

        if (citySlug.includes('-')) {
            content = content.replace(
                new RegExp(`activities\\.${citySlug}DayTrips`, 'g'),
                `activities['${citySlug}DayTrips']`,
            );
            content = content.replace(
                new RegExp(`accommodation\\.${citySlug}`, 'g'),
                `accommodation['${citySlug}']`,
            );
            content = content.replace(
                new RegExp(`activities\\.${citySlug}`, 'g'),
                `activities['${citySlug}']`,
            );
        }

        // Special handling for lomasihteeri pages' hardcoded citySlug
        if (page.src.startsWith('lomasihteeri/')) {
            content = content.replace(/const citySlug = 'fuengirola';/g, `const citySlug = '${citySlug}';`);
            content = content.replace(
                new RegExp('/espanja/fuengirola/lomasihteeri', 'g'),
                `/${region}/${citySlug}/lomasihteeri`,
            );
        }

        if (page.src.startsWith('paivaretket/')) {
            const todoMarker = '<!-- TODO: Lisää cross-city linkit muihin kaupunkeihin (päiväretket) -->';
            if (!content.includes(todoMarker)) {
                const insertPoint = '</p>\n\n<h2>';
                if (content.includes(insertPoint)) {
                    content = content.replace(insertPoint, `</p>\n\n${todoMarker}\n\n<h2>`);
                } else {
                    content = `${todoMarker}\n\n${content}`;
                }
            }
        }

        fs.writeFileSync(destFilePath, content, 'utf8');
        console.log(`Created file: ${destFilePath}`);
    }

    const pdfPath = path.join('docs/pdf', `${citySlug}_pdf.md`);
    ensureDirectory(path.dirname(pdfPath));
    writeFileIfMissing(pdfPath, buildPdfStub(cityName));

    const accommodationEntry = [
        `    url: \`https://www.booking.com/city/es/${citySlug}.html?aid=\${AFFILIATE_IDS.booking}\`,`,
        `    label: 'Hae majoitusta ${cityName}',`,
        "    partner: 'Booking.com',",
    ].join('\n');

    const activitiesEntry = [
        `    url: \`https://www.getyourguide.com/${citySlug}-lTODO/?partner_id=\${AFFILIATE_IDS.getyourguide}\`,`,
        `    label: 'Katso aktiviteetit ${cityName}',`,
        "    partner: 'GetYourGuide',",
    ].join('\n');

    const activitiesDayTripsEntry = [
        `    url: \`https://www.getyourguide.com/${citySlug}-lTODO/?partner_id=\${AFFILIATE_IDS.getyourguide}\`,`,
        `    label: 'Katso päiväretket ${cityName}',`,
        "    partner: 'GetYourGuide',",
    ].join('\n');

    ensureAffiliateEntry(
        path.join('src/lib/affiliates/links.ts'),
        'accommodation',
        citySlug,
        accommodationEntry,
    );

    ensureAffiliateEntry(
        path.join('src/lib/affiliates/links.ts'),
        'activities',
        citySlug,
        activitiesEntry,
    );

    ensureAffiliateEntry(
        path.join('src/lib/affiliates/links.ts'),
        'activities',
        `${citySlug}DayTrips`,
        activitiesDayTripsEntry,
    );

    ensureRegionCard(region, citySlug, cityName);

    console.log(`
--- Next Steps ---
- Täytä docs/pdf/${citySlug}_pdf.md
- Täytä sivusisällöt PDF:n mukaan
- Päivitä affiliate-linkit oikeiksi
- Aja docs/QA_CITY_CHECKLIST.md
- npm run check && npm run build
------------------`);
}

main();
