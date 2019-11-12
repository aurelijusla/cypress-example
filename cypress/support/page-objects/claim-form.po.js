// fix ts-check
export default class ClaimForm {

    selectAirport(direction, airport) {
        switch (direction) {
            case 'departure':
                cy.contains('#airport-departure', 'Enter the city').click();
                cy.get('.is-focused').type(airport);
            break;
            case 'arrival':
                cy.contains('#airport-arrival', 'Enter the city').click();
                cy.get('.is-focused').type(airport);
            break;
        }
        return cy.get('.Select-option').first().click();
    }

    selectAirlines(airlines) {
        cy.contains('Enter airlines name').type(airlines);
        return cy.get('.Select-option').first().click();
    }

    selectToday() {
        cy.get('#flight-1-date').click();
        return cy.get('.rdtToday').click();
    }

    insertFlightNumber(flightNumber) {
        return cy.get('#flight-1-number').type(flightNumber);
    }

    insertReservationNumber(reservationNumber) {
        return cy.get('#reservation-number').type(reservationNumber);
    }

    clickContinue() {
        return cy.contains('button', 'Continue').click({ force: true });
        // force: true is because of Documents issue
    }

    clickRadioButton(buttonText) {
        return cy.contains(buttonText).click();
    }

    clickTermsAndConditions() {
        cy.get('[name="terms-conditions"]').click();
    }

    typeInTextArea() {
        return cy.get('textarea').type('This is an automated test.');
    }

    insertUserData(parameter, value) {
        return cy.get(`#user-${parameter}`).type(value);
    }

    insertMiscData(parameter, value) {
        return cy.get(`#${parameter}`).type(value);
    }

    selectBirthdayDate(year, month, day) {
        cy.get('#user-birthdate').click();
        cy.contains(year).click();
        cy.contains(month).click();
        cy.contains(day).click();
    }

    selectCountry(country) {
        cy.contains('Enter your country').type(country);
        cy.get('.Select-option').first().click();
    }

    isDisruptionDetailsShown() {
        return cy.contains('#page-view-title', 'Type of disruption');
    }

    isDisruptionReasonShown() {
        return cy.contains('#page-view-title', 'Reason for the disruption');
    }

    isFlightDetailsShown() {
        return cy.contains('#page-view-title', 'Flight details');
    }

    isDocumentsShown() {
        return cy.contains('#page-view-title', 'Flight documents');
    }

    isPassengerInformationShown() {
        return cy.contains('#page-view-title', 'Basic information');
    }
}