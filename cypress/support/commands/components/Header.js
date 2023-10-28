import SearchResultPage from "../pages/SearchResultPage";
import Loading from "./Loading";

class Header extends Loading {
  searchInput() {
    return cy.xpath("//span[contains(text(),'Search')]/../input");
  }

  searchBtn() {
    return cy.xpath("//p[contains(text(),'Search')]/..");
  }

  search(keyword) {
    this.searchInput().should("be.visible").clear().type(keyword);
    cy.wait(2000);
    this.searchBtn().should("be.visible").click();
    return new SearchResultPage();
  }
}
export default Header;
