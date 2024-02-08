import { createElement, appendMultipleChildren } from "./utils";
import AddCountryList from './addCountryList';
import CheckWeather from './checkWeather';

export default () => {
  const container = document.querySelector("body");

  const dialog = createElement(
    "dialog",
    [],
    "", 'dialogBox'
  );

  const form = createElement(
    "form",
    [],
    "", 'formElement'
  );
  form.setAttribute('method', 'dialog');

  const countrySelector = createElement(
    "select", 
    [],
    "", 'countrySelector'
  )
  
  const citySelector = createElement(
    "select", 
    [],
    "", 'citySelector'
  )
  citySelector.setAttribute('disabled', '');

  const submitBtn = createElement(
    "btn", 
    [],
    "Submit",
    'submitBtn'
  )
  submitBtn.addEventListener('click', () => {
    CheckWeather(citySelector.value);
    dialog.close();
  })

  appendMultipleChildren(form, countrySelector, citySelector, submitBtn);
  dialog.appendChild(form);
  container.appendChild(dialog);

  AddCountryList();
};