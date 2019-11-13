import ClaimFormPage from "./claim-form.po";

export default class FlightDetailsPage extends ClaimFormPage {
  flightDetails() {
    return cy.contains("#page-view-title", "Flight details");
  }

  selectAirlines(airlines) {
    cy.contains("Enter airlines name").type(airlines);
    return cy
      .get(".Select-option")
      .first()
      .click();
  }

  selectToday(fieldId) {
    cy.get(`#flight-${fieldId}-date`).click();
    return cy.get(".rdtToday:visible").click();
  }

  insertFlightNumber(fieldId, flightNumber) {
    return cy
      .get(`#flight-${fieldId}-number`)
      .eq(0)
      .type(flightNumber);
  }
}
