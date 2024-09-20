const BaseTest = require('../base/BaseTest');
const TestManager = require('../base/TestManager');

class LoginTest extends BaseTest {
    constructor() {
        super();
        this.testManager = new TestManager(this.driver);
    }

    run() {
        describe('Login Test', () => {
            it('should log in with valid credentials', async () => {
                await this.testManager.login('validUser', 'validPassword');

                // Assert that login was successful
                const isLoggedIn = await this.testManager.isLoggedIn();
                expect(isLoggedIn).to.be.true;
            });

            it('should not log in with invalid credentials', async () => {
                await this.testManager.login('invalidUser', 'invalidPassword');

                // Assert that login failed
                const isLoggedIn = await this.testManager.isLoggedIn();
                expect(isLoggedIn).to.be.false;
            });
        });
    }
}

new LoginTest().run();
