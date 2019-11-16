import { ClaimFormPage } from "./page";

export class PassengerInformationPage extends ClaimFormPage {
  get passengerInformation() {
    return cy.contains("#page-view-title", "Basic information");
  }

  clickTermsAndConditions() {
    return cy.get('[name="termsConditions"]').click();
  }

  insertUserData(parameter: string, value: string) {
    return cy.get(`#user-${parameter}`).type(value);
  }

  selectBirthdayDate(year: string, month: string) {
    cy.get("#user-birthdate").click();
    cy.contains(year).click();
    cy.contains(month).click();
    cy.wait(1000);
    return cy
      .get(
        "#step-page-content > div.sc-dvCyap.jbjnKp.sc-dnqmqq.iWPryR > div:nth-child(2) > div > form > div:nth-child(3) > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div > div"
      )
      .click();
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
