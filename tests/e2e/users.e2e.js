const UsersPage = require('../pages/users.page')
const SecurePage = require('../pages/secure.page')

describe('Users page', () => {
    it('load data', async () => {
        await UsersPage.loadData();
    });

    it('delete data', async () => {
        await UsersPage.loadData();
        await UsersPage.deleteUser();
    });
})


