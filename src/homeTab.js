import { createElement } from './utils.js';

export default () => {
    const homeTab = () => {
        const homeTab = createElement('div', ['flex', 'flex-col', 'bg-black/50', 'w-1/2', 'mx-auto'], '', 'homeTab');
        const homeHeadline = createElement('h1', ['text-3xl', 'font-semibold', 'text-white', 'p-6', 'text-center', 'w-max', 'flex', 'mx-auto'], 'Restaurant de la Victoire');
        homeTab.appendChild(homeHeadline);

        const homeSubtext = createElement('p', ['text-lg', 'text-white', 'text-center', 'w-max', 'flex', 'mx-auto'], 'Best restaurant from here to Mars and back');
        homeTab.appendChild(homeSubtext);

        const homeOpeningHours = createElement('div', ['p-6', 'text-2xl', 'font-semibold', 'text-white', 'text-center'],'Opening Hours','openingHours')
        const openingHours = {
            'Sunday': '6AM - 10PM',
            'Monday': '6AM - 6PM',
            'Tuesday': 'Closed',
            'Wednesday': '6AM - 6PM',
            'Thursday': '6AM - 6PM',
            'Friday': '6AM - 6PM',
            'Saturday': '6AM - 11PM',
        }
        for (const day in openingHours) {
            const hoursForTheDay = createElement('p', ['text-base', 'text-white', 'font-normal'], `${day}: ${openingHours[day]}`);
            homeOpeningHours.appendChild(hoursForTheDay);
        }
        homeTab.appendChild(homeOpeningHours);

        const homeAddress = createElement('div', ['p-6', 'text-2xl', 'font-semibold', 'text-white', 'text-center'],'Address','address')
        const address = createElement('p', ['text-base', 'text-white', 'font-normal'], '12 Gentle Rain Dr., Marana, AZ');
        homeAddress.appendChild(address);
        homeTab.appendChild(homeAddress);

        const tabContentDiv = document.getElementById('tabContent');
        tabContentDiv.appendChild(homeTab);
    }

    homeTab();
}