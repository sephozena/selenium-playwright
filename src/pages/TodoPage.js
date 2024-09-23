class TodoPage {
    constructor(page) {
        this.page = page;
    }

    async addItem(item) {
        await this.page.fill('#new-todo', item);
        await this.page.click('#add');
    }

    async deleteItem(item) {
        const deleteButton = await this.page.$(`//li[text()="${item}"]/following-sibling::button`);
        await deleteButton.click();
    }

    async checkItemExists(item) {
        return await this.page.$(`//li[text()="${item}"]`) !== null;
    }
}

module.exports = TodoPage;
