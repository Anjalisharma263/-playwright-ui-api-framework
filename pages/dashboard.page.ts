import {expect, Page, type Locator} from '@playwright/test'

export class DashboardPage{

    readonly dashboardTitle:Locator
 
    constructor(public page: Page) {
        this.page = page;
        this.dashboardTitle = page.getByRole('heading', { name: 'Welcome to the react-admin' });

    }
    async goto() {
    await this.page.goto('/#/');
  }

async verifyToLoad(){
    await expect(this.page).toHaveURL('#/');
    await expect(this.dashboardTitle).toBeVisible();
}
}