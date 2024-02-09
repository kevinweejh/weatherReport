import { createElement, appendMultipleChildren } from "./utils";
import AddCountryList from './addCountryList';
import CheckWeather from './checkWeather';

export default () => {
  const container = document.querySelector("body");

  const dialog = createElement(
    "dialog",
    ['border', 'border-gray-500', 'rounded-2xl', 'p-5', 'w-96', 'm-auto'],
    "", 'dialogBox'
  );

  const form = createElement(
    "form",
    ['text-lg', 'font-bold', 'mb-5', 'flex', 'flex-col', 'text-center'],
    "Location Selector", 'formElement'
  );
  form.setAttribute('method', 'dialog');

  const countrySelector = createElement(
    "select", 
    ['w-full', 'p-2.5', 'mb-2.5', 'border', 'rounded', 'border-blue-200'],
    "", 'countrySelector'
  )
  const countryPlaceholder = createElement(
    "option",
    [],
    "Select country"
  )
  countryPlaceholder.setAttribute("value", "");
  countryPlaceholder.setAttribute("disabled", "");
  countryPlaceholder.setAttribute("selected", "");
  countrySelector.appendChild(countryPlaceholder);
  
  const citySelector = createElement(
    "select", 
    ['w-full', 'p-2.5', 'mb-2.5', 'border', 'rounded', 'border-blue-200'],
    "", 'citySelector'
  )
  const cityPlaceholder = createElement(
    "option",
    [],
    "Select City"
  )
  cityPlaceholder.setAttribute("value", "");
  cityPlaceholder.setAttribute("disabled", "");
  cityPlaceholder.setAttribute("selected", "");
  citySelector.appendChild(cityPlaceholder);

  const submitBtn = createElement(
    "btn", 
    ['w-full', 'p-2.5', 'my-2.5', 'border', 'rounded-2xl', 'text-white', 'bg-blue-200', 'hover:bg-white', 'hover:text-blue-200', 'cursor-pointer'],
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