import Edit from '../../images/edit-Icon.svg';
import updateTodoHandler from './updateTodoHandler.js';
import createEditElement from './editTodo.js';
import createCheckbox from './addCheckbox.js';

const editClickHandler = (e) => {
  const displayElement = e.target.parentElement;
  const indexTodo = displayElement.getAttribute('id');
  const editElement = createEditElement(indexTodo);
  editElement.addEventListener('submit', updateTodoHandler);
  const taskList = displayElement.parentElement;
  taskList.replaceChild(editElement, displayElement);
};

const createEditIcon = () => {
  const editIcon = new Image();
  editIcon.src = Edit;
  editIcon.setAttribute('class', 'icon');
  editIcon.addEventListener('click', editClickHandler);
  return editIcon;
};

const createDisplayElement = (todo) => {
  const displayElement = document.createElement('li');
  displayElement.setAttribute('id', todo.index);
  const labelElement = document.createElement('label');
  const checkboxElement = createCheckbox(todo.completed);
  if (todo.completed) {
    displayElement.classList.add('completed');
  } else {
    displayElement.classList.remove('completed');
  }
  labelElement.appendChild(checkboxElement);
  const descriptionElement = document.createElement('span');
  descriptionElement.innerText = todo.description;
  labelElement.appendChild(descriptionElement);
  displayElement.appendChild(labelElement);
  const menuElement = createEditIcon();
  displayElement.appendChild(menuElement);
  return displayElement;
};

export default createDisplayElement;
