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
/* harmony import */ var _modules_displayList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displayList.js */ "./src/modules/displayList.js");
/* harmony import */ var _modules_clearcompleted_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearcompleted.js */ "./src/modules/clearcompleted.js");
/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _modules_addToList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/addToList.js */ "./src/modules/addToList.js");
/* harmony import */ var _modules_updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/updateTodoHandler.js */ "./src/modules/updateTodoHandler.js");











const loadElements = () => {
  let taskArray = [];
  taskArray = (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.retrieveData)();
  taskArray
    .sort((x, y) => x.index - y.index)
    .forEach((todo) => {
      const taskElement = (0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_5__["default"])(todo);
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
    if (_modules_addToList_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.elements["add-task"].value) {
      const todosArray = (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.retrieveData)();
      const newTodo = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        _modules_addToList_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.elements["add-task"].value,
        false,
        todosArray.length + 1,
      );
      _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodo(newTodo);
      const todoElement = (0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_5__["default"])(newTodo);
      (0,_modules_changeDom_js__WEBPACK_IMPORTED_MODULE_4__.appendToDOM)(todoElement);
      _modules_addToList_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.reset();
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
  clearAllCompletedLink.addEventListener('click', _modules_clearcompleted_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  paragraph.appendChild(clearAllCompletedLink);
};
window.onload = () => {
  loadElements();
  loadRefreshIcon();
  loadEnterIcon();
  loadAfterAllCleared();
  _modules_addToList_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.addEventListener('submit', _modules_addToList_js__WEBPACK_IMPORTED_MODULE_8__.addTodoFormHandler);
};


/***/ }),

/***/ "./src/modules/addCheckbox.js":
/*!************************************!*\
  !*** ./src/modules/addCheckbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./src/modules/checkbox.js");


const createCheckbox = (status) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  if (status) {
    checkbox.checked = true;
  }
  checkbox.addEventListener('change', _checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return checkbox;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCheckbox);


/***/ }),

/***/ "./src/modules/addToList.js":
/*!**********************************!*\
  !*** ./src/modules/addToList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoForm": () => (/* binding */ addTodoForm),
/* harmony export */   "addTodoFormHandler": () => (/* binding */ addTodoFormHandler)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _changeDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeDom.js */ "./src/modules/changeDom.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayList.js */ "./src/modules/displayList.js");





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
  const todoElement = (0,_displayList_js__WEBPACK_IMPORTED_MODULE_3__["default"])(newTodo);
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

/***/ "./src/modules/checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/checkbox.js ***!
  \*********************************/
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

/***/ "./src/modules/clearcompleted.js":
/*!***************************************!*\
  !*** ./src/modules/clearcompleted.js ***!
  \***************************************/
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

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
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

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/edit-Icon.svg */ "./images/edit-Icon.svg");
/* harmony import */ var _updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTodoHandler.js */ "./src/modules/updateTodoHandler.js");
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodo.js */ "./src/modules/editTodo.js");
/* harmony import */ var _addCheckbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addCheckbox.js */ "./src/modules/addCheckbox.js");





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
  const checkboxElement = (0,_addCheckbox_js__WEBPACK_IMPORTED_MODULE_3__["default"])(todo.completed);
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
/* harmony import */ var _addCheckbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCheckbox.js */ "./src/modules/addCheckbox.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete.js */ "./src/modules/delete.js");





const createTaskDescripion = (description) => {
  const activityDescription = document.createElement('input');
  activityDescription.setAttribute('type', 'text');
  activityDescription.setAttribute('name', 'edit-todo');
  activityDescription.setAttribute('class', 'edit-todo-input');
  activityDescription.setAttribute('value', description);
  return activityDescription;
};

const createDeleteElement = () => {
  const deleteElement = new Image();
  deleteElement.src = _images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1__;
  deleteElement.setAttribute('class', 'icon');
  deleteElement.addEventListener('click', _delete_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return deleteElement;
};

const createEditElement = (indexTodo) => {
  const todo = _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodo(indexTodo);
  const formElement = document.createElement('form');
  formElement.setAttribute('class', 'edit-todo-form');
  formElement.setAttribute('id', indexTodo);
  formElement.setAttribute('action', '#');
  formElement.setAttribute('method', 'patch');
  formElement.setAttribute('type', 'submit');
  const label = document.createElement('label');
  label.setAttribute('for', 'edit-todo');
  label.setAttribute('id', 'edit-todo-label');
  const checkbox = (0,_addCheckbox_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todo.completed);
  if (todo.completed) {
    formElement.classList.add('completed');
  } else {
    formElement.classList.remove('completed');
  }
  label.appendChild(checkbox);
  const description = createTaskDescripion(todo.description);
  label.appendChild(description);
  const deleteElement = createDeleteElement();
  formElement.appendChild(label);
  formElement.appendChild(deleteElement);
  return formElement;
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


let newListArray = [];

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static getTodo = (index) => {
    newListArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
    const todo = newListArray.find((x) => x.index.toString() === index.toString());
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
    newListArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
    newListArray = newListArray.filter((element) => element.index !== todo.index);
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    newListArray.push(newTodo);
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(newListArray);
  }

  static removeTodo = (index) => {
    newListArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();
    newListArray = newListArray.filter((element) => element.index.toString() !== index.toString());
    const reIndexedArray = [];
    newListArray.sort((x, y) => x.index - y.index).forEach((element, index) => {
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
/* harmony import */ var _addCheckbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addCheckbox.js */ "./src/modules/addCheckbox.js");





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
  const checkbox = (0,_addCheckbox_js__WEBPACK_IMPORTED_MODULE_3__["default"])(todo.completed);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLGtEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsMkRBQWM7QUFDakM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYWRkQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZFRvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2hhbmdlRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xlYXJjb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2VkaXRUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VwZGF0ZVRvZG9IYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlZnJlc2ggZnJvbSAnLi9yb3RhdGUuc3ZnJztcbmltcG9ydCBFbnRlciBmcm9tICcuL2VudGVyLnBuZyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL21vZHVsZXMvdG9kby5qcyc7XG5pbXBvcnQgeyBhcHBlbmRUb0RPTSB9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VEb20uanMnO1xuaW1wb3J0IGNyZWF0ZURpc3BsYXlFbGVtZW50IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TGlzdC5qcyc7XG5pbXBvcnQgY2xlYXJBbGxDb21wbGV0ZWRIYW5kbGVyIGZyb20gJy4vbW9kdWxlcy9jbGVhcmNvbXBsZXRlZC5qcyc7XG5pbXBvcnQgeyByZXRyaWV2ZURhdGEgfSBmcm9tICcuL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7IGFkZFRvZG9Gb3JtLCBhZGRUb2RvRm9ybUhhbmRsZXIgfSBmcm9tICcuL21vZHVsZXMvYWRkVG9MaXN0LmpzJztcbmltcG9ydCB1cGRhdGVUb2RvSGFuZGxlciBmcm9tICcuL21vZHVsZXMvdXBkYXRlVG9kb0hhbmRsZXIuanMnO1xuXG5jb25zdCBsb2FkRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgdGFza0FycmF5ID0gcmV0cmlldmVEYXRhKCk7XG4gIHRhc2tBcnJheVxuICAgIC5zb3J0KCh4LCB5KSA9PiB4LmluZGV4IC0geS5pbmRleClcbiAgICAuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVEaXNwbGF5RWxlbWVudCh0b2RvKTtcbiAgICAgIGFwcGVuZFRvRE9NKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvYWRSZWZyZXNoSWNvbiA9ICgpID0+IHtcbiAgY29uc3QgcmVmcmVzaEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdF9yZWZyZXNoJyk7XG4gIHJlZnJlc2hJY29uLnNyYyA9IFJlZnJlc2g7XG4gIHJlZnJlc2hJY29uLmFsdCA9ICdyZWZyZXNoJztcbiAgcmVmcmVzaEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXItaWNvbicpO1xuICByZWZyZXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZEVudGVySWNvbiA9ICgpID0+IHtcbiAgY29uc3QgZW50ZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyX25ld3RvZG8nKTtcbiAgZW50ZXJJY29uLnNyYyA9IEVudGVyO1xuICBlbnRlckljb24uYWx0ID0gJ2VudGVyJztcbiAgZW50ZXJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAvLyBhZGQgZXZlbnRsaXN0bmVyIGZvciBlbnRlciBrZXlcbiAgZW50ZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGlmIHRvZG8gaXMgd3JpdHRlbiBvciBhZGQgdG8geW91ciBsaXN0IGZpZWxkIGlzIG5vdCBlbXBpdHlcbiAgICBpZiAoYWRkVG9kb0Zvcm0uZWxlbWVudHNbJ2FkZC10YXNrJ10udmFsdWUpIHtcbiAgICAgIGNvbnN0IHRvZG9zQXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgYWRkVG9kb0Zvcm0uZWxlbWVudHNbJ2FkZC10YXNrJ10udmFsdWUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB0b2Rvc0FycmF5Lmxlbmd0aCArIDEsXG4gICAgICApO1xuICAgICAgVG9kby5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBjcmVhdGVEaXNwbGF5RWxlbWVudChuZXdUb2RvKTtcbiAgICAgIGFwcGVuZFRvRE9NKHRvZG9FbGVtZW50KTtcbiAgICAgIGFkZFRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXRvZG8taW5wdXQnKVswXSkgeyAvLyBpZiBhZGQgdG9kbyBpcyBlbXBpdHkgYW5kIGlmIHNvbWVvbmUgaXMgeW91c2luZyBwaG9uZSBhbmQgd2FudCB0byBlZGl0IGEgdGFza1xuICAgICAgdXBkYXRlVG9kb0hhbmRsZXIoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZEFmdGVyQWxsQ2xlYXJlZCA9ICgpID0+IHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXTtcbiAgY29uc3QgY2xlYXJBbGxDb21wbGV0ZWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjbGVhckFsbENvbXBsZXRlZExpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdjbGVhci1hbGwtY29tcGxldGVkJyk7XG4gIGNsZWFyQWxsQ29tcGxldGVkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLycpO1xuICBjbGVhckFsbENvbXBsZXRlZExpbmsuaW5uZXJUZXh0ID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xuICBjbGVhckFsbENvbXBsZXRlZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckFsbENvbXBsZXRlZEhhbmRsZXIpO1xuICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xlYXJBbGxDb21wbGV0ZWRMaW5rKTtcbn07XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBsb2FkRWxlbWVudHMoKTtcbiAgbG9hZFJlZnJlc2hJY29uKCk7XG4gIGxvYWRFbnRlckljb24oKTtcbiAgbG9hZEFmdGVyQWxsQ2xlYXJlZCgpO1xuICBhZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb2RvRm9ybUhhbmRsZXIpO1xufTtcbiIsImltcG9ydCBjaGVja2JveFN0YXR1cyBmcm9tICcuL2NoZWNrYm94LmpzJztcblxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoc3RhdHVzKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgaWYgKHN0YXR1cykge1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICB9XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrYm94U3RhdHVzKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2hlY2tib3g7XG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgYXBwZW5kVG9ET00gfSBmcm9tICcuL2NoYW5nZURvbS5qcyc7XG5pbXBvcnQgeyByZXRyaWV2ZURhdGEgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgZGVzcGxheUVsZW1lbnQgZnJvbSAnLi9kaXNwbGF5TGlzdC5qcyc7XG5cbmV4cG9ydCBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvZG9Gb3JtSGFuZGxlciA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdG9kb3NBcnJheSA9IHJldHJpZXZlRGF0YSgpO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgYWRkVG9kb0Zvcm0uZWxlbWVudHNbJ2FkZC10YXNrJ10udmFsdWUsXG4gICAgZmFsc2UsXG4gICAgdG9kb3NBcnJheS5sZW5ndGggKyAxLFxuICApO1xuICBUb2RvLmFkZFRvZG8obmV3VG9kbyk7XG4gIGNvbnN0IHRvZG9FbGVtZW50ID0gZGVzcGxheUVsZW1lbnQobmV3VG9kbyk7XG4gIGFwcGVuZFRvRE9NKHRvZG9FbGVtZW50KTtcbiAgYWRkVG9kb0Zvcm0ucmVzZXQoKTtcbn07XG4iLCJleHBvcnQgY29uc3QgYXBwZW5kVG9ET00gPSAodG9kb0VsZW1lbnQpID0+IHtcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKTtcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21ET00gPSAodG9kbykgPT4ge1xuICB0b2RvLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodG9kbyk7XG59O1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcblxuY29uc3QgY2hlY2tib3hTdGF0dXMgPSAoZSkgPT4ge1xuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdGFza0luZGV4ID0gZGlzcGxheUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICBjb25zdCB0YXNrID0gVG9kby5nZXRUb2RvKHRhc2tJbmRleCk7XG4gIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgfVxuICBUb2RvLnVwZGF0ZVRvZG8odGFzayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja2JveFN0YXR1cztcbiIsImltcG9ydCB7IHJldHJpZXZlRGF0YSwgc3RvcmVEYXRhIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcblxuY29uc3QgY2xlYXJBbGxDb21wbGV0ZWRIYW5kbGVyID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdGFza3MgPSByZXRyaWV2ZURhdGEoKTtcbiAgdGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNvbXBsZXRlZCkge1xuICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaW5kZXgudG9TdHJpbmcoKSAhPT0gZWxlbWVudC5pbmRleC50b1N0cmluZygpKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBJbmRleENoZW5nZWRBcnJheSA9IFtdO1xuICB0YXNrcy5zb3J0KCh4LCB5KSA9PiB4LmluZGV4IC0geS5pbmRleCkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBJbmRleENoZW5nZWRBcnJheS5wdXNoKG5ldyBUb2RvKGVsZW1lbnQuZGVzY3JpcHRpb24sIGVsZW1lbnQuY29tcGxldGVkLCBpbmRleCArIDEpKTtcbiAgfSk7XG4gIHN0b3JlRGF0YShJbmRleENoZW5nZWRBcnJheSk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyQWxsQ29tcGxldGVkSGFuZGxlcjtcbiIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5cbmNvbnN0IGRlbGV0RXZlbnRIYW5kbGVyID0gKGUpID0+IHtcbiAgY29uc3QgdG9kbyA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IGluZGV4VG9kbyA9IHRvZG8uZ2V0QXR0cmlidXRlKCdpZCcpO1xuICBUb2RvLnJlbW92ZVRvZG8oaW5kZXhUb2RvKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRFdmVudEhhbmRsZXI7XG4iLCJpbXBvcnQgRWRpdCBmcm9tICcuLi8uLi9pbWFnZXMvZWRpdC1JY29uLnN2Zyc7XG5pbXBvcnQgdXBkYXRlVG9kb0hhbmRsZXIgZnJvbSAnLi91cGRhdGVUb2RvSGFuZGxlci5qcyc7XG5pbXBvcnQgY3JlYXRlRWRpdEVsZW1lbnQgZnJvbSAnLi9lZGl0VG9kby5qcyc7XG5pbXBvcnQgY3JlYXRlQ2hlY2tib3ggZnJvbSAnLi9hZGRDaGVja2JveC5qcyc7XG5cbmNvbnN0IGVkaXRDbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IGluZGV4VG9kbyA9IGRpc3BsYXlFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgY29uc3QgZWRpdEVsZW1lbnQgPSBjcmVhdGVFZGl0RWxlbWVudChpbmRleFRvZG8pO1xuICBlZGl0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB1cGRhdGVUb2RvSGFuZGxlcik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZGlzcGxheUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgdGFza0xpc3QucmVwbGFjZUNoaWxkKGVkaXRFbGVtZW50LCBkaXNwbGF5RWxlbWVudCk7XG59O1xuXG5jb25zdCBjcmVhdGVFZGl0SWNvbiA9ICgpID0+IHtcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEljb24uc3JjID0gRWRpdDtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdENsaWNrSGFuZGxlcik7XG4gIHJldHVybiBlZGl0SWNvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZURpc3BsYXlFbGVtZW50ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBkaXNwbGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9kby5pbmRleCk7XG4gIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGNoZWNrYm94RWxlbWVudCA9IGNyZWF0ZUNoZWNrYm94KHRvZG8uY29tcGxldGVkKTtcbiAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgZGlzcGxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG4gIH1cbiAgbGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrYm94RWxlbWVudCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XG4gIGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuICBjb25zdCBtZW51RWxlbWVudCA9IGNyZWF0ZUVkaXRJY29uKCk7XG4gIGRpc3BsYXlFbGVtZW50LmFwcGVuZENoaWxkKG1lbnVFbGVtZW50KTtcbiAgcmV0dXJuIGRpc3BsYXlFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGxheUVsZW1lbnQ7XG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IERlbGV0ZSBmcm9tICcuLi8uLi9pbWFnZXMvZGVsZXQtSWNvbi5zdmcnO1xuaW1wb3J0IGNyZWF0ZUNoZWNrYm94IGZyb20gJy4vYWRkQ2hlY2tib3guanMnO1xuaW1wb3J0IGRlbGV0ZUV2ZW50SGFuZGxlciBmcm9tICcuL2RlbGV0ZS5qcyc7XG5cbmNvbnN0IGNyZWF0ZVRhc2tEZXNjcmlwaW9uID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IGFjdGl2aXR5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBhY3Rpdml0eURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGFjdGl2aXR5RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2VkaXQtdG9kbycpO1xuICBhY3Rpdml0eURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdC10b2RvLWlucHV0Jyk7XG4gIGFjdGl2aXR5RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIGFjdGl2aXR5RGVzY3JpcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVEZWxldGVFbGVtZW50ID0gKCkgPT4ge1xuICBjb25zdCBkZWxldGVFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gIGRlbGV0ZUVsZW1lbnQuc3JjID0gRGVsZXRlO1xuICBkZWxldGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICBkZWxldGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlRXZlbnRIYW5kbGVyKTtcbiAgcmV0dXJuIGRlbGV0ZUVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVFZGl0RWxlbWVudCA9IChpbmRleFRvZG8pID0+IHtcbiAgY29uc3QgdG9kbyA9IFRvZG8uZ2V0VG9kbyhpbmRleFRvZG8pO1xuICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LXRvZG8tZm9ybScpO1xuICBmb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5kZXhUb2RvKTtcbiAgZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICBmb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwYXRjaCcpO1xuICBmb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZWRpdC10b2RvJyk7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC10b2RvLWxhYmVsJyk7XG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3godG9kby5jb21wbGV0ZWQpO1xuICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICBmb3JtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgfVxuICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlVGFza0Rlc2NyaXBpb24odG9kby5kZXNjcmlwdGlvbik7XG4gIGxhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgY29uc3QgZGVsZXRlRWxlbWVudCA9IGNyZWF0ZURlbGV0ZUVsZW1lbnQoKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVFbGVtZW50KTtcbiAgcmV0dXJuIGZvcm1FbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdEVsZW1lbnQ7XG4iLCJjb25zdCBzdG9yYWdlQXZhaWxhYmxlID0gKHR5cGUpID0+IHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoZS5jb2RlID09PSAyMiB8fCBlLmNvZGUgPT09IDEwMTQgfHwgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmIHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICB9XG59O1xubGV0IGF2YWlsYWJsZVN0b3JhZ2U7XG5sZXQgdG9kb3MgPSBbXTtcbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICBhdmFpbGFibGVTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbn0gZWxzZSB7XG4gIGF2YWlsYWJsZVN0b3JhZ2UgPSBudWxsO1xufVxuZXhwb3J0IGNvbnN0IHJldHJpZXZlRGF0YSA9ICgpID0+IHtcbiAgaWYgKGF2YWlsYWJsZVN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkge1xuICAgIGNvbnN0IHRvZG9zRGF0YSA9IGF2YWlsYWJsZVN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICB0b2RvcyA9IEpTT04ucGFyc2UodG9kb3NEYXRhKTtcbiAgfVxuICByZXR1cm4gdG9kb3M7XG59O1xuZXhwb3J0IGNvbnN0IHN0b3JlRGF0YSA9ICh0b2Rvc0FycmF5KSA9PiB7XG4gIGlmIChhdmFpbGFibGVTdG9yYWdlKSB7XG4gICAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh0b2Rvc0FycmF5KTtcbiAgICBhdmFpbGFibGVTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywganNvbkRhdGEpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgc3RvcmVEYXRhLCByZXRyaWV2ZURhdGEgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5cbmxldCBuZXdMaXN0QXJyYXkgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgbmV3TGlzdEFycmF5ID0gcmV0cmlldmVEYXRhKCk7XG4gICAgY29uc3QgdG9kbyA9IG5ld0xpc3RBcnJheS5maW5kKCh4KSA9PiB4LmluZGV4LnRvU3RyaW5nKCkgPT09IGluZGV4LnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiB0b2RvO1xuICB9XG5cbiAgc3RhdGljIGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgIHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICB0b2RvLmNvbXBsZXRlZCxcbiAgICAgIHRvZG8uaW5kZXgsXG4gICAgKTtcbiAgICBjb25zdCB0ZXN0QXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcbiAgICB0ZXN0QXJyYXkucHVzaChuZXdUb2RvKTtcbiAgICByZXR1cm4gc3RvcmVEYXRhKHRlc3RBcnJheSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbmV3TGlzdEFycmF5ID0gcmV0cmlldmVEYXRhKCk7XG4gICAgbmV3TGlzdEFycmF5ID0gbmV3TGlzdEFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5pbmRleCAhPT0gdG9kby5pbmRleCk7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxuICAgICAgdG9kby5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG8uY29tcGxldGVkLFxuICAgICAgdG9kby5pbmRleCxcbiAgICApO1xuICAgIG5ld0xpc3RBcnJheS5wdXNoKG5ld1RvZG8pO1xuICAgIHN0b3JlRGF0YShuZXdMaXN0QXJyYXkpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICBuZXdMaXN0QXJyYXkgPSByZXRyaWV2ZURhdGEoKTtcbiAgICBuZXdMaXN0QXJyYXkgPSBuZXdMaXN0QXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmluZGV4LnRvU3RyaW5nKCkgIT09IGluZGV4LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHJlSW5kZXhlZEFycmF5ID0gW107XG4gICAgbmV3TGlzdEFycmF5LnNvcnQoKHgsIHkpID0+IHguaW5kZXggLSB5LmluZGV4KS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmVJbmRleGVkQXJyYXkucHVzaChuZXcgVG9kbyhlbGVtZW50LmRlc2NyaXB0aW9uLCBlbGVtZW50LmNvbXBsZXRlZCwgaW5kZXggKyAxKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0b3JlRGF0YShyZUluZGV4ZWRBcnJheSk7XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVFZGl0Rm9ybUVsZW1lbnQgZnJvbSAnLi9lZGl0VG9kby5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi4vLi4vaW1hZ2VzL2VkaXQtSWNvbi5zdmcnO1xuaW1wb3J0IGNyZWF0ZUNoZWNrYm94IGZyb20gJy4vYWRkQ2hlY2tib3guanMnO1xuXG5jb25zdCB1cGRhdGVUb2RvSGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdC10b2RvLWlucHV0JylbMF07XG4gIGNvbnN0IGZvcm1FbGVtZW50ID0gaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgaW5kZXhUb2RvID0gZm9ybUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICBjb25zdCB0b2RvID0gVG9kby5nZXRUb2RvKGluZGV4VG9kbyk7XG4gIHRvZG8uZGVzY3JpcHRpb24gPSBpbnB1dEVsZW1lbnQudmFsdWU7XG4gIFRvZG8udXBkYXRlVG9kbyh0b2RvKTtcbiAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBkaXNwbGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9kby5pbmRleCk7XG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLnNyYyA9IEVkaXQ7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGluZGV4VG9kbyA9IGRpc3BsYXlFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBlZGl0RWxlbWVudCA9IGNyZWF0ZUVkaXRGb3JtRWxlbWVudChpbmRleFRvZG8pO1xuICAgIC8vIGVkaXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHVwZGF0ZVRvZG9IYW5kbGVyKTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRpc3BsYXlFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgdG9kb0xpc3QucmVwbGFjZUNoaWxkKGVkaXRFbGVtZW50LCBkaXNwbGF5RWxlbWVudCk7XG4gIH0pO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3godG9kby5jb21wbGV0ZWQpO1xuICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgfVxuICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XG4gIGxhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gIGRpc3BsYXlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZGlzcGxheUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICBmb3JtRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChkaXNwbGF5RWxlbWVudCwgZm9ybUVsZW1lbnQpO1xuICByZXR1cm4gZGlzcGxheUVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVUb2RvSGFuZGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==