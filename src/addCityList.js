import { createElement } from "./utils";

export default (selectedCountry, dataList) => {
    const citySelector = document.querySelector('#citySelector');
    citySelector.removeAttribute('disabled');

    citySelector.innerHTML = '';

    const cities = dataList.find((item) => item.country === selectedCountry).cities;

    cities.forEach((city) => {
        const cityOption = createElement('option', [], city)
        cityOption.setAttribute('value', city);
        citySelector.appendChild(cityOption);
    })
}