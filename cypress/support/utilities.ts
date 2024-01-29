const assertTextExact = (selector: string, expectedText: string) => {
  cy.get(selector).should("have.text", expectedText);
};

const assertText = (selector: string, expectedText: string) => {
  cy.get(selector).should("contain.text", expectedText);
};

const assertClass = (selector: string, className: string) => {
  cy.get(selector).should("have.class", className);
};

export { assertTextExact, assertText, assertClass };
