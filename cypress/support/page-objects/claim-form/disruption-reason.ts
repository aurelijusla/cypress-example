import { ClaimFormPage } from "./page";

export class DisruptionReasonPage extends ClaimFormPage {
  get disruptionReason() {
    return cy.contains("#page-view-title", "Reason for the disruption");
  }

  typeInTextArea(text: string) {
    return cy.get("textarea").type(text);
  }
}
