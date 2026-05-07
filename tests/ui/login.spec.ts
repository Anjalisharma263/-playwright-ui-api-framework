import {test,expect} from '@playwright/test'
import { DashboardPage } from '../../pages/dashboard.page'
import { LoginPage } from '../../pages/login.page'
import { USERS } from '../../utils/test.data'

test.describe('Login-Flow Baseline UI', ()=>{
    test('should successfully login with valid cred', async({page})=>{
        const loginPage = new LoginPage(page)
        const dashboardPage = new DashboardPage(page);
        await loginPage.goto();

    // Default credentials for React Admin demo
    await loginPage.login(USERS.ADMIN.username, USERS.ADMIN.password)

    await dashboardPage.verifyToLoad();
    })
})