import Todo from './todo.js';

const checkboxStatus = (e) => {
  const displayElement = e.target.parentElement.parentElement;
  const taskIndex = displayElement.getAttribute('id');
  const task = Todo.getTodo(taskIndex);
  task.completed = !task.completed;
  if (task.completed) {
    displayElement.classList.add('completed');
  } else {
    displayElement.classList.remove('completed');
  }
  Todo.updateTodo(task);
};

export default checkboxStatus;