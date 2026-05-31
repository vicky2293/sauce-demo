import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';

export class CommonPage extends BasePage {
  private readonly logoutButton: Locator;
  private readonly burgerMenuButton: Locator;

  constructor(page: Page) {
    super(page);
    this.burgerMenuButton = page.locator('[id="react-burger-menu-btn"]');
    this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
  }

  async logout() {
    await this.verifyElementVisible(this.burgerMenuButton);
    await this.clickElement(this.burgerMenuButton);
    await this.clickElement(this.logoutButton);
    await this.verifyPageTitle('Swag Labs');
    await this.verifyUrl(Constants.BASE_URL);
  }
}
