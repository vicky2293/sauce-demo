import { test } from '../fixtures/fixture';
import { Constants } from '../utils/constants';

test.describe('greenbone assignment', () => {
  test('Verify whether the `standard_user` is able to log in with valid credentials.', async ({loginPage, inventoryPage}) => {
    await loginPage.visitLoginPage();
    await loginPage.login(Constants.VALID_USERNAME, Constants.VALID_PASSWORD);
    await inventoryPage.verifyInventoryPage();
  });
});
