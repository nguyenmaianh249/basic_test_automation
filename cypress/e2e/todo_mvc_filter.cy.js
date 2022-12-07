import { TodoPage } from "../page-objects/todo-page"
const todoPage = new TodoPage()
describe('filtering', () => {
    beforeEach(() => {
    
    
    todoPage.navigate()

    todoPage.addToDo("Clean room")
    todoPage.addToDo("Learn JS")
    todoPage.addToDo("Use cypress")

    todoPage.filtering(0)
    })
    it('should filter "Active" todos', () => {
      todoPage.typeOfFiltering("Active",2)
    })
    it('should filter "Completed" todos', () => {
      todoPage.typeOfFiltering("Completed",1)
    })
    it('should filter "All" todos', () => {
      todoPage.typeOfFiltering("All",3)
    })
})