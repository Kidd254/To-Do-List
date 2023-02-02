(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./images/delet-Icon.svg":
/*!*******************************!*\
  !*** ./images/delet-Icon.svg ***!
  \*******************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d=\"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z\"/></svg>");

/***/ }),

/***/ "./images/edit-Icon.svg":
/*!******************************!*\
  !*** ./images/edit-Icon.svg ***!
  \******************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 128 512\"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d=\"M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z\"/></svg>");

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _rotate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotate.svg */ "./src/rotate.svg");
/* harmony import */ var _rotate_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rotate_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.png */ "./src/enter.png");
/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_enter_png__WEBPACK_IMPORTED_MODULE_2__);
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
  refreshIcon.src = (_rotate_svg__WEBPACK_IMPORTED_MODULE_1___default());
  refreshIcon.alt = 'refresh';
  refreshIcon.setAttribute('class', 'header-icon');
  refreshIcon.addEventListener('click', () => {
    window.location.reload();
  });
};

const loadEnterIcon = () => {
  const enterIcon = document.getElementById('enter_newtodo');
  enterIcon.src = (_enter_png__WEBPACK_IMPORTED_MODULE_2___default());
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/edit-Icon.svg */ "./images/edit-Icon.svg");
/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0__);
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
  editIcon.src = (_images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0___default());
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/delet-Icon.svg */ "./images/delet-Icon.svg");
/* harmony import */ var _images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1__);
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
  deletElement.src = (_images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1___default());
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTodo.js */ "./src/modules/editTodo.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/edit-Icon.svg */ "./images/edit-Icon.svg");
/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2__);
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
  editIcon.src = (_images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2___default());
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

/***/ "./src/rotate.svg":
/*!************************!*\
  !*** ./src/rotate.svg ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d=\"M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z\"/></svg>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pEa0Q7QUFDckI7QUFDaUI7QUFDQTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBWTtBQUMzQjtBQUNBLEVBQUUsMkRBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsMkRBQWM7QUFDakM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9hZGROZXdUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jaGFuZ2VEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoZWNrYm94U3RhdHVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jbGVhckFsbENvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGVsZXRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5VG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvbmV3Q2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VwZGF0ZVRvZG9IYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBSZWZyZXNoIGZyb20gJy4vcm90YXRlLnN2Zyc7XG5pbXBvcnQgRW50ZXIgZnJvbSAnLi9lbnRlci5wbmcnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9tb2R1bGVzL3RvZG8uanMnO1xuaW1wb3J0IHsgYXBwZW5kVG9ET00gfSBmcm9tICcuL21vZHVsZXMvY2hhbmdlRG9tLmpzJztcbmltcG9ydCBjcmVhdGVEaXNwbGF5RWxlbWVudCBmcm9tICcuL21vZHVsZXMvZGlzcGxheVRvZG8uanMnO1xuaW1wb3J0IGNsZWFyQWxsQ29tcGxldGVkSGFuZGxlciBmcm9tICcuL21vZHVsZXMvY2xlYXJBbGxDb21wbGV0ZWQuanMnO1xuaW1wb3J0IHsgcmV0cmlldmVEYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBhZGRUb2RvRm9ybSwgYWRkVG9kb0Zvcm1IYW5kbGVyIH0gZnJvbSAnLi9tb2R1bGVzL2FkZE5ld1RvZG8uanMnO1xuaW1wb3J0IHVwZGF0ZVRvZG9IYW5kbGVyIGZyb20gJy4vbW9kdWxlcy91cGRhdGVUb2RvSGFuZGxlci5qcyc7XG5cbmNvbnN0IGxvYWRFbGVtZW50cyA9ICgpID0+IHtcbiAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICB0YXNrQXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcbiAgdGFza0FycmF5XG4gICAgLnNvcnQoKHgsIHkpID0+IHguaW5kZXggLSB5LmluZGV4KVxuICAgIC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGNyZWF0ZURpc3BsYXlFbGVtZW50KHRvZG8pO1xuICAgICAgYXBwZW5kVG9ET00odGFza0VsZW1lbnQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgbG9hZFJlZnJlc2hJY29uID0gKCkgPT4ge1xuICBjb25zdCByZWZyZXNoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0X3JlZnJlc2gnKTtcbiAgcmVmcmVzaEljb24uc3JjID0gUmVmcmVzaDtcbiAgcmVmcmVzaEljb24uYWx0ID0gJ3JlZnJlc2gnO1xuICByZWZyZXNoSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlci1pY29uJyk7XG4gIHJlZnJlc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBsb2FkRW50ZXJJY29uID0gKCkgPT4ge1xuICBjb25zdCBlbnRlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXJfbmV3dG9kbycpO1xuICBlbnRlckljb24uc3JjID0gRW50ZXI7XG4gIGVudGVySWNvbi5hbHQgPSAnZW50ZXInO1xuICBlbnRlckljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gIC8vIGFkZCBldmVudGxpc3RuZXIgZm9yIGVudGVyIGtleVxuICBlbnRlckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gaWYgdG9kbyBpcyB3cml0dGVuIG9yIGFkZCB0byB5b3VyIGxpc3QgZmllbGQgaXMgbm90IGVtcGl0eVxuICAgIGlmIChhZGRUb2RvRm9ybS5lbGVtZW50c1snYWRkLXRhc2snXS52YWx1ZSkge1xuICAgICAgY29uc3QgdG9kb3NBcnJheSA9IHJldHJpZXZlRGF0YSgpO1xuICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxuICAgICAgICBhZGRUb2RvRm9ybS5lbGVtZW50c1snYWRkLXRhc2snXS52YWx1ZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRvZG9zQXJyYXkubGVuZ3RoICsgMSxcbiAgICAgICk7XG4gICAgICBUb2RvLmFkZFRvZG8obmV3VG9kbyk7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGNyZWF0ZURpc3BsYXlFbGVtZW50KG5ld1RvZG8pO1xuICAgICAgYXBwZW5kVG9ET00odG9kb0VsZW1lbnQpO1xuICAgICAgYWRkVG9kb0Zvcm0ucmVzZXQoKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQtdG9kby1pbnB1dCcpWzBdKSB7IC8vIGlmIGFkZCB0b2RvIGlzIGVtcGl0eSBhbmQgaWYgc29tZW9uZSBpcyB5b3VzaW5nIHBob25lIGFuZCB3YW50IHRvIGVkaXQgYSB0YXNrXG4gICAgICB1cGRhdGVUb2RvSGFuZGxlcigpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBsb2FkQWZ0ZXJBbGxDbGVhcmVkID0gKCkgPT4ge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdO1xuICBjb25zdCBjbGVhckFsbENvbXBsZXRlZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNsZWFyQWxsQ29tcGxldGVkTGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NsZWFyLWFsbC1jb21wbGV0ZWQnKTtcbiAgY2xlYXJBbGxDb21wbGV0ZWRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcvJyk7XG4gIGNsZWFyQWxsQ29tcGxldGVkTGluay5pbm5lclRleHQgPSAnQ2xlYXIgYWxsIGNvbXBsZXRlZCc7XG4gIGNsZWFyQWxsQ29tcGxldGVkTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQWxsQ29tcGxldGVkSGFuZGxlcik7XG4gIHBhcmFncmFwaC5hcHBlbmRDaGlsZChjbGVhckFsbENvbXBsZXRlZExpbmspO1xufTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGxvYWRFbGVtZW50cygpO1xuICBsb2FkUmVmcmVzaEljb24oKTtcbiAgbG9hZEVudGVySWNvbigpO1xuICBsb2FkQWZ0ZXJBbGxDbGVhcmVkKCk7XG4gIGFkZFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG9Gb3JtSGFuZGxlcik7XG59O1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuaW1wb3J0IHsgYXBwZW5kVG9ET00gfSBmcm9tICcuL2NoYW5nZURvbS5qcyc7XHJcbmltcG9ydCB7IHJldHJpZXZlRGF0YSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcclxuaW1wb3J0IGRlc3BsYXlFbGVtZW50IGZyb20gJy4vZGlzcGxheVRvZG8uanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvZG9Gb3JtSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRvZG9zQXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcclxuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXHJcbiAgICBhZGRUb2RvRm9ybS5lbGVtZW50c1snYWRkLXRhc2snXS52YWx1ZSxcclxuICAgIGZhbHNlLFxyXG4gICAgdG9kb3NBcnJheS5sZW5ndGggKyAxLFxyXG4gICk7XHJcbiAgVG9kby5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gIGNvbnN0IHRvZG9FbGVtZW50ID0gZGVzcGxheUVsZW1lbnQobmV3VG9kbyk7XHJcbiAgYXBwZW5kVG9ET00odG9kb0VsZW1lbnQpO1xyXG4gIGFkZFRvZG9Gb3JtLnJlc2V0KCk7XHJcbn07IiwiZXhwb3J0IGNvbnN0IGFwcGVuZFRvRE9NID0gKHRvZG9FbGVtZW50KSA9PiB7XHJcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKTtcclxuICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbURPTSA9ICh0b2RvKSA9PiB7XHJcbiAgdG9kby5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRvZG8pO1xyXG59OyIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XHJcblxyXG5jb25zdCBjaGVja2JveFN0YXR1cyA9IChlKSA9PiB7XHJcbiAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3QgdGFza0luZGV4ID0gZGlzcGxheUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gIGNvbnN0IHRhc2sgPSBUb2RvLmdldFRvZG8odGFza0luZGV4KTtcclxuICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcclxuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcclxuICAgIGRpc3BsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICB9XHJcbiAgVG9kby51cGRhdGVUb2RvKHRhc2spO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tib3hTdGF0dXM7IiwiaW1wb3J0IHsgcmV0cmlldmVEYXRhLCBzdG9yZURhdGEgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XHJcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XHJcblxyXG5jb25zdCBjbGVhckFsbENvbXBsZXRlZEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgdGFza3MgPSByZXRyaWV2ZURhdGEoKTtcclxuICB0YXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5jb21wbGV0ZWQpIHtcclxuICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaW5kZXgudG9TdHJpbmcoKSAhPT0gZWxlbWVudC5pbmRleC50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBJbmRleENoZW5nZWRBcnJheSA9IFtdO1xyXG4gIHRhc2tzLnNvcnQoKHgsIHkpID0+IHguaW5kZXggLSB5LmluZGV4KS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgSW5kZXhDaGVuZ2VkQXJyYXkucHVzaChuZXcgVG9kbyhlbGVtZW50LmRlc2NyaXB0aW9uLCBlbGVtZW50LmNvbXBsZXRlZCwgaW5kZXggKyAxKSk7XHJcbiAgfSk7XHJcbiAgc3RvcmVEYXRhKEluZGV4Q2hlbmdlZEFycmF5KTtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhckFsbENvbXBsZXRlZEhhbmRsZXI7IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuXHJcbmNvbnN0IGRlbGV0RXZlbnRIYW5kbGVyID0gKGUpID0+IHtcclxuICBjb25zdCB0b2RvID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCBpbmRleFRvZG8gPSB0b2RvLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICBUb2RvLnJlbW92ZVRvZG8oaW5kZXhUb2RvKTtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldEV2ZW50SGFuZGxlcjsiLCJpbXBvcnQgRWRpdCBmcm9tICcuLi8uLi9pbWFnZXMvZWRpdC1JY29uLnN2Zyc7XHJcbmltcG9ydCB1cGRhdGVUb2RvSGFuZGxlciBmcm9tICcuL3VwZGF0ZVRvZG9IYW5kbGVyLmpzJztcclxuaW1wb3J0IGNyZWF0ZUVkaXRFbGVtZW50IGZyb20gJy4vZWRpdFRvZG8uanMnO1xyXG5pbXBvcnQgY3JlYXRlQ2hlY2tib3ggZnJvbSAnLi9uZXdDaGVja2JveC5qcyc7XHJcblxyXG5jb25zdCBlZGl0Q2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3QgaW5kZXhUb2RvID0gZGlzcGxheUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gIGNvbnN0IGVkaXRFbGVtZW50ID0gY3JlYXRlRWRpdEVsZW1lbnQoaW5kZXhUb2RvKTtcclxuICBlZGl0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB1cGRhdGVUb2RvSGFuZGxlcik7XHJcbiAgY29uc3QgdGFza0xpc3QgPSBkaXNwbGF5RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIHRhc2tMaXN0LnJlcGxhY2VDaGlsZChlZGl0RWxlbWVudCwgZGlzcGxheUVsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRWRpdEljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBlZGl0SWNvbi5zcmMgPSBFZGl0O1xyXG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xyXG4gIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdENsaWNrSGFuZGxlcik7XHJcbiAgcmV0dXJuIGVkaXRJY29uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRGlzcGxheUVsZW1lbnQgPSAodG9kbykgPT4ge1xyXG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBkaXNwbGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBjaGVja2JveEVsZW1lbnQgPSBjcmVhdGVDaGVja2JveCh0b2RvLmNvbXBsZXRlZCk7XHJcbiAgaWYgKHRvZG8uY29tcGxldGVkKSB7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGlzcGxheUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgfVxyXG4gIGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChjaGVja2JveEVsZW1lbnQpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICBsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcclxuICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xyXG4gIGNvbnN0IG1lbnVFbGVtZW50ID0gY3JlYXRlRWRpdEljb24oKTtcclxuICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChtZW51RWxlbWVudCk7XHJcbiAgcmV0dXJuIGRpc3BsYXlFbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGxheUVsZW1lbnQ7IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICcuLi8uLi9pbWFnZXMvZGVsZXQtSWNvbi5zdmcnO1xyXG5pbXBvcnQgY3JlYXRlQ2hlY2tib3ggZnJvbSAnLi9uZXdDaGVja2JveC5qcyc7XHJcbmltcG9ydCBkZWxldGVFdmVudEhhbmRsZXIgZnJvbSAnLi9kZWxldEhhbmRsZXIuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlVGFza0Rlc2NyaXBpb24gPSAoZGVzY3JpcHRpb24pID0+IHtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWRpdC10b2RvJyk7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdC10b2RvLWlucHV0Jyk7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkZXNjcmlwdGlvbik7XHJcbiAgcmV0dXJuIHRhc2tEZXNjcmlwdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZURlbGV0RWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBkZWxldEVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWxldEVsZW1lbnQuc3JjID0gRGVsZXRlO1xyXG4gIGRlbGV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcclxuICBkZWxldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVFdmVudEhhbmRsZXIpO1xyXG4gIHJldHVybiBkZWxldEVsZW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVFZGl0RWxlbWVudCA9IChpbmRleFRvZG8pID0+IHtcclxuICBjb25zdCB0b2RvID0gVG9kby5nZXRUb2RvKGluZGV4VG9kbyk7XHJcbiAgY29uc3QgZWRpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgZWRpdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LXRvZG8tZm9ybScpO1xyXG4gIGVkaXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpbmRleFRvZG8pO1xyXG4gIGVkaXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcclxuICBlZGl0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwYXRjaCcpO1xyXG4gIGVkaXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZWRpdC10b2RvJyk7XHJcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LXRvZG8tbGFiZWwnKTtcclxuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KHRvZG8uY29tcGxldGVkKTtcclxuICBpZiAodG9kby5jb21wbGV0ZWQpIHtcclxuICAgIGVkaXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlZGl0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICB9XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlVGFza0Rlc2NyaXBpb24odG9kby5kZXNjcmlwdGlvbik7XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGNvbnN0IGRlbGV0ZUVsZW1lbnQgPSBjcmVhdGVEZWxldEVsZW1lbnQoKTtcclxuICBlZGl0RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgZWRpdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlRWxlbWVudCk7XHJcbiAgcmV0dXJuIGVkaXRFbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdEVsZW1lbnQ7IiwiY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHN0b3JhZ2U7XHJcbiAgdHJ5IHtcclxuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoZS5jb2RlID09PSAyMiB8fCBlLmNvZGUgPT09IDEwMTQgfHwgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmIHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xyXG4gIH1cclxufTtcclxubGV0IGF2YWlsYWJsZVN0b3JhZ2U7XHJcbmxldCB0b2RvcyA9IFtdO1xyXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcclxuICBhdmFpbGFibGVTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxufSBlbHNlIHtcclxuICBhdmFpbGFibGVTdG9yYWdlID0gbnVsbDtcclxufVxyXG5leHBvcnQgY29uc3QgcmV0cmlldmVEYXRhID0gKCkgPT4ge1xyXG4gIGlmIChhdmFpbGFibGVTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHtcclxuICAgIGNvbnN0IHRvZG9zRGF0YSA9IGF2YWlsYWJsZVN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcclxuICAgIHRvZG9zID0gSlNPTi5wYXJzZSh0b2Rvc0RhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gdG9kb3M7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBzdG9yZURhdGEgPSAodG9kb3NBcnJheSkgPT4ge1xyXG4gIGlmIChhdmFpbGFibGVTdG9yYWdlKSB7XHJcbiAgICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHRvZG9zQXJyYXkpO1xyXG4gICAgYXZhaWxhYmxlU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIGpzb25EYXRhKTtcclxuICB9XHJcbn07IiwiaW1wb3J0IGNoZWNrYm94U3RhdHVzIGZyb20gJy4vY2hlY2tib3hTdGF0dXMuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoc3RhdHVzKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3gnKTtcclxuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICBpZiAoc3RhdHVzKSB7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hlY2tib3hTdGF0dXMpO1xyXG4gIHJldHVybiBjaGVja2JveDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNoZWNrYm94OyIsImltcG9ydCB7IHN0b3JlRGF0YSwgcmV0cmlldmVEYXRhIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xyXG5cclxubGV0IG5ld1RvZG9BcnJheSA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRvZG8gPSAoaW5kZXgpID0+IHtcclxuICAgIG5ld1RvZG9BcnJheSA9IHJldHJpZXZlRGF0YSgpO1xyXG4gICAgY29uc3QgdG9kbyA9IG5ld1RvZG9BcnJheS5maW5kKCh4KSA9PiB4LmluZGV4LnRvU3RyaW5nKCkgPT09IGluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXHJcbiAgICAgIHRvZG8uZGVzY3JpcHRpb24sXHJcbiAgICAgIHRvZG8uY29tcGxldGVkLFxyXG4gICAgICB0b2RvLmluZGV4LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHRlc3RBcnJheSA9IHJldHJpZXZlRGF0YSgpO1xyXG4gICAgdGVzdEFycmF5LnB1c2gobmV3VG9kbyk7XHJcbiAgICByZXR1cm4gc3RvcmVEYXRhKHRlc3RBcnJheSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICBuZXdUb2RvQXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcclxuICAgIG5ld1RvZG9BcnJheSA9IG5ld1RvZG9BcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5kZXggIT09IHRvZG8uaW5kZXgpO1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgICB0b2RvLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0b2RvLmNvbXBsZXRlZCxcclxuICAgICAgdG9kby5pbmRleCxcclxuICAgICk7XHJcbiAgICBuZXdUb2RvQXJyYXkucHVzaChuZXdUb2RvKTtcclxuICAgIHN0b3JlRGF0YShuZXdUb2RvQXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcclxuICAgIG5ld1RvZG9BcnJheSA9IHJldHJpZXZlRGF0YSgpO1xyXG4gICAgbmV3VG9kb0FycmF5ID0gbmV3VG9kb0FycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5pbmRleC50b1N0cmluZygpICE9PSBpbmRleC50b1N0cmluZygpKTtcclxuICAgIGNvbnN0IHJlSW5kZXhlZEFycmF5ID0gW107XHJcbiAgICBuZXdUb2RvQXJyYXkuc29ydCgoeCwgeSkgPT4geC5pbmRleCAtIHkuaW5kZXgpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJlSW5kZXhlZEFycmF5LnB1c2gobmV3IFRvZG8oZWxlbWVudC5kZXNjcmlwdGlvbiwgZWxlbWVudC5jb21wbGV0ZWQsIGluZGV4ICsgMSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RvcmVEYXRhKHJlSW5kZXhlZEFycmF5KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlRWRpdEZvcm1FbGVtZW50IGZyb20gJy4vZWRpdFRvZG8uanMnO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuLi8uLi9pbWFnZXMvZWRpdC1JY29uLnN2Zyc7XHJcbmltcG9ydCBjcmVhdGVDaGVja2JveCBmcm9tICcuL25ld0NoZWNrYm94LmpzJztcclxuXHJcbmNvbnN0IHVwZGF0ZVRvZG9IYW5kbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQtdG9kby1pbnB1dCcpWzBdO1xyXG4gIGNvbnN0IGZvcm1FbGVtZW50ID0gaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCBpbmRleFRvZG8gPSBmb3JtRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgY29uc3QgdG9kbyA9IFRvZG8uZ2V0VG9kbyhpbmRleFRvZG8pO1xyXG4gIHRvZG8uZGVzY3JpcHRpb24gPSBpbnB1dEVsZW1lbnQudmFsdWU7XHJcbiAgVG9kby51cGRhdGVUb2RvKHRvZG8pO1xyXG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBkaXNwbGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBlZGl0SWNvbi5zcmMgPSBFZGl0O1xyXG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xyXG4gIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGluZGV4VG9kbyA9IGRpc3BsYXlFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGNvbnN0IGVkaXRFbGVtZW50ID0gY3JlYXRlRWRpdEZvcm1FbGVtZW50KGluZGV4VG9kbyk7XHJcbiAgICAvLyBlZGl0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB1cGRhdGVUb2RvSGFuZGxlcik7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRpc3BsYXlFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0b2RvTGlzdC5yZXBsYWNlQ2hpbGQoZWRpdEVsZW1lbnQsIGRpc3BsYXlFbGVtZW50KTtcclxuICB9KTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVDaGVja2JveCh0b2RvLmNvbXBsZXRlZCk7XHJcbiAgaWYgKHRvZG8uY29tcGxldGVkKSB7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGlzcGxheUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgfVxyXG4gIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcclxuICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgZGlzcGxheUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xyXG4gIGZvcm1FbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKGRpc3BsYXlFbGVtZW50LCBmb3JtRWxlbWVudCk7XHJcbiAgcmV0dXJuIGRpc3BsYXlFbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVG9kb0hhbmRsZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9