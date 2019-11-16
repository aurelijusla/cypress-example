export class SharedActions {
  goToClaimPage() {
    return cy.visit("");
  }

  setViewport(option: any) {
    return cy.viewport(option);
  }
}
