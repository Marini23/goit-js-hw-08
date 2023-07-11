
import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`.feedback-form textarea`);
const input = document.querySelector(`.feedback-form input`);

const STORAGE_KEY = `feedback-form-state`;
let formData = {};

form.addEventListener(`submit`, onFormSubmit);
form.addEventListener(`input`, throttle(onTextareaInput, 500));


populateTextareaInput();



function onTextareaInput(e) {
    form.addEventListener(`input`, (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
        // formData = {
        //     email: input.value,
        //     message: textarea.value,
        // };
    formData[e.target.name] = e.target.value;
        // console.log(formData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})
    


    // const message = e.target.value;
    // localStorage.setItem(STORAGE_KEY, message);
};

    function onFormSubmit(e) {
        e.preventDefault();
        const { email, message } = e.currentTarget.elements;
        console.log({ email: email.value, message: message.value });
        e.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData = {};
};

    function populateTextareaInput() {
    let savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        input.value = formData.email || ``;
        textarea.value = formData.message || ``;
    }
    }




