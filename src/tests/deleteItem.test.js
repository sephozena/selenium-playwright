const { test, expect } = require('@playwright/test');
const TodoPage = require('../pages/TodoPage');
const LoginPage = require('../pages/LoginPage');

test.describe('Delete Item Test', () => {
    let todoPage, loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        todoPage = new TodoPage(page);
        await page.goto('/');
        await loginPage.login('validUser', 'validPassword');
    });

    test('should delete an item from the list', async ({ page }) => {
        // Add an item that can be deleted
        await todoPage.addItem('Item to Delete');
        
        // Now delete the item
        await todoPage.deleteItem('Item to Delete');
        
        // Assert that the item no longer exists
        const isItemDeleted = await todoPage.checkItemExists('Item to Delete');
        expect(isItemDeleted).toBe(false);
    });
});
