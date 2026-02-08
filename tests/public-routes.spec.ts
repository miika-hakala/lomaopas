import { test, expect } from '@playwright/test';

test.describe('Public Routes', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Lomaopas');
  });

  test('region page (Costa del Sol) loads', async ({ page }) => {
    await page.goto('/costa-del-sol');
    await expect(page.locator('h1')).toContainText('Costa del Sol');
    await expect(page.locator('.breadcrumbs')).toContainText('Etusivu');
    await expect(page.locator('.breadcrumbs')).toContainText('Costa del Sol');
    await expect(page.locator('text=Fuengirola')).toBeVisible();
  });

  test('destination page (Fuengirola) loads', async ({ page }) => {
    await page.goto('/costa-del-sol/fuengirola');
    await expect(page.locator('h1')).toContainText('Fuengirola');
    await expect(page.locator('.breadcrumbs')).toContainText('Fuengirola');
  });

  test('article page loads', async ({ page }) => {
    await page.goto('/costa-del-sol/fuengirola/rannat');
    await expect(page.locator('h1')).toContainText('Fuengirolan rannat');
    await expect(page.locator('.breadcrumbs')).toContainText('Fuengirolan rannat');
  });

  test('Kanariansaaret region loads', async ({ page }) => {
    await page.goto('/kanariansaaret');
    await expect(page.locator('h1')).toContainText('Kanariansaaret');
    await expect(page.locator('text=Gran Canaria')).toBeVisible();
    await expect(page.locator('text=Teneriffa')).toBeVisible();
  });

  test('Gran Canaria destination loads', async ({ page }) => {
    await page.goto('/kanariansaaret/gran-canaria');
    await expect(page.locator('h1')).toContainText('Gran Canaria');
  });

  test('navigation flow works', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/costa-del-sol"]');
    await expect(page).toHaveURL('/costa-del-sol');
    await page.click('a[href="/costa-del-sol/fuengirola"]');
    await expect(page).toHaveURL('/costa-del-sol/fuengirola');
  });
});
