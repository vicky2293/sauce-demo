import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly loginLogo: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.loginLogo = page.locator('.login_logo');
  }

  async visitLoginPage() {
    await this.goto('/');
    await this.verifyPageTitle('Swag Labs');
    await this.verifyElementVisible(this.loginLogo);
  }

  async login(username: string, password: string) {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }
}
