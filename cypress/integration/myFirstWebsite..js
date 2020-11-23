/// <reference types="cypress" />

describe("My First Website", () => {
  beforeEach(() => {
    cy.visit("./index.html");
  });
  it("has the correct title", () => {
    cy.title().should("eq", "My First Website");
  });
  describe("The site-contents", () => {
    it("has an h2", () => {
      cy.get("h2").should("exist");
    });
    it("has the text, 'Hello World'", () => {
      cy.get("h2").contains("Hello World!");
    });
  });
});
