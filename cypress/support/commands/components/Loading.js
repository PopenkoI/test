class Loading {
  getPreloader() {
    return cy.get("animateTransform");
  }

  verifyPreloaderAppearsAndDisappears() {
    this.verifyPreloaderIsVisible().verifyPreloaderDoesNotExist();

    return this;
  }

  verifyPreloaderDoesNotExist() {
    this.getPreloader().should("not.exist");

    return this;
  }

  verifyPreloaderIsVisible() {
    this.getPreloader().should("be.visible");

    return this;
  }
}
export default Loading;
