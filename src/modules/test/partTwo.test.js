// function for editing task description
const createTaskDescripion = (description) => {
  const activityDescription = document.createElement('input');
  activityDescription.setAttribute('type', 'text');
  activityDescription.setAttribute('name', 'edit-todo');
  activityDescription.setAttribute('class', 'edit-todo-input');
  activityDescription.setAttribute('value', description);
  return activityDescription;
};

describe('createTaskDescription', () => {
  it('creates an input element with the specified properties', () => {
    const description = 'Finish project report';
    const result = createTaskDescription(description);
    expect(result).toBeInstanceOf(HTMLInputElement);
    expect(result.getAttribute('type')).toBe('text');
    expect(result.getAttribute('name')).toBe('edit-todo');
    expect(result.getAttribute('class')).toBe('edit-todo-input');
    expect(result.getAttribute('value')).toBe(description);
  });
});


//mark complete
const checkboxStatus = (e) => {
  const displayElement = e.target.parentElement.parentElement;
  const activityIndex = displayElement.getAttribute('id');
  const activity = Todo.getTodo(activityIndex);
  activity.completed = !activity.completed;
  if (activity.completed) {
    displayElement.classList.add('completed');
  } else {
    displayElement.classList.remove('completed');
  }
  Todo.updateTodo(activity);
};

describe('checkboxStatus', () => {
  it('should toggle the completed status of a todo', () => {
    const e = {
      target: {
        parentElement: {
          parentElement: {
            getAttribute: jest.fn(() => 1),
            classList: {
              add: jest.fn(),
              remove: jest.fn()
            }
          }
        }
      }
    };

    const Todo = {
      getTodo: jest.fn(() => ({ completed: false })),
      updateTodo: jest.fn()
    };

    checkboxStatus(e);
    expect(Todo.getTodo).toHaveBeenCalledWith(1);
    expect(Todo.updateTodo).toHaveBeenCalledWith({ completed: true });
    expect(e.target.parentElement.parentElement.classList.add).toHaveBeenCalledWith('completed');

    checkboxStatus(e);
    expect(Todo.getTodo).toHaveBeenCalledWith(1);
    expect(Todo.updateTodo).toHaveBeenCalledWith({ completed: false });
    expect(e.target.parentElement.parentElement.classList.remove).toHaveBeenCalledWith('completed');
  });
});

//clear
const clearAllCompletedHandler = (e) => {
  e.preventDefault();
  let activities = retrieveData();
  activities.forEach((element) => {
    if (element.completed) {
      activities = activities.filter((todo) => todo.index.toString() !== element.index.toString());
    }
  });
  const IndexChengedArray = [];
  activities.sort((x, y) => x.index - y.index).forEach((element, index) => {
    IndexChengedArray.push(new Todo(element.description, element.completed, index + 1));
  });
  storeData(IndexChengedArray);
  window.location.reload();
};

describe('clearAllCompletedHandler', () => {
  let activities;

  beforeEach(() => {
    activities = [      { description: 'Test task 1', completed: false, index: 1 },      { description: 'Test task 2', completed: true, index: 2 },      { description: 'Test task 3', completed: true, index: 3 },      { description: 'Test task 4', completed: false, index: 4 },    ];
    jest.spyOn(window, 'retrieveData').mockReturnValue(activities);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should remove all completed activities from the list and update the indices', () => {
    const e = { preventDefault: jest.fn() };
    clearAllCompletedHandler(e);
    expect(window.retrieveData).toHaveBeenCalled();
    expect(e.preventDefault).toHaveBeenCalled();
    expect(window.storeData).toHaveBeenCalledWith([
      { description: 'Test task 1', completed: false, index: 1 },
      { description: 'Test task 4', completed: false, index: 2 },
    ]);
  });

  it('should reload the page', () => {
    jest.spyOn(window, 'location', 'get').mockReturnValue({ reload: jest.fn() });
    clearAllCompletedHandler({ preventDefault: jest.fn() });
    expect(window.location.reload).toHaveBeenCalled();
  });
});
