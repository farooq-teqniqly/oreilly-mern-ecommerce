import Header from "./Header";
import {
  assertText,
  assertClass,
  assertTestId,
  getBySelector,
  getByClass,
} from "../../cypress/support/utilities";

describe("<Header />", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it("renders menu items", () => {
    const header = getBySelector("header");
    assertText(header, "Pro Shop");
    assertText(header, "Cart");
    assertText(header, "Sign In");
  });

  it("renders menu icons", () => {
    const cartIcon = getByClass("fa-cart-shopping");
    assertClass(cartIcon, "fa-cart-shopping");

    const userIcon = getByClass("fa-user");
    assertClass(userIcon, "fa-user");
  });

  it("renders logo", () => {
    assertTestId("logo");
  });
});
