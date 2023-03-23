const form = document.querySelector(".formLogin");
const userN = document.querySelector(".userName");
const password = document.querySelector(".password");
const button = document.querySelector(".loginBtn");

function ifError(input, message) {
    const formVal = input.parentElement;
    const span = formVal.querySelector(".errorMessage");
    formVal.className = "form-validation error";
    span.innerText = message;
}

function ifSuccess(input) {
    const formVal = input.parentElement;
    formVal.className = "form-validation success";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    check();
});

function check() {
    const nameU = userN.value.trim();
    const passwordValue = password.value.trim();

    if (nameU === "") {
        ifError(userN, "Please enter your User name");
    } else {
        ifSuccess(userN);
    }
    if (passwordValue === "") {
        ifError(password, "Password must be enter");
    } else {
        ifSuccess(password);
    }
    if (passwordValue.length < 8) {
        ifError(password, "Password must be at least 6 characters");
    }
    form.reset();
}