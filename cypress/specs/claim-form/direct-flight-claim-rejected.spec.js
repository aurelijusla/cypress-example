import ApologyModal from "../../support/page-objects/claim-form/apology.po";
import FlightItineraryPage from "../../support/page-objects/claim-form/flight-itinerary.po";

describe("direct flight claim is ineligible", () => {
  let flightItineraryPage = new FlightItineraryPage();
  let apologyModal = new ApologyModal();

  it("should provide an apology message when flight is ineligible", () => {
    flightItineraryPage.selectAirport("departure", "lax");
    flightItineraryPage.selectAirport("arrival", "gff");
    flightItineraryPage.clickContinue();
    apologyModal.apology().should("be.visible");
  });
});

/*///////////////////////////////////////////////////////////////////
    Test case
Should provide an apology message when flight is ineligible

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
Apology message about flight ineligibility should be shown
*/
