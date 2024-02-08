export default () => {
    const createTabContent = () => {
        const tabContentDiv = document.createElement('div');
        tabContentDiv.classList.add('w-2/3', 'mx-auto');
        tabContentDiv.id = 'tabContent';
        
        const container = document.getElementById('content');
        container.appendChild(tabContentDiv);

        
    }

    createTabContent();

    return {
        tabContentDiv: document.getElementById('tabContent')
    }
}