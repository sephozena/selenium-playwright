class TodoPage {
    constructor(page) {
        this.page = page;
    }

    async addItem(item) {
        await this.page.fill('#new-todo', item);
        await this.page.click('#add');
    }

    async deleteItem(itemName) {
        const deleteButton = this.page.locator(`li:has-text("${itemName}") button`);
        await deleteButton.click();
    }

    async checkItemExists(itemName) {
        const itemLocator = this.page.locator(`li:has-text("${itemName}")`);
        return await itemLocator.count() > 0;
    }
}

module.exports = TodoPage;
