"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _rotate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotate.svg */ "./src/rotate.svg");
/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.png */ "./src/enter.png");
/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo.js */ "./src/modules/todo.js");
/* harmony import */ var _modules_changeDom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changeDom.js */ "./src/modules/changeDom.js");
/* harmony import */ var _modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displayTodo.js */ "./src/modules/displayTodo.js");
/* harmony import */ var _modules_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearAllCompleted.js */ "./src/modules/clearAllCompleted.js");
/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/addNewTodo.js */ "./src/modules/addNewTodo.js");
/* harmony import */ var _modules_updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/updateTodoHandler.js */ "./src/modules/updateTodoHandler.js");











const loadElements = () => {
  let taskArray = [];
  taskArray = (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.retrieveData)();
  taskArray
    .sort((x, y) => x.index - y.index)
    .forEach((todo) => {
      const taskElement = (0,_modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_5__["default"])(todo);
      (0,_modules_changeDom_js__WEBPACK_IMPORTED_MODULE_4__.appendToDOM)(taskElement);
    });
};

const loadRefreshIcon = () => {
  const refreshIcon = document.getElementById('list_refresh');
  refreshIcon.src = _rotate_svg__WEBPACK_IMPORTED_MODULE_1__;
  refreshIcon.alt = 'refresh';
  refreshIcon.setAttribute('class', 'header-icon');
  refreshIcon.addEventListener('click', () => {
    window.location.reload();
  });
};

const loadEnterIcon = () => {
  const enterIcon = document.getElementById('enter_newtodo');
  enterIcon.src = _enter_png__WEBPACK_IMPORTED_MODULE_2__;
  enterIcon.alt = 'enter';
  enterIcon.setAttribute('class', 'icon');
  // add eventlistner for enter key
  enterIcon.addEventListener('click', () => {
    // if todo is written or add to your list field is not empity
    if (_modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.elements["add-task"].value) {
      const todosArray = (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.retrieveData)();
      const newTodo = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.elements["add-task"].value,
        false,
        todosArray.length + 1,
      );
      _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodo(newTodo);
      const todoElement = (0,_modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_5__["default"])(newTodo);
      (0,_modules_changeDom_js__WEBPACK_IMPORTED_MODULE_4__.appendToDOM)(todoElement);
      _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.reset();
    } else if (document.getElementsByClassName('edit-todo-input')[0]) { // if add todo is empity and if someone is yousing phone and want to edit a task
      (0,_modules_updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    }
  });
};

const loadAfterAllCleared = () => {
  const paragraph = document.getElementsByTagName('p')[0];
  const clearAllCompletedLink = document.createElement('a');
  clearAllCompletedLink.setAttribute('id', 'clear-all-completed');
  clearAllCompletedLink.setAttribute('href', '/');
  clearAllCompletedLink.innerText = 'Clear all completed';
  clearAllCompletedLink.addEventListener('click', _modules_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  paragraph.appendChild(clearAllCompletedLink);
};
window.onload = () => {
  loadElements();
  loadRefreshIcon();
  loadEnterIcon();
  loadAfterAllCleared();
  _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.addEventListener('submit', _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoFormHandler);
};


/***/ }),

/***/ "./src/modules/addNewTodo.js":
/*!***********************************!*\
  !*** ./src/modules/addNewTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoForm": () => (/* binding */ addTodoForm),
/* harmony export */   "addTodoFormHandler": () => (/* binding */ addTodoFormHandler)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _changeDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeDom.js */ "./src/modules/changeDom.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _displayTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodo.js */ "./src/modules/displayTodo.js");





const addTodoForm = document.getElementById('todo-form');

const addTodoFormHandler = (e) => {
  e.preventDefault();
  const todosArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.retrieveData)();
  const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    addTodoForm.elements['add-task'].value,
    false,
    todosArray.length + 1,
  );
  _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(newTodo);
  const todoElement = (0,_displayTodo_js__WEBPACK_IMPORTED_MODULE_3__["default"])(newTodo);
  (0,_changeDom_js__WEBPACK_IMPORTED_MODULE_1__.appendToDOM)(todoElement);
  addTodoForm.reset();
};


/***/ }),

/***/ "./src/modules/changeDom.js":
/*!**********************************!*\
  !*** ./src/modules/changeDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToDOM": () => (/* binding */ appendToDOM),
/* harmony export */   "removeFromDOM": () => (/* binding */ removeFromDOM)
/* harmony export */ });
const appendToDOM = (todoElement) => {
  const todoList = document.getElementById('taskList');
  todoList.appendChild(todoElement);
};

const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};


/***/ }),

/***/ "./src/modules/checkboxStatus.js":
/*!***************************************!*\
  !*** ./src/modules/checkboxStatus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");


const checkboxStatus = (e) => {
  const displayElement = e.target.parentElement.parentElement;
  const taskIndex = displayElement.getAttribute('id');
  const task = _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodo(taskIndex);
  task.completed = !task.completed;
  if (task.completed) {
    displayElement.classList.add('completed');
  } else {
    displayElement.classList.remove('completed');
  }
  _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(task);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkboxStatus);


/***/ }),

/***/ "./src/modules/clearAllCompleted.js":
/*!******************************************!*\
  !*** ./src/modules/clearAllCompleted.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");



const clearAllCompletedHandler = (e) => {
  e.preventDefault();
  let tasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
  tasks.forEach((element) => {
    if (element.completed) {
      tasks = tasks.filter((todo) => todo.index.toString() !== element.index.toString());
    }
  });
  const IndexChengedArray = [];
  tasks.sort((x, y) => x.index - y.index).forEach((element, index) => {
    IndexChengedArray.push(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](element.description, element.completed, index + 1));
  });
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(IndexChengedArray);
  window.location.reload();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllCompletedHandler);


/***/ }),

/***/ "./src/modules/deletHandler.js":
/*!*************************************!*\
  !*** ./src/modules/deletHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");


const deletEventHandler = (e) => {
  const todo = e.target.parentElement;
  const indexTodo = todo.getAttribute('id');
  _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTodo(indexTodo);
  window.location.reload();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deletEventHandler);


/***/ }),

/***/ "./src/modules/displayTodo.js":
/*!************************************!*\
  !*** ./src/modules/displayTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/edit-Icon.svg */ "./images/edit-Icon.svg");
/* harmony import */ var _updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTodoHandler.js */ "./src/modules/updateTodoHandler.js");
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodo.js */ "./src/modules/editTodo.js");
/* harmony import */ var _newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newCheckbox.js */ "./src/modules/newCheckbox.js");





const editClickHandler = (e) => {
  const displayElement = e.target.parentElement;
  const indexTodo = displayElement.getAttribute('id');
  const editElement = (0,_editTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(indexTodo);
  editElement.addEventListener('submit', _updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const taskList = displayElement.parentElement;
  taskList.replaceChild(editElement, displayElement);
};

const createEditIcon = () => {
  const editIcon = new Image();
  editIcon.src = _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  editIcon.setAttribute('class', 'icon');
  editIcon.addEventListener('click', editClickHandler);
  return editIcon;
};

const createDisplayElement = (todo) => {
  const displayElement = document.createElement('li');
  displayElement.setAttribute('id', todo.index);
  const labelElement = document.createElement('label');
  const checkboxElement = (0,_newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__["default"])(todo.completed);
  if (todo.completed) {
    displayElement.classList.add('completed');
  } else {
    displayElement.classList.remove('completed');
  }
  labelElement.appendChild(checkboxElement);
  const descriptionElement = document.createElement('span');
  descriptionElement.innerText = todo.description;
  labelElement.appendChild(descriptionElement);
  displayElement.appendChild(labelElement);
  const menuElement = createEditIcon();
  displayElement.appendChild(menuElement);
  return displayElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplayElement);


/***/ }),

/***/ "./src/modules/editTodo.js":
/*!*********************************!*\
  !*** ./src/modules/editTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/delet-Icon.svg */ "./images/delet-Icon.svg");
/* harmony import */ var _newCheckbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newCheckbox.js */ "./src/modules/newCheckbox.js");
/* harmony import */ var _deletHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deletHandler.js */ "./src/modules/deletHandler.js");





const createTaskDescripion = (description) => {
  const taskDescription = document.createElement('input');
  taskDescription.setAttribute('type', 'text');
  taskDescription.setAttribute('name', 'edit-todo');
  taskDescription.setAttribute('class', 'edit-todo-input');
  taskDescription.setAttribute('value', description);
  return taskDescription;
};

const createDeletElement = () => {
  const deletElement = new Image();
  deletElement.src = _images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1__;
  deletElement.setAttribute('class', 'icon');
  deletElement.addEventListener('click', _deletHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return deletElement;
};

const createEditElement = (indexTodo) => {
  const todo = _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodo(indexTodo);
  const editElement = document.createElement('form');
  editElement.setAttribute('class', 'edit-todo-form');
  editElement.setAttribute('id', indexTodo);
  editElement.setAttribute('action', '#');
  editElement.setAttribute('method', 'patch');
  editElement.setAttribute('type', 'submit');
  const label = document.createElement('label');
  label.setAttribute('for', 'edit-todo');
  label.setAttribute('id', 'edit-todo-label');
  const checkbox = (0,_newCheckbox_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todo.completed);
  if (todo.completed) {
    editElement.classList.add('completed');
  } else {
    editElement.classList.remove('completed');
  }
  label.appendChild(checkbox);
  const description = createTaskDescripion(todo.description);
  label.appendChild(description);
  const deleteElement = createDeletElement();
  editElement.appendChild(label);
  editElement.appendChild(deleteElement);
  return editElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEditElement);


/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieveData": () => (/* binding */ retrieveData),
/* harmony export */   "storeData": () => (/* binding */ storeData)
/* harmony export */ });
const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && storage && storage.length !== 0);
  }
};
let availableStorage;
let todos = [];
if (storageAvailable('localStorage')) {
  availableStorage = window.localStorage;
} else {
  availableStorage = null;
}
const retrieveData = () => {
  if (availableStorage.getItem('todos')) {
    const todosData = availableStorage.getItem('todos');
    todos = JSON.parse(todosData);
  }
  return todos;
};
const storeData = (todosArray) => {
  if (availableStorage) {
    const jsonData = JSON.stringify(todosArray);
    availableStorage.setItem('todos', jsonData);
  }
};


/***/ }),

/***/ "./src/modules/newCheckbox.js":
/*!************************************!*\
  !*** ./src/modules/newCheckbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkboxStatus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxStatus.js */ "./src/modules/checkboxStatus.js");


const createCheckbox = (status) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  if (status) {
    checkbox.checked = true;
  }
  checkbox.addEventListener('change', _checkboxStatus_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return checkbox;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCheckbox);


/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");


let newTodoArray = [];

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static getTodo = (index) => {
    newTodoArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
    const todo = newTodoArray.find((x) => x.index.toString() === index.toString());
    return todo;
  }

  static addTodo = (todo) => {
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    const testArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
    testArray.push(newTodo);
    return (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(testArray);
  }

  static updateTodo = (todo) => {
    newTodoArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
    newTodoArray = newTodoArray.filter((element) => element.index !== todo.index);
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    newTodoArray.push(newTodo);
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(newTodoArray);
  }

  static removeTodo = (index) => {
    newTodoArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
    newTodoArray = newTodoArray.filter((element) => element.index.toString() !== index.toString());
    const reIndexedArray = [];
    newTodoArray.sort((x, y) => x.index - y.index).forEach((element, index) => {
      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
    });
    return (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(reIndexedArray);
  }
}


/***/ }),

/***/ "./src/modules/updateTodoHandler.js":
/*!******************************************!*\
  !*** ./src/modules/updateTodoHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTodo.js */ "./src/modules/editTodo.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/edit-Icon.svg */ "./images/edit-Icon.svg");
/* harmony import */ var _newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newCheckbox.js */ "./src/modules/newCheckbox.js");





const updateTodoHandler = () => {
  const inputElement = document.getElementsByClassName('edit-todo-input')[0];
  const formElement = inputElement.parentElement.parentElement;
  const indexTodo = formElement.getAttribute('id');
  const todo = _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTodo(indexTodo);
  todo.description = inputElement.value;
  _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodo(todo);
  const displayElement = document.createElement('li');
  displayElement.setAttribute('id', todo.index);
  const editIcon = new Image();
  editIcon.src = _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2__;
  editIcon.setAttribute('class', 'icon');
  editIcon.addEventListener('click', (e) => {
    const displayElement = e.target.parentElement;
    const indexTodo = displayElement.getAttribute('id');
    const editElement = (0,_editTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(indexTodo);
    // editElement.addEventListener('submit', updateTodoHandler);
    const todoList = displayElement.parentElement;
    todoList.replaceChild(editElement, displayElement);
  });
  const label = document.createElement('label');
  const checkbox = (0,_newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__["default"])(todo.completed);
  if (todo.completed) {
    displayElement.classList.add('completed');
  } else {
    displayElement.classList.remove('completed');
  }
  label.appendChild(checkbox);
  const descriptionElement = document.createElement('span');
  descriptionElement.innerText = todo.description;
  label.appendChild(descriptionElement);
  displayElement.appendChild(label);
  displayElement.appendChild(editIcon);
  formElement.parentElement.replaceChild(displayElement, formElement);
  return displayElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTodoHandler);


/***/ }),

/***/ "./images/delet-Icon.svg":
/*!*******************************!*\
  !*** ./images/delet-Icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de6bfcf37c1a40561e3e.svg";

/***/ }),

/***/ "./images/edit-Icon.svg":
/*!******************************!*\
  !*** ./images/edit-Icon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b41e8f7bde0f4baade5.svg";

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "058c9ec4472cabd5f964.png";

/***/ }),

/***/ "./src/rotate.svg":
/*!************************!*\
  !*** ./src/rotate.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be6c0448531b7bce8092.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCO0FBQ2M7QUFDSDtBQUNLO0FBQ2dCO0FBQ087QUFDVTtBQUNiO0FBQ2lCO0FBQ1g7O0FBRS9EO0FBQ0E7QUFDQSxjQUFjLHNFQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtRUFBb0I7QUFDOUMsTUFBTSxrRUFBVztBQUNqQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix3Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHVDQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBGQUFzQztBQUM5Qyx5QkFBeUIsc0VBQVk7QUFDckMsMEJBQTBCLHdEQUFJO0FBQzlCLFFBQVEsMEZBQXNDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQVk7QUFDbEIsMEJBQTBCLG1FQUFvQjtBQUM5QyxNQUFNLGtFQUFXO0FBQ2pCLE1BQU0scUVBQWlCO0FBQ3ZCLE1BQU0sa0VBQWtFO0FBQ3hFLE1BQU0seUVBQWlCO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxxRUFBd0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdGQUE0QixXQUFXLHNFQUFrQjtBQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RTZCO0FBQ2dCO0FBQ0k7QUFDSDs7QUFFdkM7O0FBRUE7QUFDUDtBQUNBLHFCQUFxQiw4REFBWTtBQUNqQyxzQkFBc0IsZ0RBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFZO0FBQ2Qsc0JBQXNCLDJEQUFjO0FBQ3BDLEVBQUUsMERBQVc7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1A2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUUsMkRBQWU7QUFDakI7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y4QjtBQUMvQjs7QUFFN0I7QUFDQTtBQUNBLGNBQWMsOERBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLCtCQUErQixnREFBSTtBQUNuQyxHQUFHO0FBQ0gsRUFBRSwyREFBUztBQUNYO0FBQ0E7O0FBRUEsaUVBQWUsd0JBQXdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlg7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQWU7QUFDakI7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ1M7QUFDVDtBQUNBOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQWlCO0FBQ3ZDLHlDQUF5Qyw2REFBaUI7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQWM7QUFDeEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNQO0FBQ29CO0FBQ0g7QUFDSzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFNO0FBQzNCO0FBQ0EseUNBQXlDLHdEQUFrQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3REFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQWM7QUFDakM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBEQUFjO0FBQ3BEO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjhCOztBQUU1RDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsOERBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBWTtBQUNsQztBQUNBLFdBQVcsMkRBQVM7QUFDcEI7O0FBRUE7QUFDQSxtQkFBbUIsOERBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFTO0FBQ2I7O0FBRUE7QUFDQSxtQkFBbUIsOERBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsV0FBVywyREFBUztBQUNwQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRrRDtBQUNyQjtBQUNpQjtBQUNBOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQVk7QUFDM0I7QUFDQSxFQUFFLDJEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLDJEQUFjO0FBQ2pDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZE5ld1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoYW5nZURvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2hlY2tib3hTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NsZWFyQWxsQ29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWxldEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9uZXdDaGVja2JveC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdXBkYXRlVG9kb0hhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVmcmVzaCBmcm9tICcuL3JvdGF0ZS5zdmcnO1xuaW1wb3J0IEVudGVyIGZyb20gJy4vZW50ZXIucG5nJztcbmltcG9ydCBUb2RvIGZyb20gJy4vbW9kdWxlcy90b2RvLmpzJztcbmltcG9ydCB7IGFwcGVuZFRvRE9NIH0gZnJvbSAnLi9tb2R1bGVzL2NoYW5nZURvbS5qcyc7XG5pbXBvcnQgY3JlYXRlRGlzcGxheUVsZW1lbnQgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlUb2RvLmpzJztcbmltcG9ydCBjbGVhckFsbENvbXBsZXRlZEhhbmRsZXIgZnJvbSAnLi9tb2R1bGVzL2NsZWFyQWxsQ29tcGxldGVkLmpzJztcbmltcG9ydCB7IHJldHJpZXZlRGF0YSB9IGZyb20gJy4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgYWRkVG9kb0Zvcm0sIGFkZFRvZG9Gb3JtSGFuZGxlciB9IGZyb20gJy4vbW9kdWxlcy9hZGROZXdUb2RvLmpzJztcbmltcG9ydCB1cGRhdGVUb2RvSGFuZGxlciBmcm9tICcuL21vZHVsZXMvdXBkYXRlVG9kb0hhbmRsZXIuanMnO1xuXG5jb25zdCBsb2FkRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgdGFza0FycmF5ID0gcmV0cmlldmVEYXRhKCk7XG4gIHRhc2tBcnJheVxuICAgIC5zb3J0KCh4LCB5KSA9PiB4LmluZGV4IC0geS5pbmRleClcbiAgICAuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVEaXNwbGF5RWxlbWVudCh0b2RvKTtcbiAgICAgIGFwcGVuZFRvRE9NKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvYWRSZWZyZXNoSWNvbiA9ICgpID0+IHtcbiAgY29uc3QgcmVmcmVzaEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdF9yZWZyZXNoJyk7XG4gIHJlZnJlc2hJY29uLnNyYyA9IFJlZnJlc2g7XG4gIHJlZnJlc2hJY29uLmFsdCA9ICdyZWZyZXNoJztcbiAgcmVmcmVzaEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXItaWNvbicpO1xuICByZWZyZXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZEVudGVySWNvbiA9ICgpID0+IHtcbiAgY29uc3QgZW50ZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyX25ld3RvZG8nKTtcbiAgZW50ZXJJY29uLnNyYyA9IEVudGVyO1xuICBlbnRlckljb24uYWx0ID0gJ2VudGVyJztcbiAgZW50ZXJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAvLyBhZGQgZXZlbnRsaXN0bmVyIGZvciBlbnRlciBrZXlcbiAgZW50ZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGlmIHRvZG8gaXMgd3JpdHRlbiBvciBhZGQgdG8geW91ciBsaXN0IGZpZWxkIGlzIG5vdCBlbXBpdHlcbiAgICBpZiAoYWRkVG9kb0Zvcm0uZWxlbWVudHNbJ2FkZC10YXNrJ10udmFsdWUpIHtcbiAgICAgIGNvbnN0IHRvZG9zQXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgYWRkVG9kb0Zvcm0uZWxlbWVudHNbJ2FkZC10YXNrJ10udmFsdWUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB0b2Rvc0FycmF5Lmxlbmd0aCArIDEsXG4gICAgICApO1xuICAgICAgVG9kby5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBjcmVhdGVEaXNwbGF5RWxlbWVudChuZXdUb2RvKTtcbiAgICAgIGFwcGVuZFRvRE9NKHRvZG9FbGVtZW50KTtcbiAgICAgIGFkZFRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXRvZG8taW5wdXQnKVswXSkgeyAvLyBpZiBhZGQgdG9kbyBpcyBlbXBpdHkgYW5kIGlmIHNvbWVvbmUgaXMgeW91c2luZyBwaG9uZSBhbmQgd2FudCB0byBlZGl0IGEgdGFza1xuICAgICAgdXBkYXRlVG9kb0hhbmRsZXIoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZEFmdGVyQWxsQ2xlYXJlZCA9ICgpID0+IHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXTtcbiAgY29uc3QgY2xlYXJBbGxDb21wbGV0ZWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjbGVhckFsbENvbXBsZXRlZExpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdjbGVhci1hbGwtY29tcGxldGVkJyk7XG4gIGNsZWFyQWxsQ29tcGxldGVkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLycpO1xuICBjbGVhckFsbENvbXBsZXRlZExpbmsuaW5uZXJUZXh0ID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xuICBjbGVhckFsbENvbXBsZXRlZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckFsbENvbXBsZXRlZEhhbmRsZXIpO1xuICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xlYXJBbGxDb21wbGV0ZWRMaW5rKTtcbn07XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBsb2FkRWxlbWVudHMoKTtcbiAgbG9hZFJlZnJlc2hJY29uKCk7XG4gIGxvYWRFbnRlckljb24oKTtcbiAgbG9hZEFmdGVyQWxsQ2xlYXJlZCgpO1xuICBhZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb2RvRm9ybUhhbmRsZXIpO1xufTtcbiIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBhcHBlbmRUb0RPTSB9IGZyb20gJy4vY2hhbmdlRG9tLmpzJztcbmltcG9ydCB7IHJldHJpZXZlRGF0YSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCBkZXNwbGF5RWxlbWVudCBmcm9tICcuL2Rpc3BsYXlUb2RvLmpzJztcblxuZXhwb3J0IGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xuXG5leHBvcnQgY29uc3QgYWRkVG9kb0Zvcm1IYW5kbGVyID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2Rvc0FycmF5ID0gcmV0cmlldmVEYXRhKCk7XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICBhZGRUb2RvRm9ybS5lbGVtZW50c1snYWRkLXRhc2snXS52YWx1ZSxcbiAgICBmYWxzZSxcbiAgICB0b2Rvc0FycmF5Lmxlbmd0aCArIDEsXG4gICk7XG4gIFRvZG8uYWRkVG9kbyhuZXdUb2RvKTtcbiAgY29uc3QgdG9kb0VsZW1lbnQgPSBkZXNwbGF5RWxlbWVudChuZXdUb2RvKTtcbiAgYXBwZW5kVG9ET00odG9kb0VsZW1lbnQpO1xuICBhZGRUb2RvRm9ybS5yZXNldCgpO1xufTtcbiIsImV4cG9ydCBjb25zdCBhcHBlbmRUb0RPTSA9ICh0b2RvRWxlbWVudCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpO1xuICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbURPTSA9ICh0b2RvKSA9PiB7XG4gIHRvZG8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0b2RvKTtcbn07XG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBjaGVja2JveFN0YXR1cyA9IChlKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCB0YXNrSW5kZXggPSBkaXNwbGF5RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gIGNvbnN0IHRhc2sgPSBUb2RvLmdldFRvZG8odGFza0luZGV4KTtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIGRpc3BsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICB9XG4gIFRvZG8udXBkYXRlVG9kbyh0YXNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrYm94U3RhdHVzO1xuIiwiaW1wb3J0IHsgcmV0cmlldmVEYXRhLCBzdG9yZURhdGEgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBjbGVhckFsbENvbXBsZXRlZEhhbmRsZXIgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0YXNrcyA9IHJldHJpZXZlRGF0YSgpO1xuICB0YXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY29tcGxldGVkKSB7XG4gICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodG9kbykgPT4gdG9kby5pbmRleC50b1N0cmluZygpICE9PSBlbGVtZW50LmluZGV4LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IEluZGV4Q2hlbmdlZEFycmF5ID0gW107XG4gIHRhc2tzLnNvcnQoKHgsIHkpID0+IHguaW5kZXggLSB5LmluZGV4KS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIEluZGV4Q2hlbmdlZEFycmF5LnB1c2gobmV3IFRvZG8oZWxlbWVudC5kZXNjcmlwdGlvbiwgZWxlbWVudC5jb21wbGV0ZWQsIGluZGV4ICsgMSkpO1xuICB9KTtcbiAgc3RvcmVEYXRhKEluZGV4Q2hlbmdlZEFycmF5KTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJBbGxDb21wbGV0ZWRIYW5kbGVyO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcblxuY29uc3QgZGVsZXRFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuICBjb25zdCB0b2RvID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgaW5kZXhUb2RvID0gdG9kby5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gIFRvZG8ucmVtb3ZlVG9kbyhpbmRleFRvZG8pO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldEV2ZW50SGFuZGxlcjtcbiIsImltcG9ydCBFZGl0IGZyb20gJy4uLy4uL2ltYWdlcy9lZGl0LUljb24uc3ZnJztcbmltcG9ydCB1cGRhdGVUb2RvSGFuZGxlciBmcm9tICcuL3VwZGF0ZVRvZG9IYW5kbGVyLmpzJztcbmltcG9ydCBjcmVhdGVFZGl0RWxlbWVudCBmcm9tICcuL2VkaXRUb2RvLmpzJztcbmltcG9ydCBjcmVhdGVDaGVja2JveCBmcm9tICcuL25ld0NoZWNrYm94LmpzJztcblxuY29uc3QgZWRpdENsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgaW5kZXhUb2RvID0gZGlzcGxheUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICBjb25zdCBlZGl0RWxlbWVudCA9IGNyZWF0ZUVkaXRFbGVtZW50KGluZGV4VG9kbyk7XG4gIGVkaXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHVwZGF0ZVRvZG9IYW5kbGVyKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkaXNwbGF5RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB0YXNrTGlzdC5yZXBsYWNlQ2hpbGQoZWRpdEVsZW1lbnQsIGRpc3BsYXlFbGVtZW50KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVkaXRJY29uID0gKCkgPT4ge1xuICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBlZGl0SWNvbi5zcmMgPSBFZGl0O1xuICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0Q2xpY2tIYW5kbGVyKTtcbiAgcmV0dXJuIGVkaXRJY29uO1xufTtcblxuY29uc3QgY3JlYXRlRGlzcGxheUVsZW1lbnQgPSAodG9kbykgPT4ge1xuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGRpc3BsYXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCB0b2RvLmluZGV4KTtcbiAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgY2hlY2tib3hFbGVtZW50ID0gY3JlYXRlQ2hlY2tib3godG9kby5jb21wbGV0ZWQpO1xuICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgfVxuICBsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hFbGVtZW50KTtcbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgbGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gIGRpc3BsYXlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gIGNvbnN0IG1lbnVFbGVtZW50ID0gY3JlYXRlRWRpdEljb24oKTtcbiAgZGlzcGxheUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUVsZW1lbnQpO1xuICByZXR1cm4gZGlzcGxheUVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwbGF5RWxlbWVudDtcbiIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgRGVsZXRlIGZyb20gJy4uLy4uL2ltYWdlcy9kZWxldC1JY29uLnN2Zyc7XG5pbXBvcnQgY3JlYXRlQ2hlY2tib3ggZnJvbSAnLi9uZXdDaGVja2JveC5qcyc7XG5pbXBvcnQgZGVsZXRlRXZlbnRIYW5kbGVyIGZyb20gJy4vZGVsZXRIYW5kbGVyLmpzJztcblxuY29uc3QgY3JlYXRlVGFza0Rlc2NyaXBpb24gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWRpdC10b2RvJyk7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQtdG9kby1pbnB1dCcpO1xuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIHRhc2tEZXNjcmlwdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZURlbGV0RWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgZGVsZXRFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gIGRlbGV0RWxlbWVudC5zcmMgPSBEZWxldGU7XG4gIGRlbGV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgZGVsZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlRXZlbnRIYW5kbGVyKTtcbiAgcmV0dXJuIGRlbGV0RWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVkaXRFbGVtZW50ID0gKGluZGV4VG9kbykgPT4ge1xuICBjb25zdCB0b2RvID0gVG9kby5nZXRUb2RvKGluZGV4VG9kbyk7XG4gIGNvbnN0IGVkaXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBlZGl0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQtdG9kby1mb3JtJyk7XG4gIGVkaXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpbmRleFRvZG8pO1xuICBlZGl0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gIGVkaXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3BhdGNoJyk7XG4gIGVkaXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlZGl0LXRvZG8nKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LXRvZG8tbGFiZWwnKTtcbiAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVDaGVja2JveCh0b2RvLmNvbXBsZXRlZCk7XG4gIGlmICh0b2RvLmNvbXBsZXRlZCkge1xuICAgIGVkaXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICB9IGVsc2Uge1xuICAgIGVkaXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICB9XG4gIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVUYXNrRGVzY3JpcGlvbih0b2RvLmRlc2NyaXB0aW9uKTtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBjb25zdCBkZWxldGVFbGVtZW50ID0gY3JlYXRlRGVsZXRFbGVtZW50KCk7XG4gIGVkaXRFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZWRpdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlRWxlbWVudCk7XG4gIHJldHVybiBlZGl0RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVkaXRFbGVtZW50O1xuIiwiY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKGUuY29kZSA9PT0gMjIgfHwgZS5jb2RlID09PSAxMDE0IHx8IGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHwgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJiBzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgfVxufTtcbmxldCBhdmFpbGFibGVTdG9yYWdlO1xubGV0IHRvZG9zID0gW107XG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgYXZhaWxhYmxlU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG59IGVsc2Uge1xuICBhdmFpbGFibGVTdG9yYWdlID0gbnVsbDtcbn1cbmV4cG9ydCBjb25zdCByZXRyaWV2ZURhdGEgPSAoKSA9PiB7XG4gIGlmIChhdmFpbGFibGVTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHtcbiAgICBjb25zdCB0b2Rvc0RhdGEgPSBhdmFpbGFibGVTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJyk7XG4gICAgdG9kb3MgPSBKU09OLnBhcnNlKHRvZG9zRGF0YSk7XG4gIH1cbiAgcmV0dXJuIHRvZG9zO1xufTtcbmV4cG9ydCBjb25zdCBzdG9yZURhdGEgPSAodG9kb3NBcnJheSkgPT4ge1xuICBpZiAoYXZhaWxhYmxlU3RvcmFnZSkge1xuICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkodG9kb3NBcnJheSk7XG4gICAgYXZhaWxhYmxlU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIGpzb25EYXRhKTtcbiAgfVxufTtcbiIsImltcG9ydCBjaGVja2JveFN0YXR1cyBmcm9tICcuL2NoZWNrYm94U3RhdHVzLmpzJztcblxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoc3RhdHVzKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgaWYgKHN0YXR1cykge1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICB9XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrYm94U3RhdHVzKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2hlY2tib3g7XG4iLCJpbXBvcnQgeyBzdG9yZURhdGEsIHJldHJpZXZlRGF0YSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxubGV0IG5ld1RvZG9BcnJheSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc3RhdGljIGdldFRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICBuZXdUb2RvQXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcbiAgICBjb25zdCB0b2RvID0gbmV3VG9kb0FycmF5LmZpbmQoKHgpID0+IHguaW5kZXgudG9TdHJpbmcoKSA9PT0gaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH1cblxuICBzdGF0aWMgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxuICAgICAgdG9kby5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG8uY29tcGxldGVkLFxuICAgICAgdG9kby5pbmRleCxcbiAgICApO1xuICAgIGNvbnN0IHRlc3RBcnJheSA9IHJldHJpZXZlRGF0YSgpO1xuICAgIHRlc3RBcnJheS5wdXNoKG5ld1RvZG8pO1xuICAgIHJldHVybiBzdG9yZURhdGEodGVzdEFycmF5KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBuZXdUb2RvQXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcbiAgICBuZXdUb2RvQXJyYXkgPSBuZXdUb2RvQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmluZGV4ICE9PSB0b2RvLmluZGV4KTtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgdG9kby5jb21wbGV0ZWQsXG4gICAgICB0b2RvLmluZGV4LFxuICAgICk7XG4gICAgbmV3VG9kb0FycmF5LnB1c2gobmV3VG9kbyk7XG4gICAgc3RvcmVEYXRhKG5ld1RvZG9BcnJheSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIG5ld1RvZG9BcnJheSA9IHJldHJpZXZlRGF0YSgpO1xuICAgIG5ld1RvZG9BcnJheSA9IG5ld1RvZG9BcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5kZXgudG9TdHJpbmcoKSAhPT0gaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgcmVJbmRleGVkQXJyYXkgPSBbXTtcbiAgICBuZXdUb2RvQXJyYXkuc29ydCgoeCwgeSkgPT4geC5pbmRleCAtIHkuaW5kZXgpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZUluZGV4ZWRBcnJheS5wdXNoKG5ldyBUb2RvKGVsZW1lbnQuZGVzY3JpcHRpb24sIGVsZW1lbnQuY29tcGxldGVkLCBpbmRleCArIDEpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RvcmVEYXRhKHJlSW5kZXhlZEFycmF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUVkaXRGb3JtRWxlbWVudCBmcm9tICcuL2VkaXRUb2RvLmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuLi8uLi9pbWFnZXMvZWRpdC1JY29uLnN2Zyc7XG5pbXBvcnQgY3JlYXRlQ2hlY2tib3ggZnJvbSAnLi9uZXdDaGVja2JveC5qcyc7XG5cbmNvbnN0IHVwZGF0ZVRvZG9IYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXRvZG8taW5wdXQnKVswXTtcbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBpbmRleFRvZG8gPSBmb3JtRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gIGNvbnN0IHRvZG8gPSBUb2RvLmdldFRvZG8oaW5kZXhUb2RvKTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGlucHV0RWxlbWVudC52YWx1ZTtcbiAgVG9kby51cGRhdGVUb2RvKHRvZG8pO1xuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGRpc3BsYXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCB0b2RvLmluZGV4KTtcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEljb24uc3JjID0gRWRpdDtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgaW5kZXhUb2RvID0gZGlzcGxheUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGVkaXRFbGVtZW50ID0gY3JlYXRlRWRpdEZvcm1FbGVtZW50KGluZGV4VG9kbyk7XG4gICAgLy8gZWRpdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdXBkYXRlVG9kb0hhbmRsZXIpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZGlzcGxheUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB0b2RvTGlzdC5yZXBsYWNlQ2hpbGQoZWRpdEVsZW1lbnQsIGRpc3BsYXlFbGVtZW50KTtcbiAgfSk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVDaGVja2JveCh0b2RvLmNvbXBsZXRlZCk7XG4gIGlmICh0b2RvLmNvbXBsZXRlZCkge1xuICAgIGRpc3BsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICB9XG4gIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgZGlzcGxheUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIGZvcm1FbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKGRpc3BsYXlFbGVtZW50LCBmb3JtRWxlbWVudCk7XG4gIHJldHVybiBkaXNwbGF5RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVRvZG9IYW5kbGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9