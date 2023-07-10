
import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`.feedback-form textarea`);

const STORAGE_KEY = `feedback-form-state`;
let formData = {};

form.addEventListener(`submit`, onFormSubmit);
textarea.addEventListener(`input`, throttle(onTextareaInput, 500));
form.addEventListener(`input`, (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    console.log(formData);
})

populateTextareaInput();

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};

    function onFormSubmit(e) {
        e.preventDefault();
        e.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
};

    function populateTextareaInput() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        textarea.value = savedData;
        console.log(savedData);
    }
    }






// console.log(formData);
// let formData = {};
// populatetextarea();
    
//     function onFormSubmit(e) {
//         e.preventDefault();

//     const { email, message } = e.currentTarget.elements;
//     console.log({ email: email.value.trim(), message: message.value.trim() });

//     if (localStorage.getItem(STORAGE_KEY)) {
//     let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     console.log(data);
//     localStorage.removeItem(STORAGE_KEY);
//     }
//     e.currentTarget.reset();
//     formData = {};
// }
//     }

    // const mesagge = e.target.value;
    // localStorage.setItem(STORAGE_KEY, mesagge);
// const formDataJSON = JSON.stringify(formData);
//     console.log(formDataJSON);
    // localStorage.setItem(STORAGE_KEY, formDataJSON);



// form.addEventListener(`input`, e => {
//     formData[e.target.name] = e.target.value;
//     console.log(formData);
// })

// function populatetextarea() {
//     const savedData = localStorage.getItem(STORAGE_KEY);

//     if (savedData) {
//         console.log(savedData);
//         formData = JSON.parse(savedData);
//     }
// }