import { storeData, retrieveData } from './localStorage.js';

let newTodoArray = [];

export default class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static getTodo = (index) => {
    newTodoArray = retrieveData();
    const todo = newTodoArray.find((x) => x.index.toString() === index.toString());
    return todo;
  }

  static addTodo = (todo) => {
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    const testArray = retrieveData();
    testArray.push(newTodo);
    return storeData(testArray);
  }

  static updateTodo = (todo) => {
    newTodoArray = retrieveData();
    newTodoArray = newTodoArray.filter((element) => element.index !== todo.index);
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    newTodoArray.push(newTodo);
    storeData(newTodoArray);
    return storeData(newTodoArray);
  }

  static removeTodo = (index) => {
    newTodoArray = retrieveData();
    newTodoArray = newTodoArray.filter((element) => element.index.toString() !== index.toString());
    const reIndexedArray = [];
    newTodoArray.sort((x, y) => x.index - y.index).forEach((element, index) => {
      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
    });
    return storeData(reIndexedArray);
  }

  static clearAllCompletedTask = (tasksArray) => {
    let tasks = tasksArray;
    tasks.forEach((element) => {
      if (element.completed) {
        tasks = tasks.filter((task) => task.index.toString() !== element.index.toString());
      }
    });
    const reIndexedArray = [];
    tasks.sort((x, y) => x.index - y.index).forEach((element, index) => {
      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
    });
    return storeData(reIndexedArray);
  }
}
