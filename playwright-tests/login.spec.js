const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Test', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('/');
    });

    test('should log in with valid credentials', async ({ page }) => {
        await loginPage.login('validUser', 'validPassword');
        expect(await page.url()).toBe('/dashboard'); // Update this according to your app's URL
    });

    test('should not log in with invalid credentials', async ({ page }) => {
        await loginPage.login('invalidUser', 'invalidPassword');
        expect(await page.url()).not.toBe('/dashboard'); // Adjust URL or validation criteria
    });
});
