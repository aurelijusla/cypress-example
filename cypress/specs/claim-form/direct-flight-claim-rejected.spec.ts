import { TestData, FlightItineraryPage, ApologyModal } from "../../support";

describe("direct flight claim is ineligible", () => {
  let testData = new TestData();

  let flightItineraryPage = new FlightItineraryPage();
  let apologyModal = new ApologyModal();

  before(() => {
    cy.visit("");
  });

  it("should provide an apology message when flight is ineligible", () => {
    flightItineraryPage.selectAirport(
      "departure",
      testData.airports.nonEuAirports[0].abbreviation
    );
    flightItineraryPage.selectAirport(
      "arrival",
      testData.airports.nonEuAirports[1].abbreviation
    );
    flightItineraryPage.clickContinue();
    apologyModal.apology.should("be.visible");
  });
});

/*///////////////////////////////////////////////////////////////////
    Test case
Should provide an apology message when flight is ineligible.

    Prerequisites
Should be on https://claim.skycop.com/.

    Step 1
In 'Departed from' select a non-EU airport such as 'LAX'.
    Step 2
In 'Final destination airport' select a non-EU airport such as 'GFF'.
    Step 3
In 'Was it a direct flight' select 'Yes'.
    Step 4
Click 'Continue'.

    Assertion
Apology message about flight ineligibility should be shown.
*/
