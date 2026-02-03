import fs from 'fs';
import path from 'path';

function toTitleCase(str: string): string {
    return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

async function main() {
    const args = process.argv.slice(2);
    let citySlug: string | undefined;
    let cityName: string | undefined;

    // Parse arguments for city_slug and city_name
    let argIndex = 0;
    if (args[0] === '--') { // Handle `npm run new-city -- <city_slug>`
        argIndex = 1;
    }

    if (args[argIndex]) {
        citySlug = args[argIndex];
        if (args[argIndex + 1] && !args[argIndex + 1].startsWith('--')) {
            cityName = args[argIndex + 1];
        }
    }

    if (!citySlug) {
        console.error('Usage: npm run new-city -- <city_slug> [city_name (optional)]');
        process.exit(1);
    }

    if (!cityName) {
        cityName = toTitleCase(citySlug);
    }

    console.log(`Scaffolding new city: ${cityName} (${citySlug})`);

    const baseSourcePath = 'src/routes/espanja/fuengirola';
    const baseDestPath = path.join('src/routes/espanja', citySlug);

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

        fs.mkdirSync(destDir, { recursive: true });

        let content = fs.readFileSync(sourceFilePath, 'utf8');

        // Replace placeholders
        content = content.replace(/Fuengirola/g, cityName);
        content = content.replace(/fuengirola/g, citySlug);

        // Special handling for lomasihteeri pages' hardcoded citySlug
        if (page.src.startsWith('lomasihteeri/')) {
            content = content.replace(/const citySlug = 'fuengirola';/g, `const citySlug = '${citySlug}';`);
            content = content.replace(/\/espanja\/fuengirola\/lomasihteeri/g, `/espanja/${citySlug}/lomasihteeri`);
        }
        
        fs.writeFileSync(destFilePath, content, 'utf8');
        console.log(`Created: ${destFilePath}`);
    }

    // --- Update src/routes/espanja/+page.svelte with new city card ---
    const espanjaPagePath = 'src/routes/espanja/+page.svelte';
    const newCityCard = `
  <div class="city-card">
    <h3>${cityName}</h3>
    <p>
      Yleiskuvaus kohteesta ${cityName}. Lisää tähän lyhyt ja ytimekäs kuvaus, joka houkuttelee lukijoita.
    </p>
    <p><strong>Sopii:</strong> Esimerkiksi: Perheille, pariskunnille, aktiivilomailijoille</p>
    <p><a href="/espanja/${citySlug}">Tutustu ${cityName}yn →</a></p>
  </div>`;

    let espanjaPageContent = fs.readFileSync(espanjaPagePath, 'utf8');
    const insertionPoint = '  <!-- NEW_CITY_CARD_INSERTION_POINT -->';
    if (espanjaPageContent.includes(insertionPoint)) {
        espanjaPageContent = espanjaPageContent.replace(
            insertionPoint,
            `${newCityCard}\n${insertionPoint}`
        );
        fs.writeFileSync(espanjaPagePath, espanjaPageContent, 'utf8');
        console.log(`Updated: ${espanjaPagePath} with new city card for ${cityName}`);
    } else {
        console.warn(`Warning: Insertion point "${insertionPoint}" not found in ${espanjaPagePath}. City card not added automatically.`);
    }


    console.log('\n--- Next Steps ---');
    console.log(`- Remember to create docs/pdf/${citySlug}_pdf.md`);
    console.log(`- Remember to add accommodation.${citySlug} links.ts:ään`);
    console.log(`- Run docs/QA_CITY_CHECKLIST.md`);
    console.log('------------------');
}

main().catch(console.error);
