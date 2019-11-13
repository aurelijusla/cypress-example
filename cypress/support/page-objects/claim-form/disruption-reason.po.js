import ClaimFormPage from "./claim-form.po";

export default class DisruptionReasonPage extends ClaimFormPage {
  typeInTextArea() {
    return cy.get("textarea").type("This is an automated test.");
  } // fix test data

  disruptionReason() {
    return cy.contains("#page-view-title", "Reason for the disruption");
  }
}
