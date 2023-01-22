describe("example registration", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/registration");
  });

  it("should be able to register", () => {
    cy.findByRole("textbox", { name: "E-mail" }).clear().type("ala@wp.pl");
    cy.findByLabelText(/password/i).type("qwerty");
    cy.findByRole("textbox", { name: "Language" }).type("python");

    cy.findByRole("button", { name: /send/i }).click();

    cy.contains("E-mail: ala@wp.pl, password: qwerty").should("exist");
  });
});
