import { test, expect } from '@playwright/test';

/**
 * LomaSihteeri E2E Smoke Test
 *
 * Testaa perusflow: kaupunkisivu -> onboarding -> dashboard
 * sekä /api/briefing -endpointin vastauksen.
 */

test.describe('LomaSihteeri Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    // Tyhjennä localStorage ennen jokaista testiä
    await page.goto('/espanja/fuengirola');
    await page.evaluate(() => localStorage.clear());
  });

  test('full onboarding flow and dashboard', async ({ page }) => {
    // A) Avaa kaupunkisivu
    await page.goto('/espanja/fuengirola');
    await expect(page).toHaveTitle(/Fuengirola/);

    // B) Klikkaa CTA "Ota LomaSihteeri käyttöön"
    const ctaButton = page.getByTestId('lomasihteeri-cta');
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();

    // Varmista onboarding-sivulle siirtyminen
    await expect(page).toHaveURL(/lomasihteeri\/onboarding/);

    // C) Onboarding step 1: täytä päivämäärät
    const startDateInput = page.getByTestId('start-date');
    const endDateInput = page.getByTestId('end-date');
    const nextButton = page.getByTestId('btn-next');

    // Luo päivämäärät: tänään + 3 ja + 6 päivää
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 3);
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 6);

    const formatDate = (d: Date) => d.toISOString().split('T')[0];

    await startDateInput.fill(formatDate(startDate));
    await endDateInput.fill(formatDate(endDate));

    // Varmista "Seuraava" aktivoituu
    await expect(nextButton).toBeEnabled();
    await nextButton.click();

    // D) Onboarding step 2: valitse kiinnostukset
    // Varmista että olemme step 2:ssa
    await expect(page.getByText('Vaihe 2/2')).toBeVisible();

    // Valitse 1-2 kiinnostusta (checkboxit)
    const ruokaCheckbox = page.getByRole('checkbox', { name: /Ruoka & viini/i });
    const kulttuuriCheckbox = page.getByRole('checkbox', { name: /Kulttuuri/i });

    await ruokaCheckbox.check();
    await kulttuuriCheckbox.check();

    // Paina "Valmis"
    const doneButton = page.getByTestId('btn-done');
    await expect(doneButton).toBeVisible();
    await doneButton.click();

    // E) Varmista redirect dashboardiin
    await expect(page).toHaveURL(/\/espanja\/fuengirola\/lomasihteeri$/);

    // Varmista dashboard-elementit
    const tripCard = page.getByTestId('trip-card');
    const briefingCard = page.getByTestId('briefing-card');

    await expect(tripCard).toBeVisible();
    await expect(briefingCard).toBeVisible();

    // Tarkista "Matkasi" otsikko
    await expect(tripCard.getByText('Matkasi')).toBeVisible();

    // Tarkista "Päivän kirje" otsikko
    await expect(briefingCard.getByText('Päivän kirje')).toBeVisible();

    // Tarkista tapahtumat-osio (joko tapahtumia tai fallback-teksti)
    const eventsSection = briefingCard.getByText('Tänään tapahtuu');
    await expect(eventsSection).toBeVisible();

    // F) Reload sivu ja varmista profiilin säilyvyys (localStorage)
    await page.reload();

    // Odota latauksen valmistumista
    await expect(page.getByTestId('trip-card')).toBeVisible();
    await expect(page.getByTestId('briefing-card')).toBeVisible();

    // Varmista että profiilitiedot näkyvät edelleen
    await expect(page.getByText('Matkasi')).toBeVisible();
  });

  test('API /api/briefing returns valid response', async ({ request }) => {
    // G) Kutsu /api/briefing
    const response = await request.get('/api/briefing');

    // Varmista status 200
    expect(response.status()).toBe(200);

    // Parsitaan JSON
    const data = await response.json();

    // Varmista rakenne
    expect(data).toHaveProperty('city');
    expect(data).toHaveProperty('date');
    expect(data).toHaveProperty('weather');
    expect(data).toHaveProperty('alerts');
    expect(data).toHaveProperty('events');
    expect(typeof data.ok).toBe('boolean');

    // Varmista weather-osion rakenne
    expect(data.weather).toHaveProperty('summary');
    expect(data.weather).toHaveProperty('ok');

    // Varmista alerts-osion rakenne
    expect(data.alerts).toHaveProperty('items');
    expect(Array.isArray(data.alerts.items)).toBe(true);

    // Varmista events-osion rakenne
    expect(data.events).toHaveProperty('items');
    expect(Array.isArray(data.events.items)).toBe(true);
  });
});
