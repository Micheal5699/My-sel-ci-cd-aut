import {homeBar} from "../fixtures/selectors.js";
 
describe("Given I am on Table page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
    it("HOME BAR - User should be able to navigate to home ", function () {
        //cy.get(homeBar.popupadd).click();
        cy.get (homeBar.demoHomeBtn).click()
    })
})