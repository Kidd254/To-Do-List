export const appendToDOM = (todoElement) => {
  const todoList = document.getElementById('taskList');
  todoList.appendChild(todoElement);
};

export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};
