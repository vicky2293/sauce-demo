import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Constants } from '../utils/constants';

export class CheckoutStepOnePage extends BasePage {
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly zipCodeInput: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.zipCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async verifyCheckoutStepOnePage() {
    await this.verifyUrl(Constants.CHECKOUT_STEP_ONE_URL);
    await this.verifyTitle('Checkout: Your Information');
  }

  async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
    await this.fillInput(this.firstNameInput, firstName);
    await this.fillInput(this.lastNameInput, lastName);
    await this.fillInput(this.zipCodeInput, zipCode);
  }

  async clickContinueButton() {
    await this.clickElement(this.continueButton);
  }
}
