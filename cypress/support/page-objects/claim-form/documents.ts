import { ClaimFormPage } from "./page";

export class DocumentsPage extends ClaimFormPage {
  get documents() {
    return cy.contains("#page-view-title", "Flight documents");
  }

  insertReservationNumber(reservationNumber: string) {
    return cy.get("#reservation-number").type(reservationNumber);
  }
}
