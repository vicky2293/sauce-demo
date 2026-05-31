import { test as base } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { InventoryPage } from '../pageObjects/inventoryPage';


type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  }
});

export { expect } from '@playwright/test';
