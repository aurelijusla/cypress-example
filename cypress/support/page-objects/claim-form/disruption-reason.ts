import { ClaimFormPage } from "./page";

export class DisruptionReasonPage extends ClaimFormPage {
  typeInTextArea(text: string) {
    return cy.get("textarea").type(text);
  } // fix test data

  get disruptionReason() {
    return cy.contains("#page-view-title", "Reason for the disruption");
  }
}
