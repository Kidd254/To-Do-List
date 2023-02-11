export const appendToDOM = (todoElement) => {
  const todoList = document.getElementById('taskList');
  todoList.appendChild(todoElement);
};

export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};
export const removeAllCompletedFromDOM = (taskElements) => {
  taskElements.forEach((element) => {
    if (element.classList.contains('completed')) {
      removeFromDOM(element);
    }
  });
};
