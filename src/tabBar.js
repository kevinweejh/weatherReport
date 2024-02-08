export default () => {  
    const createTabButton = (btnText) => {
        const tabBtn = document.createElement('button');
        tabBtn.classList.add('text-2xl', 'text-white');
        tabBtn.innerText = btnText;
        tabBtn.id = btnText.toLowerCase() + 'TabBtn';
        return tabBtn;
    }

    const createAndAppendTabBtns = (tabBar, tabNames) => {
        tabNames.forEach((tabName) => {
            const tab = createTabButton(tabName);
            tabBar.appendChild(tab);
        });
    }

    const tabBar = document.createElement('div');
    tabBar.classList.add('grid', 'grid-cols-3', 'w-1/3', 'mx-auto', 'p-6');
    
    const tabNames = ['Home', 'Menu', 'Contact'];

    createAndAppendTabBtns(tabBar, tabNames);

    const container = document.getElementById('content');
    container.appendChild(tabBar);
}