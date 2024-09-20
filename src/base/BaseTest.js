const { before, after, afterEach } = require('mocha');

class BaseTest {
    constructor() {
        //initialize driver
        this.driver = null;
    }

    async initializeDriver() {
        // using Selenium WebDriver:
        const { Builder } = require('selenium-webdriver');
        this.driver = await new Builder().forBrowser('chrome').build();
    }

    async quitDriver() {
        // driver quitting logic
        if (this.driver) {
            await this.driver.quit();
        }
    }

    async afterEach(currentTest) {
        // taking screenshots for each test
        if (currentTest.state === 'failed') {
            await this.takeScreenshot();  
        }
    }

    async takeScreenshot() {
        // screenshot logic
        const screenshot = await this.driver.takeScreenshot();
        require('fs').writeFileSync('screenshot.png', screenshot, 'base64');
    }
}

// Set up hooks for all tests that extend BaseTest
before(async function() {
    this.baseTest = new BaseTest();
    await this.baseTest.initializeDriver();
});

after(async function() {
    await this.baseTest.quitDriver();
});

afterEach(async function() {
    await this.baseTest.afterEach(this.currentTest);
});

module.exports = BaseTest;
