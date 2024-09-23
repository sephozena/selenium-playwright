class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async enterUsername(username) {
        await this.page.fill('#username', username);
    }

    async enterPassword(password) {
        await this.page.fill('#password', password);
    }

    async clickLogin() {
        await this.page.click('#login');
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = LoginPage;
