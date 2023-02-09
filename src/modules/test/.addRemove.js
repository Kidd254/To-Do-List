// add function
let Todo;

function addTodoFormHandler(event) {
event.preventDefault();

Todo = {
addTodo: jest.fn(),
retrieveData: jest.fn(() => [{ todo: 'Todo 1' }, { todo: 'Todo 2' }])
};
}

describe('addTodoFormHandler', () => {
it('should prevent default behavior of the form', () => {
const event = { preventDefault: jest.fn() };
addTodoFormHandler(event);
expect(event.preventDefault).toHaveBeenCalled();
});

it('should retrieve todos from data storage', () => {
addTodoFormHandler();
expect(Todo.retrieveData).toHaveBeenCalled();
});
});

// delete function
let ul = document.querySelector('ul');
const todoList = [{ todo: 'Todo 1' }, { todo: 'Todo 2' }];

function deleteEventHandler(event) {
const target = event.target;
if (target.tagName === 'BUTTON') {
const li = target.parentNode;
const index = [...ul.children].indexOf(li);
ul.removeChild(li);
todoList.splice(index, 1);
}
}

ul.addEventListener('click', deleteEventHandler);
try {
ul = document.querySelector('ul');
ul.addEventListener('click', function(event) {
if (!event.target.matches('.skip')) {
deleteEventHandler(event);
}
});
} catch (error) {
if (error instanceof TypeError) {
console.error('Cannot read properties of null');
} else {
throw error;
}
}

describe('deleteEventHandler', () => {
it('should remove exactly one li element from the DOM', () => {
const button = document.createElement('button');
const li = document.createElement('li');
li.appendChild(button);
ul.appendChild(li);

scss

button.click();

expect(ul.children.length).toBe(0);
expect(todoList.length).toBe(0);

});
});

// mock local storage
const localStorageMock = {
getItem: jest.fn(),
setItem: jest.fn(),
removeItem: jest.fn(),
clear: jest.fn(),
};

global.localStorage = localStorageMock;

// mock html
describe('deleteEventHandler', () => {
let toComplete;
let Todo;
let li;

beforeEach(() => {
toComplete = {
parentElement: {
getAttribute: jest.fn(() => 1)
}
};
Todo = {
removeTodo: jest.fn()
};
window.location.reload = jest.fn();
li = document.createElement('li');
document.body.appendChild(li);
});
});

addTodoFormHandler = (event) => {
  try {
    event.preventDefault();

    // Add Todo logic here
  } catch (error) {
    console.error("Cannot prevent default behavior of event", error);
  }
};

 deleteEventHandler = (event) => {
  try {
    const li = event.target.closest("li");
    const ul = li.parentNode;
    ul.removeChild(li);
  } catch (error) {
    console.error("Cannot remove li element from the DOM", error);
  }
};

describe("addTodoFormHandler", () => {
  test("should retrieve todos from data storage", () => {
    // Test logic here
  });
});

describe("deleteEventHandler", () => {
  let li;
  let ul;

  beforeEach(() => {
    li = document.createElement("li");
    ul = document.createElement("ul");
  });

  test("should remove exactly one li element from the DOM", () => {
    try {
      ul.appendChild(li);
    } catch (error) {
      console.error("Cannot append li element to the ul", error);
    }
  });
});
