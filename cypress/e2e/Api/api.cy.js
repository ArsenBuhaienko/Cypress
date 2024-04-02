

it("API CALL",()=>{

cy.request("POST","https://conduit-api.bondaracademy.com/api/users/login",user).then(response =>{

   const token = response.body.user.token

   cy.request({

    url:"https://conduit-api.bondaracademy.com/api/articles/",

    headers: {
      'Authorization': "Token "+token,
      "Content-Type": "application/json"
    },
    body: article,
    method: "POST"

  }).then(response=>{

    expect(response.status).to.equal(201)

  })
})
})

it.only("Mocking",()=>{
const tags = {
  "tags": [
      "Ilya",
      "Studigrad",
      "Cypress tests"
  ]
}
    cy.intercept("GET","https://conduit-api.bondaracademy.com/api/tags",{"tags":[]})
    cy.visit("https://conduit.bondaracademy.com/login")
    cy.get('[placeholder="Email"]').type("test112345@gmail.com")
    cy.get('[placeholder="Password"]').type("test112345@")
    cy.get('[type="submit"]').click()

    cy.get(':nth-child(1) > .article-preview > app-article-meta > .article-meta > .info > .author').click()
    cy.get('.col-xs-12 > .btn').click()
    cy.get(':nth-child(2) > .form-control').click()
    cy.get(':nth-child(2) > .form-control').type("Same 6")
    cy.get('.ng-invalid.ng-dirty > :nth-child(1) > .btn').click()
    cy.get('h4').contains("Same 6")

})