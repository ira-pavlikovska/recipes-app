describe('recipes page spec', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')

        cy.get('[data-testid="username-input"]').type('iryna')
        cy.get('[data-testid="password-input"]').type('asdf')
        cy.get('[data-testid="login-button"]').click()
    })

    afterEach(() => {
        // clean up
        // remove added data ...
    })

    it('add new recipe flow', () => {

        cy.url().should('include', '/recipes')
        cy.get('[data-testid="header-element"]').should('contain', "Iryna's Recipes book")
        cy.get('[data-testid="title-element"]').should('contain', "My Recipes")
        cy.get('[data-testid="list-mode-icon"]').click()
        cy.get('[data-testid="add-recipe-button"]').click()
        cy.get('[data-testid="modal-label-element"]').should('contain', "Recipe name")
        cy.get('[data-testid="input[name=recipeName]"]').type("pasta")
        cy.get('[data-testid="input[name=name]"]').type("spaghetti")
        cy.get('[data-testid="input[name=quantity]"]').type("1 pkg")
        cy.get('[data-testid="add-ingredients-button"]').click()
        cy.get('[data-testid="ingredient-name"]').should('contain', "spaghetti")
        cy.get('[data-testid="ingredient-quantity"]').should('contain', "1 pkg")
        cy.get('[data-testid="input[name=step]"]').type("boil the water")
        cy.get('[data-testid="add-instruction-button"]').click()
        cy.get('[data-testid="instruction-step"]').should('contain', "boil the water")
        cy.get('[data-testid="add-edit-button"]').click()
        cy.get('[data-testid="recipe-name"]').should('contain', "pasta")
    })

    it('search input flow', () => {

        cy.get('[data-testid="search-input"]').type("shrimp")
        cy.get('[data-testid="list-mode-icon"]').click()
        cy.get('[data-testid="list-recipes"]').then($elements => {
            expect($elements).to.have.length(2)
            cy.get('[data-testid="edit-button"]').should('have.length', 2)
            cy.get('[data-testid="delete-button"]').should('have.length', 2)
        });
        cy.get('[data-testid="list-recipes"]').and(($li)=> {
            expect($li.get(0).textContent, 'first item').to.include('Creamy Tuscan')
        })
        cy.get('[data-testid="list-recipes"]').and(($li)=> {
            expect($li.get(1).textContent, 'second item').to.include('Spaghetti with Shrimp')
        })
        cy.get('[data-testid="list-recipe"]').eq(0).find('[data-testid="edit-button"]').click()
        cy.get('[data-testid="input[name=recipeName]"]').clear().type('Creamy1')
        cy.get('[data-testid="add-edit-button"]').click()
        cy.get('[data-testid="recipe-name"]').should('contain', "Creamy1")
        cy.get('[data-testid="list-recipe"]').eq(0).find('[data-testid="edit-button"]').click()
        cy.get('[data-testid="input[name=recipeName]"]').clear().type('Creamy Tuscan Shrimp with Bacon, Tomatoes, Spinach & Zucchini Noodles')
        cy.get('[data-testid="add-edit-button"]').click()
        cy.get('[data-testid="recipe-name"]').should('contain', "Creamy Tuscan Shrimp with Bacon, Tomatoes, Spinach & Zucchini Noodles")
    })

   })
