const assertText = (selector: string, expectedText: string) => {
  cy.get(selector).should("have.text", expectedText);
};

export { assertText };
