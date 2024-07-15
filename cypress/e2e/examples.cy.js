describe("various example", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  //   it("multi page testing", () => {
  //     // cy.visit("/").pause();
  //     // cy.getDataTest("nav-why-cypress?").click();
  //     // cy.location("pathname").should("equal", "/");

  //     cy.getDataTest("nav-overview").click();
  //     cy.location("pathname").should("equal", "/overview");

  //     cy.getDataTest("nav-fundamentals").click();
  //     cy.location("pathname").should("equal", "/fundamentals");

  //     cy.getDataTest("nav-forms").click();
  //     cy.location("pathname").should("equal", "/forms");

  //     cy.getDataTest("nav-component").click();
  //     cy.location("pathname").should("equal", "/component");

  //     cy.getDataTest("nav-best-practices").click();
  //     cy.location("pathname").should("equal", "/best-practices");

  //     cy.getDataTest("nav-examples").click();
  //     cy.location("pathname").should("equal", "/examples");
  //     // cy.contains(/Examples/i);
  //   });
  //   it("intercepts", () => {
  //     cy.intercept("POST", "http://localhost:3000/examples", {
  //       //   body: {
  //       //     message: "sucessfully intercepted request",
  //       //   },
  //       fixture: "example.json",
  //     });
  //     cy.getDataTest("post-button").click();
  //   });
  it("grudges", () => {
    cy.contains(/add some grudges/i);
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.getDataTest("clear-grudge-list").should("not.exist");
    cy.getDataTest("grudge-list-title").should("have.text", "Add Some Grudges");
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("some grudge");
    });
    cy.getDataTest("add-grudge-button").click();

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.getDataTest("grudge-input").within(() => {
        cy.get("input").type("new grudges");
    });
    cy.getDataTest("add-grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 2);
        cy.get("li").its(0).should("contains.text", "some grudge");
    });
    cy.getDataTest("grudge-list-title").should("have.text", "Grudges");

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.getDataTest("clear-grudge-list").click();

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
  });
});
