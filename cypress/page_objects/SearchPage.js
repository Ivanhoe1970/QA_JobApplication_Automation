class SearchPage {
    get jobSearchInput() { return cy.get('[class="form-control tt-input"]').first(); }
    get locationInput() { return cy.get('[id="location-typeahead"]').eq(1); } 
    get searchButton() { return cy.get('[id="search-button"]'); } 
  
    searchJob(jobTitle, location = "") {
      this.jobSearchInput.clear().type(jobTitle);
      if (location) {
        this.locationInput.clear().type(location);
      }
      this.searchButton.click();
    }
  }
  
  export default new SearchPage();  