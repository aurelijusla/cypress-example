// TODOS:
// beforeEach
// refactor
// move out test data
// Add a document (?)
// Test 2
// Test 3
// Prettier

describe('Claim Form test suite', () => {
    it('Direct flight claim, happy flow', () => {
        // 1 step. Flight itinerary
        cy.contains('#airport-departure', 'Enter the city').click();
        cy.get('.is-focused').type('vno');
        cy.get('.Select-option').first().click();
        cy.contains('#airport-arrival', 'Enter the city').click();
        cy.get('.is-focused').type('arn');
        cy.get('.Select-option').first().click();
        // 2 step. Disruption details
        cy.contains('button', 'Continue').click();
        cy.contains('Flight cancelled').click();
        cy.contains('Never arrived').click();
        cy.contains('Less than 14 days').click();
        cy.contains('button', 'Continue').click();
        // 3 step. Disruption reason
        cy.contains('Yes').click();
        cy.contains('Other reasons').click();
        cy.get('textarea').type('This is an automated test.');
        cy.contains('button', 'Continue').click();
        // 4 step. Flight details
        cy.contains('Enter airlines name').type('sk');
        cy.get('.Select-option').first().click();
        cy.get('#flight-1-date').click();
        cy.get('.rdtToday').click();
        cy.get('#flight-1-number').type('1234');
        cy.contains('button', 'Continue').click();
        // 5 step. Documents
        cy.get('#reservation-number').type('123456');
        cy.contains('button', 'Continue').click();
        // 6 step. Passenger information
        cy.get('#user-name').type('John');
        cy.get('#user-surname').type('Doe');
        cy.get('#user-birthdate').click();
        cy.contains('1990').click();
        cy.contains('Jan').click();
        cy.contains('1').click();
        cy.get('#user-email').type('john.doe@test.com');
        cy.get('#user-email-repeat').type('john.doe@test.com');
        cy.get('#address').type('Fake st. 99');
        cy.get('#city').type('Fakeville');
        cy.contains('Enter your country').type('lit');
        cy.get('.Select-option').first().click();
        cy.get('#userphone').type('12345');
        cy.get('[name="terms-conditions"]').click();
        cy.contains('Submit claim').should('be.enabled');
        // Decided to end here, not to submit to prod db
        // 7 step. Signature
        // 8 step. Finish!
    })
})

    // describe('Full claim direct flight, happy flow', () => {
    //     Placeholder
    // })

    // describe('Full claim, flight not eligible for compensation', () => {
    //     Placeholder
    //       })
    // })