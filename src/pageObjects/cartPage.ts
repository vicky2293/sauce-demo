import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';

export class CartPage extends BasePage {
  private readonly inventoryItemName: Locator;
  private readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async verifyCartPage() {
    await this.verifyUrl(Constants.CART_URL);
    await this.verifyTitle('Your Cart');
  }

  async verifyProductInCart(productName: string) {
    const product = this.inventoryItemName.filter({ hasText: productName });
    await expect(product).toBeVisible();
  }

  async clickCheckoutButton() {
    await this.clickElement(this.checkoutButton);
  }
}
