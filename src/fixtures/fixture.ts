import { test as base } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { InventoryPage } from '../pageObjects/inventoryPage';
import { CartPage } from '../pageObjects/cartPage';
import { CheckoutStepOnePage } from '../pageObjects/checkoutStepOnePage';
import { CheckoutStepTwoPage } from '../pageObjects/checkoutStepTwoPage';
import { CheckoutCompletePage } from '../pageObjects/checkoutComplete';
import { CommonPage } from '../pageObjects/commonPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;
  commonPage: CommonPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutStepOnePage: async ({ page }, use) => {
    await use(new CheckoutStepOnePage(page));
  },
  checkoutStepTwoPage: async ({ page }, use) => {
    await use(new CheckoutStepTwoPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
});

export { expect } from '@playwright/test';
