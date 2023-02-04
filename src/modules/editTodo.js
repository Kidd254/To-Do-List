import Todo from './todo.js';
import Delete from '../../images/delet-Icon.svg';
import createCheckbox from './addCheckbox.js';
import deleteEventHandler from './delete.js';

const createTaskDescripion = (description) => {
  const activityDescription = document.createElement('input');
  activityDescription.setAttribute('type', 'text');
  activityDescription.setAttribute('name', 'edit-todo');
  activityDescription.setAttribute('class', 'edit-todo-input');
  activityDescription.setAttribute('value', description);
  return activityDescription;
};

const createDeleteElement = () => {
  const deleteElement = new Image();
  deleteElement.src = Delete;
  deleteElement.setAttribute('class', 'icon');
  deleteElement.addEventListener('click', deleteEventHandler);
  return deleteElement;
};

const createEditElement = (indexTodo) => {
  const todo = Todo.getTodo(indexTodo);
  const formElement = document.createElement('form');
  formElement.setAttribute('class', 'edit-todo-form');
  formElement.setAttribute('id', indexTodo);
  formElement.setAttribute('action', '#');
  formElement.setAttribute('method', 'patch');
  formElement.setAttribute('type', 'submit');
  const label = document.createElement('label');
  label.setAttribute('for', 'edit-todo');
  label.setAttribute('id', 'edit-todo-label');
  const checkbox = createCheckbox(todo.completed);
  if (todo.completed) {
    formElement.classList.add('completed');
  } else {
    formElement.classList.remove('completed');
  }
  label.appendChild(checkbox);
  const description = createTaskDescripion(todo.description);
  label.appendChild(description);
  const deleteElement = createDeleteElement();
  formElement.appendChild(label);
  formElement.appendChild(deleteElement);
  return formElement;
};

export default createEditElement;
