import Todo from './todo.js';

const checkboxStatus = (e) => {
  const displayElement = e.target.parentElement.parentElement;
  const activityIndex = displayElement.getAttribute('id');
  const activity = Todo.getTodo(activityIndex);
  activity.completed = !activity.completed;
  if (activity.completed) {
    displayElement.classList.add('completed');
  } else {
    displayElement.classList.remove('completed');
  }
  Todo.updateTodo(activity);
};

export default checkboxStatus;
