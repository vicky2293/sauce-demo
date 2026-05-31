import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';

export class CheckoutStepTwoPage extends BasePage {
  private readonly inventoryItemName: Locator;
  private readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async verifyCheckoutStepTwoPage() {
    await this.verifyUrl(Constants.CHECKOUT_STEP_TWO_URL);
    await this.verifyTitle('Checkout: Overview');
  }

  async verifyProductInCart(productName: string) {
    const product = this.inventoryItemName.filter({ hasText: productName });
    await expect(product).toBeVisible();
  }

  async clickFinishButton() {
    await this.clickElement(this.finishButton);
  }
}
