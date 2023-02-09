//add function
export const addTodoFormHandler = (e) => {
  e.preventDefault();
  const todosArray = retrieveData();
  const newTodo = new Todo(
    addTodoForm.elements['add-task'].value,
    false,
    todosArray.length + 1,
  );
  Todo.addTodo(newTodo);
  const todoElement = desplayElement(newTodo);
  appendToDOM(todoElement);
  addTodoForm.reset();
};
describe('addTodoFormHandler', () => {
  let todosArray;
  let addTodoForm;

  beforeEach(() => {
    todosArray = [      { task: 'Task 1', completed: false, id: 1 },      { task: 'Task 2', completed: false, id: 2 },    ];
    addTodoForm = {
      elements: {
        'add-task': {
          value: 'Task 3'
        }
      },
      reset: jest.fn()
    };
    Todo.addTodo = jest.fn();
    desplayElement = jest.fn();
    appendToDOM = jest.fn();
    retrieveData = jest.fn(() => todosArray);
  });

  it('should prevent default behavior of the form', () => {
    const e = { preventDefault: jest.fn() };
    addTodoFormHandler(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('should retrieve todos from data storage', () => {
    addTodoFormHandler({ preventDefault: jest.fn() });
    expect(retrieveData).toHaveBeenCalled();
  });

  it('should add a new todo to the todosArray', () => {
    addTodoFormHandler({ preventDefault: jest.fn() });
    expect(Todo.addTodo).toHaveBeenCalledWith({
      task: 'Task 3',
      completed: false,
      id: 3
    });
  });

  it('should display the new todo element', () => {
    addTodoFormHandler({ preventDefault: jest.fn() });
    expect(desplayElement).toHaveBeenCalledWith({
      task: 'Task 3',
      completed: false,
      id: 3
    });
  });

  it('should append the new todo element to the DOM', () => {
    addTodoFormHandler({ preventDefault: jest.fn() });
    expect(appendToDOM).toHaveBeenCalledWith(desplayElement());
  });

  it('should reset the form', () => {
    addTodoFormHandler({ preventDefault: jest.fn() });
    expect(addTodoForm.reset).toHaveBeenCalled();
  });
});


//delete function
const deletEventHandler = (e) => {
  const toComplete = e.target.parentElement;
  const indexTodo = toComplete.getAttribute('id');
  Todo.removeTodo(indexTodo);
  window.location.reload();
};
describe('deleteEventHandler', () => {
  let toComplete;
  let Todo;

  beforeEach(() => {
    toComplete = {
      parentElement: {
        getAttribute: jest.fn(() => 1)
      }
    };
    Todo = {
      removeTodo
