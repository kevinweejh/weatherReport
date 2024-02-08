export const createElement = (element, classList, content, id=null) => {
    const newElement = document.createElement(element);
    newElement.classList.add(...classList);
    newElement.innerText = content;
    if (id) {newElement.id = id}; // Add id if provided
    return newElement;
}