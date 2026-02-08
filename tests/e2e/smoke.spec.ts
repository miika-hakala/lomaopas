import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Lomaopas/);
    await expect(page.locator('h1')).toContainText('Lomaopas');
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(50);
  });

  test('homepage has region links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href="/costa-del-sol"]')).toBeVisible();
  });
});
