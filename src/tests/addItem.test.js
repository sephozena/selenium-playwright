const BaseTest = require('../base/BaseTest');
const TestManager = require('../base/TestManager');
const { addTimestamp } = require('../utils/customUtils');

class AddItemTest extends BaseTest {
    constructor() {
        super();
        this.testManager = new TestManager(this.driver);
    }

    run() {
        describe('Add Item Test', () => {
            it('should add an item to the list', async () => {
                await this.testManager.login('validUser', 'validPassword');
                const itemName = addTimestamp('New Todo Item');
                await this.testManager.addItem(itemName);

                // Intentionally failing this test for demonstration
                const isItemAdded = await this.testManager.checkItemExists(itemName);
                
                // Fire screenshot upon test failure
                expect(isItemAdded).to.be.true; 
            });
        });
    }
}

