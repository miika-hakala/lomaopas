import { test, expect } from '@playwright/test';

test.describe('Public Routes', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Lomaopas.fi');
    await expect(page.locator('a[href="/espanja"]')).toBeVisible();
  });

  test('destination page (Espanja) loads', async ({ page }) => {
    await page.goto('/espanja');
    await expect(page.locator('h1')).toContainText('Espanja');
    await expect(page.locator('.breadcrumbs')).toContainText('Etusivu');
    await expect(page.locator('.breadcrumbs')).toContainText('Espanja');
    await expect(page.locator('text=Fuengirola')).toBeVisible();
  });

  test('city page (Fuengirola) loads', async ({ page }) => {
    await page.goto('/espanja/fuengirola');
    await expect(page.locator('h1')).toContainText('Fuengirola');
    await expect(page.locator('.breadcrumbs')).toContainText('Fuengirola');
    await expect(page.locator('text=Fuengirolan rannat')).toBeVisible();
  });

  test('article page loads', async ({ page }) => {
    await page.goto('/espanja/fuengirola/rannat');
    await expect(page.locator('h1')).toContainText('Fuengirolan rannat');
    await expect(page.locator('.breadcrumbs')).toContainText('Fuengirolan rannat');
    await expect(page.locator('.category-tag')).toContainText('Rannat');
    await expect(page.locator('.prose')).toBeVisible();
  });

  test('navigation flow works', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/espanja"]');
    await expect(page).toHaveURL('/espanja');
    await page.click('a[href="/espanja/fuengirola"]');
    await expect(page).toHaveURL('/espanja/fuengirola');
    await page.click('a[href="/espanja/fuengirola/rannat"]');
    await expect(page).toHaveURL('/espanja/fuengirola/rannat');
    await page.click('text=Takaisin Fuengirola-sivulle');
    await expect(page).toHaveURL('/espanja/fuengirola');
  });
});
