import Loading from "../components/Loading";
import ProductPage from "./ProductPage";

class SearchResultPage extends Loading {
  getProductsNameLabel() {
    return cy.get('[data-e2e="product-card"] h3');
  }

  getProductTitleByNumber(number) {
    return cy.get('[data-e2e="product-card"] h3').eq(number - 1);
  }

  getProductName(number) {
    const index = Math.floor(Math.random() * 888);
    this.getProductTitleByNumber(number)
      .invoke("text")
      .then(text => {
        cy.wrap(text).as("productName" + index);
      });

    return cy.get(`@productName${index}`);
  }

  clickOnProductsTitle(title) {
    cy.contains("h3", title).click();
    return new ProductPage();
  }

  clickOnPangination() {
    cy.get(".p-paginator-current").scrollIntoView().click();

    return this;
  }
}

export default SearchResultPage;
