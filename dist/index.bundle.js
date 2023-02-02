"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const taskList = document.getElementById('list');

const listArr = [
  {
    task: 'Complete to do list activity',
    completed: true,
    index: 5,
  },
  {
    task: 'Do some freelance',
    completed: false,
    index: 2,
  },
  {
    task: 'Attend the stand-up meeting',
    completed: false,
    index: 3,
  },
];

const desplayToPage = (activity) => {
  const element = document.createElement('li');
  element.setAttribute('id', activity.index);
  element.innerHTML = `
  <input type="checkbox" class = "checkbox" ${activity.completed ? 'checked' : ''}/>
  <article>${activity.task}</article>`;
  taskList.appendChild(element);
};

const loadElements = () => {
  listArr.sort((x, y) => x.index - y.index)
    .forEach((activity) => {
      desplayToPage(activity);
    });
};

window.onload = () => {
  loadElements();
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFCOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG9DQUFvQztBQUNsRixhQUFhLGNBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG5cbmNvbnN0IGxpc3RBcnIgPSBbXG4gIHtcbiAgICB0YXNrOiAnQ29tcGxldGUgdG8gZG8gbGlzdCBhY3Rpdml0eScsXG4gICAgY29tcGxldGVkOiB0cnVlLFxuICAgIGluZGV4OiA1LFxuICB9LFxuICB7XG4gICAgdGFzazogJ0RvIHNvbWUgZnJlZWxhbmNlJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiAyLFxuICB9LFxuICB7XG4gICAgdGFzazogJ0F0dGVuZCB0aGUgc3RhbmQtdXAgbWVldGluZycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogMyxcbiAgfSxcbl07XG5cbmNvbnN0IGRlc3BsYXlUb1BhZ2UgPSAoYWN0aXZpdHkpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGFjdGl2aXR5LmluZGV4KTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcyA9IFwiY2hlY2tib3hcIiAke2FjdGl2aXR5LmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfS8+XG4gIDxhcnRpY2xlPiR7YWN0aXZpdHkudGFza308L2FydGljbGU+YDtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59O1xuXG5jb25zdCBsb2FkRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxpc3RBcnIuc29ydCgoeCwgeSkgPT4geC5pbmRleCAtIHkuaW5kZXgpXG4gICAgLmZvckVhY2goKGFjdGl2aXR5KSA9PiB7XG4gICAgICBkZXNwbGF5VG9QYWdlKGFjdGl2aXR5KTtcbiAgICB9KTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGxvYWRFbGVtZW50cygpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==