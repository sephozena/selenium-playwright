const { By } = require('selenium-webdriver');
module.exports = TodoPage;

class TodoPage {
    constructor(driver) {
        this.driver = driver;
    }

    async addItem(item) {
        await this.driver.findElement(By.id('new-todo')).sendKeys(item);
        await this.driver.findElement(By.id('add')).click();
    }

    async deleteItem(itemIndex) {
        await this.driver.findElement(By.xpath(`//li[${itemIndex}]//button[@class='delete']`)).click();
    }
}

