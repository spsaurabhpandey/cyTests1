describe('API Testing', ()=>{
    it('GET-read',()=>{
        cy.request('GET', 'https://dummy.restapiexample.com/api/v1/employees').then((response)=>{
            expect(response).to.have.property('status', 200);

        })
        

    })
})