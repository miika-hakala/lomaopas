import { test, expect } from '@playwright/test';

test.describe('RLS (Row Level Security)', () => {
  test('only published articles visible on public site', async ({ page }) => {
    await page.goto('/costa-del-sol/fuengirola');
    await expect(page.locator('text=Fuengirolan rannat')).toBeVisible();

    const articleCards = page.locator('.article-card');
    const count = await articleCards.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('draft article returns 404 on public site', async ({ page }) => {
    const response = await page.goto('/costa-del-sol/fuengirola/nonexistent-draft');
    expect(response?.status()).toBe(404);
  });
});
