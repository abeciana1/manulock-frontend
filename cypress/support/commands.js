/// <reference types="cypress" />
// * Cypress API interceptor
Cypress.Commands.add(
  'apiInterceptor',
  (method, url, alias, statusCode = 200, response = {}) => {
    cy.intercept(
      {
        method: method,
        url: url,
      },
      {
        statusCode: statusCode,
        body: response,
      }
    ).as(alias);
  }
);
