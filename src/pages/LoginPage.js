const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async enterUsername(username) {
        await this.driver.wait(until.elementLocated(By.id('username')), 5000);
        await this.driver.findElement(By.id('username')).sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.wait(until.elementLocated(By.id('password')), 5000);
        await this.driver.findElement(By.id('password')).sendKeys(password);
    }

    async clickLogin() {
        await this.driver.wait(until.elementLocated(By.id('login')), 5000);
        await this.driver.findElement(By.id('login')).click();
    }
}

module.exports = LoginPage;
