import './style.css';

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
