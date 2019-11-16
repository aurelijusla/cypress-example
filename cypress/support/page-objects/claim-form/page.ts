export class ClaimFormPage {
  clickContinue() {
    cy.wait(1000);
    return cy.contains("Continue").click({ force: true });
    // force: true is because of Documents issue
  }

  clickRadioButton(buttonText: string) {
    return cy.contains(buttonText).click();
  }
}
