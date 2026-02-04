import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');

    // Check that page loaded (no 404 or error)
    await expect(page).toHaveTitle(/Lomaopas/);

    // Check that main heading is visible
    await expect(page.locator('h1')).toContainText('Lomaopas.fi');

    // Check that page has content (not blank)
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toBeTruthy();
    expect(bodyText.length).toBeGreaterThan(50);
  });

  test('homepage has navigation link', async ({ page }) => {
    await page.goto('/');

    // Check that Espanja link exists
    const espanjaLink = page.getByText('Siirry Espanja-sivulle');
    await expect(espanjaLink).toBeVisible();
  });
});
