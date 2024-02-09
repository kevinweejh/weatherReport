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
    ['w-full', 'p-2.5', 'my-2.5', 'border', 'rounded-2xl', 'text-white', 'bg-blue-600', 'hover:bg-blue-500', 'hover:text-gray-200', 'cursor-pointer'],
    "Submit",
    'submitBtn'
  )
  submitBtn.addEventListener('click', () => {
    CheckWeather(citySelector.value);
    dialog.close();
    dialog.dispatchEvent(new Event('formSubmit'));
  })

  appendMultipleChildren(form, countrySelector, citySelector, submitBtn);
  dialog.appendChild(form);
  container.appendChild(dialog);

  AddCountryList();
};