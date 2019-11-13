import ClaimFormPage from "./claim-form.po";

export default class PassengerInformationPage extends ClaimFormPage {
  passengerInformation() {
    return cy.contains("#page-view-title", "Basic information");
  }

  clickTermsAndConditions() {
    return cy.get('[name="terms-conditions"]').click();
  }

  insertUserData(parameter, value) {
    return cy.get(`#user-${parameter}`).type(value);
  }

  insertMiscData(parameter, value) {
    return cy.get(`#${parameter}`).type(value);
  }

  selectBirthdayDate(year, month, day) {
    cy.get("#user-birthdate").click();
    cy.contains(year).click();
    cy.contains(month).click();
    return cy.contains(day).click();
  }

  selectCountry(country) {
    cy.contains("Enter your country").type(country);
    return cy
      .get(".Select-option")
      .first()
      .click();
  }

  submitButton() {
    return cy.contains("Submit claim");
  }
}
