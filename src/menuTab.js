import { createElement } from './utils.js';

export default () => {
    const menuTab = () => {
        const menuTab = createElement('div', ['flex', 'flex-col', 'w-1/2', 'text-center', 'mx-auto'], '', 'menuTab');
        const menuSections = ['Starters', 'Mains', 'Desserts', 'Beverages'];
        menuSections.forEach((section) => {
            const sectionDiv = createElement('div', ['bg-black/50', 'my-6', 'text-white', 'font-semibold', 'p-3', 'text-2xl'], section, section);
            menuTab.appendChild(sectionDiv);
        })

        const tabContentDiv = document.getElementById('tabContent');
        tabContentDiv.appendChild(menuTab);
        // menuTab must be inserted into the DOM before menu items can be inserted
        // Reason is that menuItemDiv's are inserted into the respective menuSections

        const menuItems = [
            {
                'name': 'A Good Cake', 
                'section': 'Desserts',
                'price': 6.90,
            },
            {
                'name': 'The Goodest Cake', 
                'section': 'Desserts',
                'price': 26.90,
            },
            {
                'name': 'Great Pasta', 
                'section': 'Mains',
                'price': 6.90,
            },
            {
                'name': 'The Maddest Pasta on Neptune', 
                'section': 'Mains',
                'price': 26.90,
            },
            {
                'name': 'So-so Coffee', 
                'section': 'Beverages',
                'price': 6.90,
            },
            {
                'name': 'The - wow that was good - coffee', 
                'section': 'Beverages',
                'price': 26.90,
            },
            {
                'name': 'Soggy Fries', 
                'section': 'Starters',
                'price': 6.90,
            },
            {
                'name': 'Rock Hard Fries', 
                'section': 'Starters',
                'price': 26.90,
            },
        ];

        menuItems.forEach((item) => {
            const menuItemName = createElement('p', ['text-white', 'text-base'], `${item.name}`);
            const menuItemPrice = createElement('p', ['text-white', 'font-normal', 'text-base'], `Price: ${item.price}`);
            const menuItemDiv = createElement('div', ['m-3'], '');
            menuItemDiv.appendChild(menuItemName);
            menuItemDiv.appendChild(menuItemPrice);
            const menuSection = document.getElementById(item.section);
            menuSection.appendChild(menuItemDiv);
        })
    }

    menuTab();
}