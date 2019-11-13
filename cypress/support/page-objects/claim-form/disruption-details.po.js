import ClaimFormPage from "./claim-form.po";

export default class DisruptionDetailsPage extends ClaimFormPage {
  disruptionDetails() {
    return cy.contains("#page-view-title", "Type of disruption");
  }
}
