class ProductPage {
  verifyProductTitle(title) {
    cy.contains(title).should("be.visible");
    return this;
  }
}

export default ProductPage;
