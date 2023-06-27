describe('teste na tela de checkout',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.fazLogin('standard_user','secret_sauce')
    });

    it('Teste 1) Validação do campo first name obrigadtorio ',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text','Error: First Name is required')

    });

    it('Teste 2) Validação do campo last name obrigadtorio ',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Asdolfo')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text','Error: Last Name is required')

    });
    
    it('Teste 3) Validação do campo cep name obrigadtorio ',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Asdolfo')
        cy.get('[data-test="lastName"]').type('epaminondas')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text','Error: Postal Code is required')

    });

    it('Teste 4) Validação do Checkout',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Asdolfo')
        cy.get('[data-test="lastName"]').type('epaminondas')
        cy.get('[data-test="postalCode"]').type('60000-000')
        cy.get('[data-test="continue"]').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_item_price')
        .then($elementos => {
            const valores = [...$elementos].map(elemento => parseFloat(elemento.innerText.replace('$', '')));
            expect(valores).to.deep.equal([29.99]);
          });
          cy.get('.summary_info > :nth-child(2)').should('have.text','SauceCard #31337')
          cy.get('.summary_info > :nth-child(4)').should('have.text','Free Pony Express Delivery!')
          cy.get('.summary_subtotal_label').should('have.text','Item total: $29.99')
          cy.get('.summary_tax_label').should('have.text','Tax: $2.40')
          cy.get('.summary_total_label').should('have.text','Total: $32.39')
        
    });
    it('Teste 5) Finalização da compra',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Asdolfo')
        cy.get('[data-test="lastName"]').type('epaminondas')
        cy.get('[data-test="postalCode"]').type('60000-000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text','Thank you for your order!')


    });
    

});