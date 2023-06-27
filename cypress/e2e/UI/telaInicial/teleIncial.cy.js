const teleInicial = require ('../../../support/elementos/loginelementos').ELEMENTS

describe('',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.fazLogin('standard_user','secret_sauce');
        
    });
    it('Teste 1) Tela inicial validação dos botões de adicionar e remover do carrinho',()=>{
        cy.get(teleInicial.adicionaMochilaNoCarrinho).click()
        cy.get(teleInicial.removerMochila).should('contain','Remove')
        cy.get(teleInicial.adicioneBikeNoCarrinho).click()
        cy.get(teleInicial.removerBike).should('contain','Remove')
    });    
    
    it('Teste 2) Tela inicial validação dos botões de adicionar e remover do carrinho',()=>{
        cy.get(teleInicial.adicionaMochilaNoCarrinho).click()
        cy.get(teleInicial.removerMochila).should('contain','Remove')
        cy.get(teleInicial.removerMochila).click()
        cy.get(teleInicial.adicionaMochilaNoCarrinho).should('contain','Add to cart')

        cy.get(teleInicial.adicioneBikeNoCarrinho).click()
        cy.get(teleInicial.removerBike).should('contain','Remove')
        cy.get(teleInicial.removerBike).click()
        cy.get(teleInicial.adicioneBikeNoCarrinho).should('contain','Add to cart')
    });
    
    it('Teste 3) Validação de 1 intem adicionado no carrinho ainda em tela inicial ', ()=> {
        cy.get(teleInicial.adicionaMochilaNoCarrinho).click()
        cy.get(teleInicial.bolinhaVermelha).should('have.text','1')

    });
    it('Teste 4) Validação de 2 intens adicionados no carrinho ainda em tela inicial ', ()=> {
        cy.get(teleInicial.adicionaMochilaNoCarrinho).click()
        cy.get(teleInicial.adicioneBikeNoCarrinho).click()
        cy.get(teleInicial.bolinhaVermelha).should('have.text','2')

    });
    it('Teste 5) Validação de 3 intens adicionados no carrinho ainda em tela inicial ', ()=> {
        cy.get(teleInicial.adicionaMochilaNoCarrinho).click()
        cy.get(teleInicial.adicioneBikeNoCarrinho).click()
        cy.get(teleInicial.adicionaBlusaNoCarrinho).click()
        cy.get(teleInicial.bolinhaVermelha).should('have.text','3')

    });
    it('Teste 6) Validação de 3 intens adicionados e 2 removidos no carrinho ainda em tela inicial ', ()=> {
        cy.get(teleInicial.adicionaMochilaNoCarrinho).click()
        cy.get(teleInicial.adicioneBikeNoCarrinho).click()
        cy.get(teleInicial.adicionaBlusaNoCarrinho).click()
        cy.get(teleInicial.removerBike).click()
        cy.get(teleInicial.removerBlusa).click()
        cy.get(teleInicial.bolinhaVermelha).should('have.text','1')

    });
    it('Teste 7) Validação de 1 intem adicionados e mesmo removidos no carrinho ainda em tela inicial ', ()=> {
        cy.get(teleInicial.adicionaMochilaNoCarrinho).click()
        cy.get(teleInicial.removerMochila).click()
        cy.get(teleInicial.bolinhaVermelha).should('not.exist')

    });
    it('Teste 8) Validação do uso do campo select filtro',()=>{
        cy.get(teleInicial.filtro).select('Price (high to low)')

        cy.get(teleInicial.inventario) // Seletor CSS para selecionar os elementos que contêm os valores dos produtos
        .then($elementos => {
          const valores = [...$elementos].map(elemento => parseFloat(elemento.innerText.replace('$', '')));
      
          // Verificar se a lista de valores está ordenada em ordem crescente
          const valoresOrdenados = [...valores].sort((a, b) => b - a);
          expect(valores).to.deep.equal(valoresOrdenados);
        });

    });

    



});