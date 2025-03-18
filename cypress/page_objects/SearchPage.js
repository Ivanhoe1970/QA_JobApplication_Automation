class SearchPage {
    get jobSearchInput() { 
        return cy.get('[placeholder="Search for jobs by title or keyword"]').eq(1); 
    } // Second input field

    get searchButton() { 
        return cy.get('#search-button'); 
    } // Search button

    get jobLink() { 
        return cy.get('.job-link').first(); 
    } // First job link

    get applyNowButton() { 
        return cy.get('#apply-button'); 
    } // Apply Now button

    searchJob(jobTitle) {
        cy.log("Waiting for job search input to be visible...");
        this.jobSearchInput.should("be.visible"); // Ensure it’s visible before typing

        cy.log(`Typing '${jobTitle}' in job search field...`);
        this.jobSearchInput.clear().type(jobTitle, { force: true });

        cy.log("Clicking the Search button...");
        this.searchButton.click();
    }

    clickFirstJobLink() {
        cy.log("Waiting for job link to be visible...");
        this.jobLink.should("be.visible"); // Ensure the job link is visible

        cy.log("Clicking the first job link...");
        this.jobLink.click({ force: true });
    }

    clickApplyNow() {
        cy.log("Waiting for Apply Now button to be visible...");
        this.applyNowButton.should("be.visible"); // Ensure button is visible

        cy.log("Clicking Apply Now...");
        this.applyNowButton.click();
    }
}

export default new SearchPage();
