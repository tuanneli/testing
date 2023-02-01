const Page = require('./page');

class HelloPage extends Page {
    get loadingTitle() {
        return $('#users-loading');
    }

    get usersList() {
        return $('#users-list');
    }

    get usersItems() {
        return browser.$$('.user');
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error("Was not able to load data!")
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length;

            if (usersCount === 0) {
                throw new Error('User not found! ' + this.usersItems);
            }

            await this.usersItems[0].$('#user-delete').click();

            const usersCountAfterDelete = await this.usersItems.length;

            if (usersCount - usersCountAfterDelete !== 1) {
                throw new Error('User was not deleted or more than one user had been deleted');
            }
        } catch (e) {
            throw new Error("Was not able to delete user! " + e.message);
        }
    }

    open() {
        return super.open('/users-test');
    }
}

module.exports = new HelloPage();
