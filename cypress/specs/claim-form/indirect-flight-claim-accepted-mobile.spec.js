import FlightItineraryPage from "../../support/page-objects/claim-form/flight-itinerary.po";
import DisruptionDetailsPage from "../../support/page-objects/claim-form/disruption-details.po";
import DisruptionReasonPage from "../../support/page-objects/claim-form/disruption-reason.po";
import FlightDetailsPage from "../../support/page-objects/claim-form/flight-details.po";
import DocumentsPage from "../../support/page-objects/claim-form/documents.po";
import PassengerInformationPage from "../../support/page-objects/claim-form/passenger-information.po";

describe("indirect flight claim accepted using iphone 6 (viewport 375px x 667px)", () => {
  let flightItineraryPage = new FlightItineraryPage();
  let disruptionDetailsPage = new DisruptionDetailsPage();
  let disruptionReasonPage = new DisruptionReasonPage();
  let flightDetailsPage = new FlightDetailsPage();
  let documentsPage = new DocumentsPage();
  let passengerInformationPage = new PassengerInformationPage();

  beforeEach(() => {
    cy.viewport("iphone-6");
  });

  it('should complete "Flight itinerary" step', () => {
    flightItineraryPage.selectAirport("departure", "vno");
    flightItineraryPage.selectAirport("arrival", "arn");
    flightItineraryPage.selectIndirectFlight();
    flightItineraryPage.selectAirport("stop-1", "rix");
    flightItineraryPage.clickContinue();
    disruptionDetailsPage.disruptionDetails().should("be.visible");
  });

  it('should complete "Disruption details" step', () => {
    disruptionDetailsPage.clickRadioButton("Flight delayed");
    disruptionDetailsPage.clickRadioButton("Missed connecting flight");
    disruptionDetailsPage.clickContinue();
    disruptionReasonPage.disruptionReason().should("be.visible");
  });

  it('should complete "Disruption reason" step', () => {
    disruptionReasonPage.clickRadioButton("Aircraft technical problem");
    disruptionReasonPage.typeInTextArea("This is an automated test.");
    disruptionReasonPage.clickContinue();
    flightDetailsPage.flightDetails().should("be.visible"); // Fix
  });

  it('should complete "Flight details" step', () => {
    flightDetailsPage.selectAirlines("sk");
    flightDetailsPage.selectToday("1");
    flightDetailsPage.insertFlightNumber("1", "1234");
    flightDetailsPage.selectAirlines("sk");
    flightDetailsPage.selectToday("2");
    flightDetailsPage.insertFlightNumber("2", "5678");
    flightDetailsPage.clickContinue();
    documentsPage.documents().should("be.visible");
  });

  it('should complete "Documents" step', () => {
    documentsPage.insertReservationNumber("123456");
    // Note: Could add uploading a file
    documentsPage.clickContinue();
    passengerInformationPage.isPassengerInformationShown().should("be.visible");
  });

  it('should complete "Passenger information" step', () => {
    passengerInformationPage.insertUserData("name", "John");
    passengerInformationPage.insertUserData("surname", "Doe");
    passengerInformationPage.selectBirthdayDate("1990", "Jan", "1");
    passengerInformationPage.insertUserData("email", "john.doe@test.com");
    passengerInformationPage.insertMiscData("address", "Fake st. 99");
    passengerInformationPage.insertMiscData("city", "Fakeville");
    passengerInformationPage.selectCountry("lit");
    passengerInformationPage.insertUserData("phone", "12345");
    passengerInformationPage.clickTermsAndConditions();
    passengerInformationPage.clickTermsAndConditions();
    passengerInformationPage.submitButton().should("be.enabled");
    // Note: Decided to end here due to lack of time.
  });
});

/*///////////////////////////////////////////////////////////////////
    Test case
Should submit the indirect flight claim form if claim is eligible using iphone 6 (viewport 375px x 667px) size screen.

    Prerequisites
Should be on 'https://claim.skycop.com/'.

/////////////////////////////////////////////////////////////////////
    Step 1
'Flight itinerary'.

    Step 1.1
In 'Departed from' select an EU airport such as 'VNO'.
    Step 1.2
In 'Final destination airport' select an EU airport such as 'ARN'.
    Step 1.3
In 'Was it a direct flight' select 'No'.
    Step 1.4
In 'How many stops did you have?' select '1'.
    Step 1.5
In 'Where did you have a stop?' select an EU airport such as 'RIX'.
    Step 1.6
Click 'Continue'.

    Assertion
'Disruption details' step should be shown.
/////////////////////////////////////////////////////////////////////
    Step 2
'Disruption details'.

    Step 2.1
In 'What was the problem of the flight you encountered?' select 'Flight delayed'.
    Step 2.2
In 'How long were you delayed to reach the final airport?' select 'Missed connecting flight'.
    Step 2.3
Click 'Continue'.

    Assertion
'Disruption reason' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 3
'Disruption reason'.

    Step 3.1
In 'Did the airlines tell you why the flight was disrupted?' select 'Yes'.
    Step 3.2
In 'What was the reason provided by the airlines?' select 'Aircraft technical problem'.
    Step 3.3
In 'Briefly describe what happened' type in 'Test'.
    Step 3.4
Click 'Continue'.

    Assertion
'Flight details' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 4
'Flight details'.

    Step 4.1
In 'Airlines' select 'SK'.
    Step 4.2
In 'Flight date' select current day.
    Step 4.3
In 'Flight number' insert '1234'.
    Step 4.4
In 'Airlines' select 'SK'.
    Step 4.5
In 'Flight date' select current day.
    Step 4.6
In 'Flight number' insert '5678'.
    Step 4.7
Click 'Continue'.

    Assertion
'Documents' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 5
'Documents'

    Step 5.1
In 'Reservation number' insert '123456'.

    Step 5.2
Click 'Continue'.

    Assertion
'Passenger information' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 6
'Passenger information'

    Step 6.1
In 'First name' insert 'Test_Aurelijus'.
    Step 6.2
In 'Last name' select a non-EU airport such as 'Test_Lasys'.
    Step 6.3
In 'Birthday' select '1994-07-20'.
    Step 6.4
In 'Email' insert 'aurelijus.lasys@tst.com'.
    Step 6.5
In 'Repeat email' insert 'aurelijus.lasys@tst.com'.
    Step 6.6
In 'Address' select 'Test'.
    Step 6.7
In 'Country' select 'Test'.
    Step 6.8
In 'City' select 'Test'.
    Step 6.9
In 'Phone' select 'Lithuania' '1234567'.
    Step 6.10
Click 'I agree to the Terms...' checkbox.
    Step 6.11
Click 'Submit claim'.

    Assertion
'Submit claim' button should be available.
*/
