import ClaimFormPage from "./claim-form.po";

export default class DocumentsPage extends ClaimFormPage {
  documents() {
    return cy.contains("#page-view-title", "Flight documents");
  }

  insertReservationNumber(reservationNumber) {
    return cy.get("#reservation-number").type(reservationNumber);
  }
}
