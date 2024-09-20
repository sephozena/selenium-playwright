const BaseTest = require('../base/BaseTest');
const TestManager = require('../base/TestManager');

class DeleteItemTest extends BaseTest {
    constructor() {
        super();
        this.testManager = new TestManager(this.driver);
    }

    run() {
        describe('Delete Item Test', () => {
            it('should delete an item from the list', async () => {
                await this.testManager.login('validUser', 'validPassword'); // Replace with valid credentials
                await this.testManager.addItem('Item to Delete');

                await this.testManager.deleteItem('Item to Delete');

                // Assert that the item was deleted successfully
                const isItemDeleted = await this.testManager.checkItemExists('Item to Delete');
                expect(isItemDeleted).to.be.false; 
            });
        });
    }
}

new DeleteItemTest().run();
