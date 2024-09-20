const { By, until } = require('selenium-webdriver');

class TodoPage {
    constructor(driver) {
        this.driver = driver;
    }

    async addItem(item) {
        await this.driver.wait(until.elementLocated(By.id('new-todo')), 5000);
        await this.driver.findElement(By.id('new-todo')).sendKeys(item);
        await this.driver.findElement(By.id('add')).click();
    }

    async deleteItem(itemName) {
        const deleteButton = await this.driver.wait(until.elementLocated(By.xpath(`//li[text()="${itemName}"]/following-sibling::button`)), 5000);
        await deleteButton.click();
    }

    async checkItemExists(itemName) {
        const items = await this.driver.findElements(By.xpath(`//li[text()="${itemName}"]`));
        return items.length > 0;
    }
}

module.exports = TodoPage;
