const { test, expect } = require('@playwright/test');
const TodoPage = require('../pages/TodoPage');
const LoginPage = require('../pages/LoginPage');

test.describe('Todo Tests', () => {
    let todoPage, loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        todoPage = new TodoPage(page);
        await page.goto('/');
        await loginPage.login('validUser', 'validPassword');
    });

    test('should add an item', async ({ page }) => {
        await todoPage.addItem('New Task');
        expect(await todoPage.checkItemExists('New Task')).toBe(true);
    });
});
