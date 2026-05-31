import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;
  private readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async verifyPageTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async verifyElementClickable(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await expect(locator).toBeEnabled();
  }

  async clickElement(locator: Locator) {
    await this.verifyElementClickable(locator);
    await locator.click();
  }

  async verifyElementVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await expect(locator).toBeVisible();
  }

  async fillInput(locator: Locator, value: string) {
    await this.verifyElementVisible(locator);
    await locator.fill(value);
  }

  async verifyUrl(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async verifyTitle(expectedTitle: string) {
    await expect(this.title).toHaveText(expectedTitle);
  }

  async getElementText(locator: Locator) {
    return await locator.textContent();
  }
}
