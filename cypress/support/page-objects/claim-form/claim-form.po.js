// fix ts-check
// divide pos
// create test data file
export default class ClaimFormPage {
  clickContinue() {
    return cy.contains("button", "Continue").click({ force: true });
    // force: true is because of Documents issue
  }

  clickRadioButton(buttonText) {
    return cy.contains(buttonText).click();
  }
}
