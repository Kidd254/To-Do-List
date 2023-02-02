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
export const retrieveData = () => {
  if (availableStorage.getItem('todos')) {
    const todosData = availableStorage.getItem('todos');
    todos = JSON.parse(todosData);
  }
  return todos;
};
export const storeData = (todosArray) => {
  if (availableStorage) {
    const jsonData = JSON.stringify(todosArray);
    availableStorage.setItem('todos', jsonData);
  }
};
