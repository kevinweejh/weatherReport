import { createElement, appendMultipleChildren } from "./utils";

export default (weatherInfo) => {
    const [temp_c, temp_f, condition] = weatherInfo;

    const weatherReport = createElement('dialog', ['border', 'border-gray-500', 'rounded-2xl', 'p-5', 'w-96', 'm-auto'], '', 'weatherReport');
    const formReport = createElement(
        "form",
        ['text-lg', 'font-bold', 'mb-5', 'flex', 'flex-col', 'text-center'],
        "Weather Report"
      );
    formReport.setAttribute('method', 'dialog');

    const temp = createElement('p', ['text-base', 'font-normal', 'my-5'], `Temperature: ${temp_c}°C`);
    const cond = createElement('p', ['text-base', 'font-normal', 'my-5'], `Condition:   ${condition}`);

    const celsiusBtn = createElement('input', ['m-2', 'z-10'], '°C');
    celsiusBtn.setAttribute('name', 'unitOption');
    celsiusBtn.setAttribute('value', '°C');
    celsiusBtn.setAttribute('type', 'radio');
    celsiusBtn.setAttribute('checked', '');

    const fahrenheitBtn = createElement('input', ['m-2', 'z-10'], '°F');
    fahrenheitBtn.setAttribute('name', 'unitOption');
    fahrenheitBtn.setAttribute('value', '°F');
    fahrenheitBtn.setAttribute('type', 'radio');

    const closeBtn = createElement('btn', ['w-full', 'p-2.5', 'my-2.5', 'border', 'rounded-2xl', 'text-white', 'bg-blue-600', 'hover:bg-blue-500', 'hover:text-gray-200', 'cursor-pointer'], 'Done');
    closeBtn.addEventListener('click', () => weatherReport.close());
    
    const btnDiv = createElement('div', ['flex', 'justify-center', 'relative'], '');
    const btnLabels = createElement('pre', ['text-center', 'absolute', 'whitespace-pre', 'font-sans'], '°C              °F');

    appendMultipleChildren(btnDiv, celsiusBtn, fahrenheitBtn, btnLabels);
    appendMultipleChildren(formReport, temp, btnDiv, cond, closeBtn)
    weatherReport.appendChild(formReport);  
    const container = document.querySelector("body");
    container.appendChild(weatherReport);

    const radioButtons = document.querySelectorAll('input[name="unitOption"]');
    
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.value == '°C') {
                temp.innerText = `Temperature: ${temp_c} ${radio.value}`;
            }
            if (radio.value == '°F') {
                temp.innerText = `Temperature: ${temp_f} ${radio.value}`;
            }
        })
    })
    
    weatherReport.showModal();
}