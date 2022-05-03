import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formData = {};
populateFormData();

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onFormSubmit);

function onInputForm(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

/* function populateFormData() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);

    if (savedFormData) {
        form.target.value = savedFormData;
    }
} */

function onFormSubmit(e) {
    e.preventDefault();
    
}
