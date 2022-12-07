import { TodoPage } from "../page-objects/todo-page"

describe('todo actions', () => {

  const todoPage = new TodoPage()
  beforeEach(() => {
    todoPage.navigate()

    todoPage.addToDo("Clean room")
    todoPage.addToDo("wash dishes")
    todoPage.addToDo("learn cypress")
  })
  it('displays one todo item by default', () => {
    todoPage.quantityTodoItemDefault()
  })
  it('should add a new todo to the list', () => {
    todoPage.validateTodoText(0, "Clean room")
    todoPage.validateToggleState(0, false)
    todoPage.validateTodoText(1, "wash dishes")
    todoPage.validateToggleState(1, false)
    todoPage.validateTodoText(2, "learn cypress")
    todoPage.validateToggleState(2, false)

  })
  it('should mark a todo as completed', () => {
    todoPage.toggleTodo(0)
    todoPage.validateTodoCompletedState(0, true)
  })
  it('should edit a todo', () => {
    todoPage.editOneTodo(0)
  })
  it.only('should count active todos', () => {
    todoPage.countActiveElement()
  })
  it('should clear completed todo', () => {
    todoPage.validateTodoCompletedState(0, true)
  })
  it('should delete a task', () => {
    todoPage.deleteOneTodo(0)
  })
})