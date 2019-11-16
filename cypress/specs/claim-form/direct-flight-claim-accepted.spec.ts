import {
  TestData,
  FlightItineraryPage,
  DisruptionDetailsPage,
  DisruptionReasonPage,
  FlightDetailsPage,
  DocumentsPage,
  PassengerInformationPage,
} from "../../support";

describe("direct flight claim accepted", () => {
  before(() => {
    cy.visit("");
  });

  let testData = new TestData();

  let flightItineraryPage = new FlightItineraryPage();
  let disruptionDetailsPage = new DisruptionDetailsPage();
  let disruptionReasonPage = new DisruptionReasonPage();
  let flightDetailsPage = new FlightDetailsPage();
  let documentsPage = new DocumentsPage();
  let passengerInformationPage = new PassengerInformationPage();

  it('should complete "Flight itinerary" step', () => {
    flightItineraryPage.selectAirport(
      "departure",
      testData.airports.euAirports[0].abbreviation
    );
    flightItineraryPage.selectAirport(
      "arrival",
      testData.airports.euAirports[1].abbreviation
    );
    flightItineraryPage.clickContinue();
    disruptionDetailsPage.disruptionDetails.should("be.visible");
  });

  it('should complete "Disruption details" step', () => {
    disruptionDetailsPage.clickRadioButton("Flight cancelled");
    disruptionDetailsPage.clickRadioButton("Never arrived");
    disruptionDetailsPage.clickRadioButton("Less than 14 days");
    disruptionDetailsPage.clickContinue();
    disruptionReasonPage.disruptionReason.should("be.visible");
  });

  it('should complete "Disruption reason" step', () => {
    disruptionReasonPage.clickRadioButton("Other reasons");
    disruptionReasonPage.typeInTextArea(testData.testText);
    disruptionReasonPage.clickContinue();
    flightDetailsPage.flightDetails.should("be.visible"); // Fix
  });

  it('should complete "Flight details" step', () => {
    flightDetailsPage.selectAirlines(testData.airlines);
    flightDetailsPage.selectToday("1");
    flightDetailsPage.insertFlightNumber("1", testData.flightNumbers[0]);
    flightDetailsPage.clickContinue();
    documentsPage.documents.should("be.visible");
  });

  it('should complete "Documents" step', () => {
    // add uploading a file
    documentsPage.clickContinue(); // Bug: Element not visible.
    passengerInformationPage.passengerInformation.should("be.visible");
  });

  it('should complete "Passenger information" step', () => {
    passengerInformationPage.insertUserData("name", testData.user.name);
    passengerInformationPage.insertUserData("surname", testData.user.surname);
    passengerInformationPage.selectBirthdayDate(
      testData.user.birthYear,
      testData.user.birthMonth,
      testData.user.birthDay
    );
    passengerInformationPage.insertUserData("email", testData.user.email);
    passengerInformationPage.insertUserData(
      "email-repeat",
      testData.user.email
    );
    passengerInformationPage.insertMiscData("address", testData.user.address);
    passengerInformationPage.insertMiscData("city", testData.user.city);
    passengerInformationPage.selectCountry(testData.user.country);
    passengerInformationPage.insertUserData("phone", testData.user.phone);
    passengerInformationPage.clickTermsAndConditions();
    passengerInformationPage.submitButton.should("be.enabled");
    // Note: Decided to end here due to lack of time.
  });
});

/*///////////////////////////////////////////////////////////////////
    Test case
Should submit the direct flight claim form if claim is eligible.

    Prerequisites
Should be on 'https://claim.skycop.com/'.

/////////////////////////////////////////////////////////////////////
    Step 1
'Flight itinerary'

    Step 1.1
In 'Departed from' select an EU airport such as 'VNO'.
    Step 1.2
In 'Final destination airport' select an EU airport such as 'ARN'.
    Step 1.3
In 'Was it a direct flight' select 'Yes'.
    Step 1.4
Click 'Continue'.

    Assertion
'Disruption details' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 2
'Disruption details'

    Step 2.1
In 'What was the problem of the flight you encountered?' select 'Flight cancelled'.
    Step 2.2
In 'How long were you delayed to reach the final airport?' select 'Never arrived'.
    Step 2.3
In 'When were you informed about flight cancellation?' select 'Less than 14 days'.
    Step 2.4
Click 'Continue'.

    Assertion
'Disruption reason' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 3
'Disruption reason'

    Step 3.1
In 'Did the airlines tell you why the flight was disrupted?' select 'Yes'.
    Step 3.2
In 'What was the reason provided by the airlines?' select 'Other reasons'.
    Step 3.3
In 'Briefly describe what happened' type in 'Test'.
    Step 3.4
Click 'Continue'.

    Assertion
'Flight details' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 4
'Flight details'

    Step 4.1
In 'Airlines' select 'SK'.
    Step 4.2
In 'Flight date' select current day.
    Step 4.3
In 'Flight number' insert '1234'.
    Step 4.4
Click 'Continue'.

    Assertion
'Documents' step should be shown.

/////////////////////////////////////////////////////////////////////
    Step 5
'Documents'

    Step 5.1
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
