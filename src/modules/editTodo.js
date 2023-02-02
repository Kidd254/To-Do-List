import Todo from './todo.js';
import Delete from '../../images/delet-Icon.svg';
import createCheckbox from './newCheckbox.js';
import deleteEventHandler from './deletHandler.js';

const createTaskDescripion = (description) => {
  const taskDescription = document.createElement('input');
  taskDescription.setAttribute('type', 'text');
  taskDescription.setAttribute('name', 'edit-todo');
  taskDescription.setAttribute('class', 'edit-todo-input');
  taskDescription.setAttribute('value', description);
  return taskDescription;
};

const createDeletElement = () => {
  const deletElement = new Image();
  deletElement.src = Delete;
  deletElement.setAttribute('class', 'icon');
  deletElement.addEventListener('click', deleteEventHandler);
  return deletElement;
};

const createEditElement = (indexTodo) => {
  const todo = Todo.getTodo(indexTodo);
  const editElement = document.createElement('form');
  editElement.setAttribute('class', 'edit-todo-form');
  editElement.setAttribute('id', indexTodo);
  editElement.setAttribute('action', '#');
  editElement.setAttribute('method', 'patch');
  editElement.setAttribute('type', 'submit');
  const label = document.createElement('label');
  label.setAttribute('for', 'edit-todo');
  label.setAttribute('id', 'edit-todo-label');
  const checkbox = createCheckbox(todo.completed);
  if (todo.completed) {
    editElement.classList.add('completed');
  } else {
    editElement.classList.remove('completed');
  }
  label.appendChild(checkbox);
  const description = createTaskDescripion(todo.description);
  label.appendChild(description);
  const deleteElement = createDeletElement();
  editElement.appendChild(label);
  editElement.appendChild(deleteElement);
  return editElement;
};

export default createEditElement;