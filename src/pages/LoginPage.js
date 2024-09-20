const { By } = require('selenium-webdriver');
module.exports = LoginPage;

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async enterUsername(username) {
        await this.driver.findElement(By.id('username')).sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.findElement(By.id('password')).sendKeys(password);
    }

    async clickLogin() {
        await this.driver.findElement(By.id('login')).click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
