import { retrieveData, storeData } from './localStorage.js';
import Todo from './todo.js';

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

export default clearAllCompletedHandler;
