import Todo from './todo.js';
import { appendToDOM } from './changeDom.js';
import { retrieveData } from './localStorage.js';
import desplayElement from './displayList.js';

export const addTodoForm = document.getElementById('todo-form');

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
