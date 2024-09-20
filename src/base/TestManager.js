const { By, until } = require('selenium-webdriver');
const LoginPage = require('../page-objects/LoginPage');
const TodoPage = require('../page-objects/TodoPage');

class TestManager {
    constructor(driver) {
        this.driver = driver;
        this.loginPage = new LoginPage(driver);
        this.todoPage = new TodoPage(driver);
    }

    async login(username, password) {
        await this.driver.get(process.env.APP_URL || 'http://localhost:3000');
        await this.loginPage.enterUsername(username);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickLogin();
    }

    async addItem(itemName) {
        await this.todoPage.addItem(itemName);
    }

    async deleteItem(itemName) {
        await this.todoPage.deleteItem(itemName);
    }

    async checkItemExists(itemName) {
        return await this.todoPage.checkItemExists(itemName);
    }

    async isLoggedIn() {
        return await this.driver.getCurrentUrl() === `${process.env.APP_URL || 'http://localhost:3000'}/dashboard`;
    }
}

module.exports = TestManager;
