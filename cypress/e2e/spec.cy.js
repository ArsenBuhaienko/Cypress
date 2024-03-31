import 'cypress-xpath';
import {PageObject} from "../e2e/pom/PageObject.js"

describe('DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com')
  });
  it('Ope main page', () => {
    cy.visit('https://demoqa.com')
  })
  it('Open elements page', () => {
    cy.xpath('(//div[@class="avatar mx-auto white"])[1]').click();
  })
  it('Open forms page', () => {
    cy.xpath('(//div[@class="avatar mx-auto white"])[2]').click();
  })
  it('Open alert page', () => {
    cy.xpath('(//div[@class="avatar mx-auto white"])[3]').click();
  })
  it('Open widget page', () => {
    cy.xpath('(//div[@class="avatar mx-auto white"])[4]').click();
  })
  it('Open interactions page', () => {
    cy.xpath('(//div[@class="avatar mx-auto white"])[5]').click();
  })


   it('Using POM', () => {
    PageObject.navigateToFormsPage()
  })

  
})