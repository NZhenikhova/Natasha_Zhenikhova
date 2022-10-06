/*----Api GET---*/
/*Знакомство с тестовым ресурсом методы и раздел Details*/


describe('Api', ()=>{
    it ('get', ()=> {
        cy.request('GET', 'https://dummy.restapiexample.com/api/v1/employees')
        .its('status').should('equal', 200);
    });

    it ('get', ()=> {
    cy.request('GET', 'https://dummy.restapiexample.com/api/v1/employees')
    .its('body')
    .its('data')
    .should('not.be.empty')
    //need to use the full to compare
    .should('deep.include', {
         id:1,
         employee_name:"Trigger Nixon",
         employee_salary:320800,
         employee_age:61,
         profile_image:""
    });

});


});




/*Api POST*/
/*https://dummy.restapiexample.com/api/v1/create'*/


describe('Api',  () => {
    it.only('create personal employee', () => {
        const bodyRequest = {"name":"test", salary:"123", age:"23"};
        const baseURl = 'https://dummy.restapiexample.com/api/v1'
        cy.request('POST', `${baseURl}/create`, bodyRequest)
        .its('body')
        .its('message').should('equal', 'Successfully!Record has been added.');
    })
});


/*test PET store*/


describe('Api',  () => {
    it.only('available pet', () => {
        const bodyRequest = {
            id: 3,
        category: {
          id: 2,
          name: 'cat'
        },
        name: Pixel,
        photoUrls: [
          'https://'
        ],
        tags: [
          {
            "id": 555,
            "name": "love"
          }
        ],
        status: available
      }
        const baseURl = 'hhttps://petstore.swagger.io/v2/pet'
        cy.request('POST', `${baseURl}/create`, bodyRequest)
        .its('status').should('equal', 200);
    })
});




describe('Api', ()=>{
    it ('get', ()=> {
        cy.request('GET', 'hhttps://petstore.swagger.io/v2/pet/findByStatus?status=available')
        .its('status').should('equal', 200);
    });

    it ('get', ()=> {
    cy.request('GET', 'hhttps://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .its('body')
    .its('data')
    .should('not.be.empty')
    //need to use the full to compare
    .should('deep.include', {
        [
            {
              "id": 2,
              "category": {
                "id": 15,
                "name": "cat"
              },
              "name": "Pixel",
              "photoUrls": [
                "string"
              ],
              "tags": [
                {
                  "id": 5,
                  "name": "love"
                }
              ],
              "status": "available"
            })
        });
            });




// Practical task:
// https://petstore.swagger.io/#/
// Напишите тесты раздел Pet:
// POST /pet  Add a new pet to the store
// GET /pet/findByStatus Finds Pets by status
// POST /pet/{petId} Updates a pet in the store with form data
// В каждом запросе проверить на выбор данные из body

describe('Practical task - 1', () => {
    it('POST /pet  Add a new pet to the store', () => {

  cy.request({
    method: 'POST', 
    url: 'https://petstore.swagger.io/v2/pet', 
    body: {
    "id": 23,
    "category": {
      "id": 0,
      "name": "cats"
 },
    name: "Marfa Vasylivna",
    photoUrls: [
      "https://www.instagram.com/p/CRCyXa8MIUl/"
    ],
    tags: [
      {
        id: 0,
        name: "#marfavasilievna"
      }
    ],
    "status": "sold"
  } }) .then((response) => {
            cy.log('RESPONSE 1 ', response);
            cy.log('RESPONSE 2 ', JSON.stringify(response));

            const { name } = response.body;
            expect(name).equal("Marfa Vasylivna");
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('category');
          });
    }) 

    it('GET /pet/findByStatus Finds Pets by status', () => {
        const status = 'sold';
        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`, 
          }).then((response) => {
            const { name } = response.body[0].category;
            cy.log(JSON.stringify(response.body[0].category)); //преобразовываем в текст
            expect(response.status).to.eq(200);
            expect(name).equal('cat');
          });
      }) 

      it.only('POST /pet/{petId} Updates a pet in the store with form data', () => {
        cy.request({
          method: 'POST', 
          url: 'https://petstore.swagger.io/v2/pet', 
          body: {
          "id": 23,
          "category": {
            "id": 0,
            "name": "cats"
       },
          name: "Marfa Vasylivna",
          photoUrls: [
            "https://www.instagram.com/p/CRCyXa8MIUl/"
          ],
          tags: [
            {
              id: 0,
              name: "#marfavasilievna"
            }
          ],
          "status": "sold"
        } })


        const petId = '23';
        cy.request({
            method: 'POST',
            url: `https://petstore.swagger.io/v2/pet/${petId}`, 
            form: true,
            body: {
                name: 'Vasylka',
                status: 'pending'
            }
          }).then((response) => {
            const { name } = response.body; 
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
          });

        cy.request('get', 'https://petstore.swagger.io/v2/pet/23').then((response) => {
            const {name, photoUrls, category} = response.body; 
            expect(name).equal("Vasylka");
            cy.log(photoUrls[0]);
            cy.log(category);
            expect(photoUrls[0]).to.equal('https://www.instagram.com/p/CRCyXa8MIUl/');
        })
      }) 
    });





11:00
describe('Api',()=>{
it.only('123123', () => {
    cy.request('GET','https://swapi.dev/api/people/1/').then((response)=>{
    expect(response).to.have.property('status', 200);
    expect(response.body).to.have.property('birth_year', "19BBY");
    expect(response.body.films).to.have.property('0','https://swapi.dev/api/films/1/');
    expect(response).to.have.be.not.null;

    })
  })
});










