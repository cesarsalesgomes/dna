import { test, expect } from '@playwright/test';

test('Login/logout from the system', async ({ page }) => {

  await page.goto('http://127.0.0.1:5173/login');

  await page.getByPlaceholder('Email address').fill('cat@gmail.com');

  await page.getByPlaceholder('Password').fill('cat');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('http://127.0.0.1:5173/cats');

  await page.getByRole('button', { name: 'Open user menu' }).click();

  await page.getByRole('link', { name: 'Sign out' }).click();

  await expect(page).toHaveURL('http://127.0.0.1:5173/login');

});