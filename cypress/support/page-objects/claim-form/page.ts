export class ClaimFormPage {
  clickContinue() {
    return cy.contains("button", "Continue").click({ force: true });
    // force: true is because of Documents issue
  }

  clickRadioButton(buttonText: string) {
    return cy.contains(buttonText).click();
  }
}
