const el = require ('../../../support/elementos/loginelementos').ELEMENTS

describe('testes realizandos na tela de login',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    });
    
    it('teste 1) Login com dados validos teste com sucesso',()=>{
        
        cy.fazLogin('standard_user','secret_sauce');
         cy.get('.app_logo').should('have.text','Swag Labs')
    });
    
    it('teste 2) Usuario bloqueado',()=>{
        
        cy.fazLogin('locked_out_user','secret_sauce');
        cy.get(el.mensagemDeErro).should('contain.text','Epic sadface: Sorry, this user has been locked out')

    });

    it('teste 3) Login com o campo email vazio',()=>{
        
        cy.fazLogin('{insert}','secret_sauce');
        cy.get(el.mensagemDeErro).should('contain.text','Epic sadface: Username is required')

    })

    it('teste 4) Login com o campo senha vazio',()=>{
        
        cy.fazLogin('standard_user','{insert}');
        cy.get(el.mensagemDeErro).should('contain.text','Epic sadface: Password is required')

    })

    it('teste 5) Login com o campo email sem o um caractere',()=>{
        
        cy.fazLogin('standarduser','secret_sauce');
        cy.get(el.mensagemDeErro).should('contain.text','Epic sadface: Username and password do not match any user in this service')

    })

    it('teste 6) Login com o campo senha sem o um caractere',()=>{
        
        cy.fazLogin('standard_user','secretsauce');
        cy.get(el.mensagemDeErro).should('contain.text','Epic sadface: Username and password do not match any user in this service')

    })

    it('teste 7) Validação da imagem do item vendido Mochila',()=>{
        
        cy.fazLogin('standard_user','secret_sauce');
        
        const mochila = '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg'
        cy.get(el.imgMochila).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(mochila)
        })
       
    });

    it('teste 8) Validação da imagem do item vendido Bike ',()=>{
        
        cy.fazLogin('standard_user','secret_sauce');
        
        const Bike = '/static/media/bike-light-1200x1500.37c843b0.jpg'
        cy.get(el.imgBike).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(Bike)
        })
       
    });

    it('teste 9) Validação da imagem do item vendido Jacket ',()=>{
        
        cy.fazLogin('standard_user','secret_sauce');
        
        const jacket = '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg'
        cy.get(el.imgJacket).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(jacket)
        })
       
    });

    it('teste 10) Validação da imagem do item vendido T-Shirt',()=>{
        
        cy.fazLogin('standard_user','secret_sauce');
        
        const TShirt = '/static/media/red-tatt-1200x1500.30dadef4.jpg'
        cy.get(el.imgBlusa).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(TShirt)
        })
       
    });
})