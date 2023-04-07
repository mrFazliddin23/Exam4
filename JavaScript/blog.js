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
    if(firstName == '' || lastName == '' || addTime == '' || title == '' || text == ''){
        alert('Warning: you must fill in the inputs and submit');
    }
    else{
        resultDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${addTime}</p>
        <span>${firstName}</span>
        <p>${lastName}</p>
        <p>${text}</p>
        `;
    }

    result.appendChild(resultDiv);
    form.reset();

});