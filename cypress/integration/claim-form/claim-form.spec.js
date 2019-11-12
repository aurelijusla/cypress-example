import ClaimForm from "../../support/page-objects/claim-form.po";

// TODOS:
// refactor
// Add ts check
// move out test data
// Add a document (?)
// Test 2
// Test 3
// Prettier

describe("direct flight claim, happy flow", () => {
  let claimForm = new ClaimForm();

  it('should complete "Flight itinerary" step', () => {
    claimForm.selectAirport("departure", "vno");
    claimForm.selectAirport("arrival", "arn");
    claimForm.clickContinue();
    claimForm.isDisruptionDetailsShown().should("be.visible");
  });

  it('should complete "Disruption details" step', () => {
    claimForm.clickRadioButton("Flight cancelled");
    claimForm.clickRadioButton("Never arrived");
    claimForm.clickRadioButton("Less than 14 days");
    claimForm.clickContinue();
    claimForm.isDisruptionReasonShown().should("be.visible");
  });

  it('should complete "Disruption reason" step', () => {
    claimForm.clickRadioButton("Other reasons");
    claimForm.typeInTextArea("This is an automated test.");
    claimForm.clickContinue();
    claimForm.isFlightDetailsShown().should("be.visible"); // Fix
  });

  it('should complete "Flight details" step', () => {
    claimForm.selectAirlines("sk");
    claimForm.selectToday();
    claimForm.insertFlightNumber("1234");
    claimForm.clickContinue();
    claimForm.isDocumentsShown().should("be.visible");
  });

  it('should complete "Documents" step', () => {
    // claimForm.insertReservationNumber('123456');
    // add uploading a file
    cy.contains("Continue").click({ force: true });
    claimForm.isPassengerInformationShown().should("be.visible");
  });

  it('should complete "Passenger information" step', () => {
    claimForm.insertUserData("name", "John");
    claimForm.insertUserData("surname", "Doe");
    claimForm.selectBirthdayDate("1990", "Jan", "1");
    claimForm.insertUserData("email", "john.doe@test.com");
    claimForm.insertMiscData("address", "Fake st. 99");
    claimForm.insertMiscData("city", "Fakeville");
    claimForm.selectCountry("lit");
    claimForm.insertMiscData("userphone", "12345");
    claimForm.clickTermsAndConditions();
    cy.contains("Submit claim").should("be.enabled"); // Temp until finish
  });

  // it('should complete "Signature" step', () => {

  // })

  // 7 step. Signature
  // 8 step. Finish!
});

// describe('Full claim direct flight, happy flow', () => {
//     Placeholder
// })

// describe('Full claim, flight not eligible for compensation', () => {
//     Placeholder
//       })
// })
