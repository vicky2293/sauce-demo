export class Constants {
  static readonly BASE_URL = process.env.BASE_URL!;
  static readonly INVENTORY_URL = process.env.INVENTORY_URL!;
  static readonly CART_URL = process.env.CART_URL!;
  static readonly CHECKOUT_STEP_ONE_URL = process.env.CHECKOUT_STEP_ONE_URL!;
  static readonly CHECKOUT_STEP_TWO_URL = process.env.CHECKOUT_STEP_TWO_URL!;
  static readonly CHECKOUT_COMPLETE_URL = process.env.CHECKOUT_COMPLETE_URL!;

  static readonly VALID_USERNAME = process.env.VALID_USERNAME!;
  static readonly VALID_PASSWORD = process.env.VALID_PASSWORD!;
}
