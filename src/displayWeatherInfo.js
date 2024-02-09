import { createElement, appendMultipleChildren } from "./utils";

export default (weatherInfo) => {
    const [temp_c, temp_f, condition] = weatherInfo;

    const weatherReport = createElement('dialog', [], '', 'weatherReport');
    const temp = createElement('p', [], '');
    const cond = createElement('p', [], '');

    const celsiusBtn = createElement('input', [], '°C');
    celsiusBtn.setAttribute('name', 'unitOption');
    celsiusBtn.setAttribute('value', '°C');
    celsiusBtn.setAttribute('type', 'radio');

    const fahrenheitBtn = createElement('input', [], '°F');
    fahrenheitBtn.setAttribute('name', 'unitOption');
    fahrenheitBtn.setAttribute('value', '°F');
    fahrenheitBtn.setAttribute('type', 'radio');
    
    appendMultipleChildren(weatherReport, temp, celsiusBtn, fahrenheitBtn, cond); 
    const container = document.querySelector("body");
    container.appendChild(weatherReport);

    const radioButtons = document.querySelectorAll('input[name="unitOption"]');
    console.log(radioButtons);
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.value == '°C') {
                temp.innerText = `${temp_c} ${radio.value}`;
                cond.innerText = condition;
            }
            if (radio.value == '°F') {
                temp.innerText = `${temp_f} ${radio.value}`;
                cond.innerText = condition;
            }
        })
    })
    
    weatherReport.showModal();
}