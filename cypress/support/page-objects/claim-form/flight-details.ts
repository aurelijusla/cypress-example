import { ClaimFormPage } from "./page";

export class FlightDetailsPage extends ClaimFormPage {
  get flightDetails() {
    return cy.contains("#page-view-title", "Flight details");
  }

  selectAirlines(airlines: string) {
    cy.contains("Enter airlines name").type(airlines);
    return cy
      .get(".Select-option")
      .first()
      .click();
  }

  selectToday(fieldId: string) {
    cy.get(`#flight-${fieldId}-date`).click();
    return cy.get(".rdtToday:visible").click();
  }

  insertFlightNumber(fieldId: string, flightNumber: string) {
    return cy
      .get(`#flight-${fieldId}-number`)
      .eq(0)
      .type(flightNumber);
  }
}
