import { test } from '../fixtures/fixture';
import { Constants } from '../utils/constants';
import { CheckoutData } from '../utils/checkoutData';

test.describe('greenbone assignment', () => {
  test('Verify whether the `standard_user` is able to log in with valid credentials.', async ({loginPage, inventoryPage}) => {
    await loginPage.visitLoginPage();
    await loginPage.login(Constants.VALID_USERNAME, Constants.VALID_PASSWORD);
    await inventoryPage.verifyInventoryPage();
  });

  test('Verify whether the `standard_user` is able to place an order successfully with valid details.', async ({loginPage, inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage, commonPage}) => {
    await test.step('visit saucedemo webpage', async () => {
      await loginPage.visitLoginPage();
      await loginPage.login(Constants.VALID_USERNAME, Constants.VALID_PASSWORD);
      await inventoryPage.verifyInventoryPage();
    });

    await test.step('add product to cart', async () => {
      await inventoryPage.addToCartButton('Sauce Labs Backpack');
      await inventoryPage.addToCartButton('Sauce Labs Bike Light');
      await inventoryPage.clickShoppingCart();
      await cartPage.verifyCartPage();
    });

    await test.step('verify product in cart', async () => {
      await cartPage.verifyProductInCart('Sauce Labs Backpack');
      await cartPage.verifyProductInCart('Sauce Labs Bike Light');
      await cartPage.clickCheckoutButton();
      await checkoutStepOnePage.verifyCheckoutStepOnePage();
    });

    await test.step('fill checkout information', async () => {
      await checkoutStepOnePage.fillCheckoutForm(CheckoutData.FIRST_NAME, CheckoutData.LAST_NAME, CheckoutData.ZIP_CODE);
      await checkoutStepOnePage.clickContinueButton();
      await checkoutStepTwoPage.verifyCheckoutStepTwoPage();
    });

    await test.step('finish checkout', async () => {
      await checkoutStepTwoPage.verifyProductInCart('Sauce Labs Backpack');
      await checkoutStepTwoPage.verifyProductInCart('Sauce Labs Bike Light');
      await checkoutStepTwoPage.clickFinishButton();
      await checkoutCompletePage.verifySuccessMessage();
    });

    await test.step('verify order confirmation', async () => {
    await checkoutCompletePage.verifyCheckoutPage();
    await checkoutCompletePage.verifySuccessMessage();
    await commonPage.logout();
    });
  });
});
