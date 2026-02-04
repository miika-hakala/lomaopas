import { test, expect } from '@playwright/test';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'lomaopas@outlook.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

const hasAdminCreds =
  ADMIN_PASSWORD && ADMIN_PASSWORD !== 'your_actual_password_here';

test.describe('Admin Flow', () => {
  test('login page loads', async ({ page }) => {
    await page.goto('/admin/login');
    await expect(page.locator('h1')).toContainText('Admin Login');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('login with valid credentials', async ({ page }) => {
    if (!hasAdminCreds) {
      test.skip();
      return;
    }

    await page.goto('/admin/login');
    await page.fill('input[type="email"]', ADMIN_EMAIL);
    await page.fill('input[type="password"]', ADMIN_PASSWORD);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/admin');
    await expect(page.locator('h1')).toContainText('Admin Dashboard');
  });

  test('dashboard shows articles', async ({ page }) => {
    if (!hasAdminCreds) {
      test.skip();
      return;
    }

    await page.goto('/admin/login');
    await page.fill('input[type="email"]', ADMIN_EMAIL);
    await page.fill('input[type="password"]', ADMIN_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL('/admin');

    await expect(page.locator('text=Articles')).toBeVisible();
    await expect(page.locator('text=Fuengirolan rannat')).toBeVisible();
  });

  test('protected route redirects to login', async ({ page }) => {
    await page.goto('/admin');
    await expect(page).toHaveURL('/admin/login');
  });
});
