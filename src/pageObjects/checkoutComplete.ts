import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';

export class CheckoutCompletePage extends BasePage {
  private readonly completeHeader: Locator;
  private readonly completeText: Locator;

  private static readonly successMessage = "Thank you for your order!";
  private static readonly successTextMessage = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";

  constructor(page: Page) {
    super(page);
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.completeText = page.locator('[data-test="complete-text"]');
  }

  async verifyCheckoutPage() {
    await this.verifyUrl(Constants.CHECKOUT_COMPLETE_URL);
    await this.verifyTitle('Checkout: Complete!');
  }

  async verifySuccessMessage() {
    await this.verifyElementVisible(this.completeHeader);
    await this.verifyElementVisible(this.completeText);

    const headerText = await this.getElementText(this.completeHeader);
    const completeText = await this.getElementText(this.completeText);

    expect(headerText).toBe(CheckoutCompletePage.successMessage);
    expect(completeText).toBe(CheckoutCompletePage.successTextMessage);
  }
}
