import Header from "../support/commands/components/Header";
import State from "../support/commands/pages/State";
import SearchResultPage from "../support/commands/pages/SearchResultPage";
import data from "./data";

const state = new State();
const header = new Header();
const searchResultPage = new SearchResultPage();

describe(" TC ", () => {
  beforeEach(() => {
    state.site();
  });

  it("Verify Product Search and Openability", () => {
    header.search(data.productTitle);

    searchResultPage
      .clickOnProductsTitle(data.productTitle)
      .verifyProductTitle(data.productTitle);
  });

  it("Verify Search Results for 'STAR WARS' in the Search Text Field", () => {
    let keyword = "STAR WARS";
    header.search(keyword);
    const firstTitle = searchResultPage.getProductName(1);
    const lastTitle = searchResultPage.getProductName(24);
    firstTitle.then(name => {
      expect(name.trim()).to.contains(keyword);
    });
    lastTitle.then(name => {
      expect(name.trim()).to.contains(keyword);
    });
  });

  it("All products on the first page are different from the products on the second page", () => {
    let listOfTitlesOnFirstPage = [];
    for (let i = 0; i < 24; i++) {
      listOfTitlesOnFirstPage.push(searchResultPage.getProductName(i));
    }
    cy.get('[data-e2e="product-card"] h3')
      .eq(24 - 1)
      .scrollIntoView();
    cy.wait(2000);
    let listOfTitlesOnSecondPage = [];
    for (let i = 24; i < 48; i++) {
      listOfTitlesOnSecondPage.push(searchResultPage.getProductName(i));
    }
    listOfTitlesOnFirstPage.forEach(element => {
      expect(listOfTitlesOnSecondPage).not.to.contains(element);
    });
  });
});
