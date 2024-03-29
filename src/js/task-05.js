// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const userNameResult = document.querySelector('#name-output');
const userNameInput = document.querySelector('#name-input');

userNameInput.addEventListener('input',
    () => {
        if (userNameInput.value.trim() === "") {
            userNameResult.textContent = "Anonymous"
        } else (userNameResult.textContent = userNameInput.value);
    })

    