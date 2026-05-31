import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';

export class InventoryPage extends BasePage {
  private readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async verifyInventoryPage() {
    await this.verifyUrl(Constants.INVENTORY_URL);
    await this.verifyTitle('Products');
  }

  async addToCartButton(product: string) {
    const productName = product.toLowerCase().replace(/\s/g, '-');
    const addToCartButton = this.page.locator(
      `[data-test="add-to-cart-${productName}"]`
    );
    await this.verifyElementVisible(addToCartButton);
    await addToCartButton.click();
  }

  async clickShoppingCart() {
    await this.clickElement(this.shoppingCartLink);
  }
}
