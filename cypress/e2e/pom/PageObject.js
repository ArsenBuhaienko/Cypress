 export class PageObject {
    static navigateToFormsPage() {
        cy.visit('https://demoqa.com')
        cy.xpath('(//div[@class="avatar mx-auto white"])[2]').click();
        cy.xpath('(//div[@class="header-text"])[1]').click();
        cy.xpath('((//span[@class="text"])[1]').click();
        cy.xpath('//input[@id="userName"]').type("Chesha");
        cy.xpath('//input[@id="userEmail"]').type("smt@gmail.com");
        cy.xpath('//input[@id="currentAddress"]').type("SMT 14 str");
        cy.xpath('//input[@id="permanentAddress"]').type("SMT 2214 str");
    }
}
