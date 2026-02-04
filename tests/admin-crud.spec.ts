import { test, expect } from '@playwright/test';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'lomaopas@outlook.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

const hasAdminCreds =
  ADMIN_PASSWORD && ADMIN_PASSWORD !== 'your_actual_password_here';

test.describe('Admin CRUD Operations', () => {
  test.beforeEach(async ({ page }) => {
    if (!hasAdminCreds) {
      test.skip();
      return;
    }

    await page.goto('/admin/login');
    await page.fill('input[type="email"]', ADMIN_EMAIL);
    await page.fill('input[type="password"]', ADMIN_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL('/admin');
  });

  test('create new draft article', async ({ page }) => {
    await page.click('text=New Article');
    await expect(page).toHaveURL('/admin/articles/new');

    await page.fill('input[id="title"]', 'E2E Test Article');
    await expect(page.locator('input[id="slug"]')).toHaveValue('e2e-test-article');

    await page.selectOption('select[id="destination"]', { label: 'Fuengirola' });
    await page.selectOption('select[id="category"]', { label: 'Rannat' });
    await page.fill('textarea[id="content"]', 'This is a test article created by E2E tests.');

    await page.click('button[type="submit"]');
    await page.waitForURL('/admin');

    await expect(page.locator('text=E2E Test Article')).toBeVisible();
    await expect(
      page
        .locator('text=E2E Test Article')
        .locator('..')
        .locator('..')
        .locator('text=Draft')
    ).toBeVisible();
  });

  test('edit and publish article', async ({ page }) => {
    const row = page.locator('text=E2E Test Article').locator('..');
    await row.locator('text=Edit').click();

    await expect(page.locator('h2')).toContainText('Edit Article');

    await page.fill('input[id="title"]', 'E2E Test Article - Updated');
    await page.check('input[type="checkbox"]');

    await page.click('button[type="submit"]:has-text("Update")');
    await page.waitForURL('/admin');

    await expect(page.locator('text=E2E Test Article - Updated')).toBeVisible();
    await expect(
      page
        .locator('text=E2E Test Article - Updated')
        .locator('..')
        .locator('..')
        .locator('text=Published')
    ).toBeVisible();
  });

  test('unpublish article', async ({ page }) => {
    const row = page.locator('text=E2E Test Article - Updated').locator('..');
    await row.locator('text=Edit').click();

    await page.uncheck('input[type="checkbox"]');
    await page.click('button[type="submit"]:has-text("Update")');
    await page.waitForURL('/admin');

    await expect(
      page
        .locator('text=E2E Test Article - Updated')
        .locator('..')
        .locator('..')
        .locator('text=Draft')
    ).toBeVisible();
  });

  test('delete article', async ({ page }) => {
    const row = page.locator('text=E2E Test Article - Updated').locator('..');
    await row.locator('text=Edit').click();

    page.on('dialog', (dialog) => dialog.accept());
    await page.click('button:has-text("Delete")');
    await page.waitForURL('/admin');

    await expect(page.locator('text=E2E Test Article')).not.toBeVisible();
  });

  test('full CRUD cycle', async ({ page }) => {
    await page.click('text=New Article');
    await page.fill('input[id="title"]', 'Full Cycle Test');
    await page.selectOption('select[id="destination"]', { label: 'Fuengirola' });
    await page.fill('textarea[id="content"]', 'Full cycle test content.');
    await page.click('button[type="submit"]');
    await page.waitForURL('/admin');
    await expect(page.locator('text=Full Cycle Test')).toBeVisible();

    await expect(
      page.locator('text=Full Cycle Test').locator('..').locator('..').locator('text=Draft')
    ).toBeVisible();

    await page.locator('text=Full Cycle Test').locator('..').locator('text=Edit').click();
    await page.check('input[type="checkbox"]');
    await page.click('button[type="submit"]:has-text("Update")');
    await page.waitForURL('/admin');
    await expect(
      page
        .locator('text=Full Cycle Test')
        .locator('..')
        .locator('..')
        .locator('text=Published')
    ).toBeVisible();

    await page.locator('text=Full Cycle Test').locator('..').locator('text=Edit').click();
    page.on('dialog', (dialog) => dialog.accept());
    await page.click('button:has-text("Delete")');
    await page.waitForURL('/admin');
    await expect(page.locator('text=Full Cycle Test')).not.toBeVisible();
  });
});
