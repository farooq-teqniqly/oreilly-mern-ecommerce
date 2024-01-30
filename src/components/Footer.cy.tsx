import Footer from "./Footer";
import { assertTextExact, getBySelector } from "../../cypress/support/utilities";

describe("<Footer />", () => {
  it("renders copyright text with current year", () => {
    cy.mount(<Footer />);
    const year = new Date().getFullYear();
    const footer = getBySelector("footer");
    assertTextExact(footer, `Copyright © Pro Shop ${year}`);
  });
});
