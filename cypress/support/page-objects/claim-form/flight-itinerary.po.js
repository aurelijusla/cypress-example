import ClaimFormPage from "./claim-form.po";

export default class FlightItineraryPage extends ClaimFormPage {
  selectAirport(direction, airport) {
    switch (direction) {
      case "departure":
        cy.contains("#airport-departure", "Enter the city").click();
        cy.get(".is-focused").type(airport);
        break;
      case "arrival":
        cy.contains("#airport-arrival", "Enter the city").click();
        cy.get(".is-focused").type(airport);
        break;
      case "stop-1":
        cy.contains("#airport-stop-1", "Enter the city").click();
        cy.get(".is-focused").type(airport);
        break;
    }
    return cy
      .get(".Select-option")
      .first()
      .click();
  }

  selectIndirectFlight() {
    return cy.contains("No").click();
  }
}
