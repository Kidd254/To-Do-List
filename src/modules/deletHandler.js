import Todo from './todo.js';

const deletEventHandler = (e) => {
  const todo = e.target.parentElement;
  const indexTodo = todo.getAttribute('id');
  Todo.removeTodo(indexTodo);
  window.location.reload();
};

export default deletEventHandler;