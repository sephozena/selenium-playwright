const { Builder } = require('selenium-webdriver');
module.exports = driverSetup;

const driverSetup = async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    return driver;
};

