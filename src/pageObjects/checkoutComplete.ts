import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';
import { SuccessMessage } from '../utils/successMessage';

export class CheckoutCompletePage extends BasePage {
  private readonly completeHeader: Locator;
  private readonly completeText: Locator;

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

    expect(headerText).toBe(SuccessMessage.successMessage);
    expect(completeText).toBe(SuccessMessage.successTextMessage);
  }
}
