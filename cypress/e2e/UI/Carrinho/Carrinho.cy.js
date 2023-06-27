describe('Teste referente aos carrinho de compras',()=> {
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.fazLogin('standard_user','secret_sauce')
    });
    it('Teste 1) Validação de 1 iten adicionado',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('have.text','Sauce Labs Backpack')
        cy.contains('Sauce Labs Backpack').should('be.visible')

    });

    it('Teste 2) Validação de 1 iten adicionado e remoção',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.inventory_item_name').should('not.exist')
        cy.contains('Sauce Labs Backpack').should('not.exist')

    });

    it('Teste 3) Validação de 2 itens removido do carrinho',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')

    });
    it('Teste 4) Validação da remoção de 2 itens do carrinho',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.contains('Sauce Labs Backpack').should('not.exist')
        cy.contains('Sauce Labs Bolt T-Shirt').should('not.exist')

    });


});    