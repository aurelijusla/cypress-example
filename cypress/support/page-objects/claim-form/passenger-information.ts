import { ClaimFormPage } from "./page";

export class PassengerInformationPage extends ClaimFormPage {
  get passengerInformation() {
    return cy.contains("#page-view-title", "Basic information");
  }

  clickTermsAndConditions() {
    return cy.get('[name="terms-conditions"]').click();
  }

  insertUserData(parameter: string, value: string) {
    return cy.get(`#user-${parameter}`).type(value);
  }

  insertMiscData(parameter: string, value: string) {
    return cy.get(`#${parameter}`).type(value);
  }

  selectBirthdayDate(year: string, month: string, day: string) {
    cy.get("#user-birthdate").click();
    cy.contains(year).click();
    cy.contains(month).click();
    return cy.contains(day).click();
  }

  selectCountry(country: string) {
    cy.contains("Enter your country").type(country);
    return cy
      .get(".Select-option")
      .first()
      .click();
  }

  get submitButton() {
    return cy.contains("Submit claim");
  }
}
