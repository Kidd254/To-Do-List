import Todo from './todo.js';

const deletEventHandler = (e) => {
  const toComplete = e.target.parentElement;
  const indexTodo = toComplete.getAttribute('id');
  Todo.removeTodo(indexTodo);
  window.location.reload();
};

export default deletEventHandler;
