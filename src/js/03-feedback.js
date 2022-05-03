import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    emailEl: document.querySelector('.feedback-form input'),
    messageEl: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateFormData();

function onInputForm(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

function populateFormData() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFormData) {
        refs.emailEl.value = savedFormData.email;
        refs.messageEl.value = savedFormData.message;
        formData.email = savedFormData.email;
        formData.message = savedFormData.message;
    }
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};
