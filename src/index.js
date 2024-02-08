import './style.css';
import InitialPageLoad from './initialPageLoad.js';
import TabBar from './tabBar.js';
import TabContent from './tabContent.js';
import HomeTab from './homeTab.js';
import MenuTab from './menuTab.js';
import ContactTab from './contactTab.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

InitialPageLoad();

TabBar();

const { tabContentDiv } = TabContent();
HomeTab();

const tabSwitching = () => {
    const tabBtns = document.querySelectorAll('[id$="Btn"]');
    const btnMapping = {
        'homeTabBtn': HomeTab,
        'menuTabBtn': MenuTab,
        'contactTabBtn': ContactTab,
    }

    tabBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            tabContentDiv.innerHTML = '';

            const moduleFunction = btnMapping[btn.id];
            if (moduleFunction) {
                moduleFunction();
            } else {
                console.error('No matching module function found for button:' , btn.id);
            }
        })
    })
}

tabSwitching();