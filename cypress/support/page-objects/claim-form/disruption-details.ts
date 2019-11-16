import { ClaimFormPage } from "./page";

export class DisruptionDetailsPage extends ClaimFormPage {
  get disruptionDetails() {
    return cy.contains("#page-view-title", "Type of disruption");
  }
}
