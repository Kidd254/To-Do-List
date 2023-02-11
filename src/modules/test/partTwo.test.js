/**
 * @jest-environment jsdom
 */
import Todo from '../todo.js';
import { appendToDOM, removeFromDOM, removeAllCompletedFromDOM } from '../changeDom.js';

jest.mock('../localStorage.js');
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

// test for edit
describe('Edit task description', () => {
  test('task element to be updated is being sent', () => {
    // Arrange
    const taskArr = [{ description: 'test', completed: false, index: 1 }];
    //  Act
    const testArray = Todo.updateTodo(task);
    //  Assert
    const { description } = testArray[0];
    expect(description).toEqual(taskArr[0].description);
  });

  test('Update task different description', () => {
    //  Arrange
    const taskArr = [
      { description: 'other-description', completed: false, index: 1 },
    ];
    // Act
    const testArray = Todo.updateTodo(task);
    // Assert
    const { description } = testArray[0];
    expect(description).not.toBe(taskArr[0].description);
  });

  test('task description is updated', () => {
    // Act
    const testArray = Todo.updateTodo({ description: 'updatedDescription', completed: false, index: 1 });
    // Assert
    const { description } = testArray[0];
    expect(description).toBe('updatedDescription');
  });
});

// test for completion update using check box
describe('edit task completion using  checkbox', () => {
  it('edits a task checkbox in local storage', () => {
    // Arrange
    const completedTask = { ...task };
    completedTask.completed = true;

    // Act
    const modifiedArray = Todo.updateTodo(completedTask);
    const completedTaskArray = modifiedArray.filter(
      (e) => e.index === completedTask.index,
    );
    const { completed } = completedTaskArray[0];

    // Assert
    expect(completed).toBeTruthy();
    expect(completed).not.toBeFalsy();
  });
});

describe('clear all completed', () => {
  // Arrange
  const task1 = new Todo('test1', true, 1);
  const task2 = new Todo('test2', true, 2);
  const task3 = new Todo('test3', true, 3);
  const task4 = new Todo('test3', true, 4);
  const modifiedArray = [task1, task2, task3, task4];
  test('clear All Four(4) completed tasks in local storage', () => {
    // Act
    const newUpdatedArr = Todo.clearAllCompletedTask(modifiedArray);
    // Assert
    expect(newUpdatedArr).toHaveLength(0);
  });

  test('clear 2 completed tasks in local storage from 4 tasks', () => {
    // Arrange
    task4.completed = false;
    task3.completed = false;
    const modifiedArray = [task1, task2, task3, task4];
    // Act
    const newUpdatedArr = Todo.clearAllCompletedTask(modifiedArray);
    // Assert
    expect(newUpdatedArr).toHaveLength(2);
  });

  test('clear all completed tasks in DOM', () => {
    // Arrange
    document.body.innerHTML = `
    <div>
      <ul id="taskList">
        <li id="1" class='completed'></li>
        <li id="2" class='completed'></li>
        <li id="3"></li>
        <li id="4"></li>
      </ul>
    </div>
    `;
    // Act
    const taskList = document.querySelectorAll('#taskList li');
    removeAllCompletedFromDOM(taskList);
    // Assert
    const remainList = document.querySelectorAll('#taskList li');
    expect(remainList).toHaveLength(2);
  });
});
