/**
 * @jest-environment jsdom
 */
import Todo from './todo.js';
import { appendToDOM, removeFromDOM } from './changeDom.js';

jest.mock('./localStorage.js');
const task = new Todo('test', false, 1);
const newElement = document.createElement('li');
document.body.innerHTML = '<div><ul id="taskList"></ul></div>';
// test for add
describe('add task', () => {
  test('adds a task to storage', () => {
    expect(Todo.addTodo(task)).toStrictEqual([task]);
  });
  appendToDOM(newElement);
  test('append a task to DOM', () => {
    const taskList = document.querySelectorAll('#taskList li');
    expect(taskList).toHaveLength(1);
  });
});
// test for delet
describe('delet task', () => {
  test('delets a task', () => {
    expect(Todo.removeTodo(task.index)).toStrictEqual([]);
  });
  test('deletss a task element in the dom', () => {
    removeFromDOM(newElement);
    const taskList = document.querySelectorAll('#taskList li');
    expect(taskList).toHaveLength(0);
  });
});
