import checkboxStatus from './checkbox.js';

const createCheckbox = (status) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  if (status) {
    checkbox.checked = true;
  }
  checkbox.addEventListener('change', checkboxStatus);
  return checkbox;
};

export default createCheckbox;
