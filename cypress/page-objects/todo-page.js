export class TodoPage {
    navigate() {
        cy.visit('http://todomvc.com/examples/vanillajs/')  
    }

    addToDo(todoText) {
        cy.get('.new-todo').type(todoText+"{enter}")
    }
    quantityTodoItemDefault() {
        cy.get('.todo-list li').should('have.length', 3)
    }
    validateTodoText(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should('have.text', expectedText)
    }
    validateToggleState(todoIndex, shouldBeToggled) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`)
        label.should(`${shouldBeToggled ? '':'not.'}be.checked`)
    }
    toggleTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) .toggle`).click()
    }
    validateTodoCompletedState(todoIndex, shouldBeCompleted) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`)
        label.should(`${shouldBeCompleted ? '':'not.'}have.css`,'text-decoration-line', 'line-through')
    }
    editOneTodo(todoIndex) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).dblclick().get('.edit')
        label.clear()
        label.type("do homework{enter}")
    }
    deleteOneTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) .destroy`).click()

    }
    countActiveElement() {
        let count = 0
        cy.get('.todo-list li')
        .each(($li) => {
            cy.get($li[0]).should("not.have.class","completed").then(() => {
                count+=1
            })
        }).then(() => {
            cy.get('.todo-count strong').contains(count)
        })
       
    }
    filtering(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex +1})`).click()
    }
    typeOfFiltering(name, length) {
        const label = cy.contains(name).click()
        label.get('.todo-list li').should('have.length',length)
    }

}
