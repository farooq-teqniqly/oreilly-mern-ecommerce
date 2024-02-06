const getByTestId = (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
};

const getBySelector = (selector: string) => {
  return cy.get(selector);
};

const getByClass = (className: string) => {
  return cy.get(`.${className}`);
};

const assertTextExact = (
  chainable: Cypress.Chainable<JQuery<HTMLElement>>,
  expectedText: string,
) => {
  chainable.should("have.text", expectedText);
};

const assertText = (chainable: Cypress.Chainable<JQuery<HTMLElement>>, expectedText: string) => {
  chainable.should("contain.text", expectedText);
};

const assertArrayLength = (
  chainable: Cypress.Chainable<JQuery<HTMLElement>>,
  expectedLength: number,
) => {
  chainable.should("have.length", expectedLength);
};

const assertClass = (chainable: Cypress.Chainable<JQuery<HTMLElement>>, className: string) => {
  chainable.should("have.class", className);
};

const assertTestId = (testId: string) => {
  getByTestId(testId).should("exist");
};

const assertAttribute = (
  chainable: Cypress.Chainable<JQuery<HTMLElement>>,
  attr: string,
  expectedValue: string,
) => {
  chainable.get(`[${attr}="${expectedValue}"]`).should("exist");
};

export {
  assertTextExact,
  assertText,
  assertClass,
  assertTestId,
  assertAttribute,
  getByTestId,
  getBySelector,
  assertArrayLength,
  getByClass,
};
