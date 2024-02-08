import { createElement } from "./utils";
import AddCityList from './addCityList';

export default () => {
    const countrySelector = document.querySelector('#countrySelector');

    const getDataObj = async () => {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const dataObj = await response.json();
        const dataList = dataObj['data']
        return dataList;
    }

    getDataObj().then(
        (dataList) => {
            dataList.forEach((countryObj) => {
                const countryOption = createElement('option', [], countryObj["country"]);
                countryOption.setAttribute('value', countryObj["country"])
                countrySelector.appendChild(countryOption);
            })
            countrySelector.addEventListener('change', () => {
                const selectedCountry = countrySelector.value;
                AddCityList(selectedCountry, dataList);
            })
        }
    )
}