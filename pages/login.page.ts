import {Page,type Locator} from '@playwright/test'
//adding another command to view the pipeline
export class LoginPage{
 readonly usernameInput:Locator
    readonly passwordInput:Locator
    readonly loginButton:Locator
    readonly errorMessage:Locator
    constructor(public page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', {name:'username'});
        this.passwordInput = page.getByRole('textbox', {name:'password'});
        this.loginButton = page.getByRole('button', {name:'Sign in'});
        this.errorMessage = page.getByRole('paragraph', {name: 'Invalid username or password!'});
    

    }
    async goto() {
    await this.page.goto('#/login');
  }

async login(user:string, password:string){
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    

}
}