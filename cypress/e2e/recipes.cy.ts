describe('recipes page spec', () => {
    it('add new recipe flow', () => {
        cy.visit('http://localhost:3000/')

        cy.get('[data-testid="username-input"]').type('iryna')
        cy.get('[data-testid="password-input"]').type('asdf')
        cy.get('[data-testid="login-button"]').click()

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

   })
