/* eslint-disable */ 
class Todo {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static getTodoa(index) {
    const todos = retrieveData();
    return todos.find(todo => todo.index === parseInt(index));
  }
}

describe('Todo', () => {
  it('should create a Todo object with the specified properties', () => {
    const description = 'Finish project report';
    const todo = new Todo(description, false, 1);
    expect(todo).toHaveProperty('description', description);
    expect(todo).toHaveProperty('completed', false);
    expect(todo).toHaveProperty('index', 1);
  });
});

describe('Todo.getTodo', () => {
  it('should retrieve a todo by index', () => {
    const activities = [
      { description: 'Test task 1', completed: false, index: 1 },
      { description: 'Test task 2', completed: true, index: 2 },
      { description: 'Test task 3', completed: true, index: 3 },
      { description: 'Test task 4', completed: false, index: 4 },
    ];
    jest.spyOn(window, 'retrieveData').mockReturnValue(activities);
    const activity = Todo.getTodo(2);
    expect(activity).toHaveProperty('description', 'Test task 2');
    expect(activity).toHaveProperty('completed', true);
    expect(activity).toHaveProperty('index', 2);
  });
});

describe('Todo', () => {
  let activities;
  beforeEach(() => {
    activities = [      { description: 'Test task 1', completed: false, index: 1 },      { description: 'Test task 2', completed: true, index: 2 },      { description: 'Test task 3', completed: true, index: 3 },      { description: 'Test task 4', completed: false, index: 4 },    ];
  });

  it('gets a todo activity', () => {
    const activity = Todo.getTodo(2);
    expect(activity).toEqual({ description: 'Test task 2', completed: true, index: 2 });
  });

  it('adds a new todo activity', () => {
    const newActivity = { description: 'Test task 5', completed: false, index: 5 };
    Todo.addTodo(newActivity);
    expect(activities.length).toBe(5);
    expect(activities[4]).toEqual(newActivity);
  });

  it('deletes a todo activity', () => {
    Todo.deleteTodo(2);
    expect(activities.length).toBe(3);
    expect(activities[1]).toEqual({ description: 'Test task 3', completed: true, index: 3 });
  });

  it('toggles the completed status of a todo', () => {
    const activity = Todo.getTodo(2);
    Todo.toggleTodo(activity);
    expect(activity.completed).toBe(false);
  });
});

describe('createTaskDescription', () => {
  it('creates an input element with the specified properties', () => {
    const description = 'Finish project report';
    const result = createTaskDescription(description);
    expect(result).toBeInstanceOf(HTMLInputElement);
    expect(result.getAttribute('type')).toBe('text');
    expect(result.getAttribute('name')).toBe('edit-todo');
  });
});

describe('checkboxStatus', () => {
  it('should toggle the completed status of a todo', () => {
    const e = {
      target: {
        parentElement: {
          parentElement: {
            getAttribute: jest.fn().mockReturnValue(2),
            classList: {
              add: jest.fn(),
              remove: jest.fn(),
            },
          },
        },
      },
    };
    const displayElement = e.target.parentElement.parentElement;
    const activityIndex = displayElement.getAttribute('id');
    const activity = Todo.getTodo(activityIndex);
    activity.completed = !activity.completed;
    if (activity.completed) {
      displayElement.classList.add('completed');
    } else {
      displayElement.classList.remove('completed');
    }
    expect(activity.completed).toBe(true);
    expect(displayElement.classList.add).toHaveBeenCalledWith('completed');
  });
});
