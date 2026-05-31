export class Constants {
  static readonly BASE_URL = process.env.BASE_URL!;
  static readonly INVENTORY_URL = '/inventory.html';
  static readonly CART_URL = '/cart.html';
  static readonly CHECKOUT_STEP_ONE_URL = '/checkout-step-one.html';
  static readonly CHECKOUT_STEP_TWO_URL = '/checkout-step-two.html';
  static readonly CHECKOUT_COMPLETE_URL = '/checkout-complete.html';

  static readonly VALID_USERNAME = process.env.VALID_USERNAME!;
  static readonly VALID_PASSWORD = process.env.VALID_PASSWORD!;

  static readonly INVALID_USERNAME = process.env.INVALID_USERNAME!;
  static readonly INVALID_PASSWORD = process.env.INVALID_PASSWORD!;
}
