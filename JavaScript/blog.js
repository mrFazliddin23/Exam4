const form = document.querySelector('.form');
const firstNameInput = document.querySelector('.firstName');
const lastNameInput = document.querySelector('.lastName');
const addTimeInput = document.querySelector('.addTime');
const titleTextArea = document.querySelector('.title');
const textTextArea = document.querySelector('.text');
const button = document.querySelector('.sectionBlog-btn');
const result = document.querySelector('.result');

button.addEventListener("click", (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const addTime = addTimeInput.value;
    const title = titleTextArea.value;
    const text = textTextArea.value;

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `
    <span>$ First Name: {firstName}</span>
    <p>$ Last Name: {lastName}</p>
    <p>$ Add time: {addTime}</p>
    <h3>$ Title: {title}</h3>
    <p>$ Text: {text}</p>
    `;

    result.appendChild(resultDiv);
    form.reset();

});