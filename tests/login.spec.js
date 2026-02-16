import { test, expect } from '@playwright/test';

test('Login Dev Phase 5', async ({ page }) => {
  await page.goto('https://dev-phase5.sigma-tech.co.id/');

  await page.fill('input[name="email"]', 's5sg8w9rro@wyoxafp.com');
  await page.fill('input[name="password"]', 'User@1234');

  await page.click('button[type="submit"]');

  await page.waitForLoadState('networkidle');

  await page.click('button.btn-list-menu:has-text("Employee")');

  await page.waitForLoadState('networkidle');
});