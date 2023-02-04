import { storeData, retrieveData } from './localStorage.js';

let newListArray = [];

export default class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static getTodo = (index) => {
    newListArray = retrieveData();
    const todo = newListArray.find((x) => x.index.toString() === index.toString());
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
    newListArray = retrieveData();
    newListArray = newListArray.filter((element) => element.index !== todo.index);
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    newListArray.push(newTodo);
    storeData(newListArray);
  }

  static removeTodo = (index) => {
    newListArray = retrieveData();
    newListArray = newListArray.filter((element) => element.index.toString() !== index.toString());
    const reIndexedArray = [];
    newListArray.sort((x, y) => x.index - y.index).forEach((element, index) => {
      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
    });
    return storeData(reIndexedArray);
  }
}
