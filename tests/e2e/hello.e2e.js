const HelloPage = require('../pages/hello.page')
const SecurePage = require('../pages/secure.page')

describe('My Login application', () => {
    it('should be hello title', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello');
        await expect(HelloPage.helloTitle).toBeExisting();
        await HelloPage.toggleBtn.click();
        await expect(HelloPage.helloTitle).not.toBeExisting();
    })

    it('should not be hello title', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('123');
        await expect(HelloPage.helloTitle).not.toBeExisting();
    })
})


