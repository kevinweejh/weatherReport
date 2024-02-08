import { createElement } from './utils.js';

export default () => {
    const contactTab = () => {
        const contactTab = createElement('div', ['flex', 'flex-col', 'my-6'], '', 'contactTab');

        const contacts = [
            {
                'name': 'Steve-O',
                'title': 'Chef Extraordinaire',
                'e-mail': 'steve-o@restaurant.dlv',
            }, 
            {
                'name': 'Mary-O',
                'title': 'Managerial Expertise Personified',
                'e-mail': 'mary-o@restaurant.dlv',
            }, 
            {
                'name': 'Jimb-O',
                'title': 'The Waiter that Waits',
                'e-mail': 'jimb-o@restaurant.dlv',
            }
        ]

        contacts.forEach((contact) => {
            const contactItem = createElement('div', ['w-1/2', 'bg-black/50', 'text-white', 'mx-auto', 'text-center', 'font-semibold', 'm-3', 'p-3', 'text-2xl'], contact.name);
            const contactTitle = createElement('p', ['font-normal', 'text-base', 'italic'], contact.title);
            const contactEmail = createElement('p', ['font-normal', 'text-base'], contact['e-mail']);
            contactEmail.innerHTML = `<a href="mailto:${contact['e-mail']}">${contact['e-mail']}</a>`;
            contactItem.appendChild(contactTitle);
            contactItem.appendChild(contactEmail);
            contactTab.appendChild(contactItem);
        })

        const tabContentDiv = document.getElementById('tabContent');
        tabContentDiv.appendChild(contactTab);
    }

    contactTab();
}