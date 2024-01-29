import Footer from "./Footer";
import { assertTextExact } from "../../cypress/support/utilities";

describe("<Footer />", () => {
  it("renders", () => {
    cy.mount(<Footer />);
    const year = new Date().getFullYear();
    assertTextExact("footer", `Copyright © Pro Shop ${year}`);
  });
});
