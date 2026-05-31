import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyInventoryPage() {
    await this.verifyUrl(Constants.INVENTORY_URL);
    await this.verifyTitle('Products');
  }
}
