const BaseTest = require('../base/BaseTest');
const TestManager = require('../base/TestManager');
const { addTimestamp } = require('../utils/customUtils');

class LoginTest extends BaseTest {
    constructor() {
        super();
        this.testManager = new TestManager(this.driver);
    }

    run() {
        describe('Login Test', () => {
            it('should log in with valid credentials', async () => {
                await this.testManager.login(addTimestamp('validUser'), 'validPassword'); // Used the utility function for timestamp
                const isLoggedIn = await this.testManager.isLoggedIn();
                expect(isLoggedIn).to.be.true;
            });

            it('should not log in with invalid credentials', async () => {
                await this.testManager.login(addTimestamp('invalidUser'), 'invalidPassword'); // Use invalid credentials
                const isLoggedIn = await this.testManager.isLoggedIn();
                expect(isLoggedIn).to.be.false; 
            });
        });
    }
}

new LoginTest().run();