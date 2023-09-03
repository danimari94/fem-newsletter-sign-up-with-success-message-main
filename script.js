const subscriptionContainer = document.querySelector('.subscription-container');
const successContainer = document.querySelector('.success-container');

const subscribeFormGroup = document.querySelector('.form-group');
const subscribeButton = document.querySelector('.js-subscribe-button');
const emailInput = document.querySelector('.email-input');

const insertedEmailSpan = document.querySelector('.inserted-email');

const dismissButton = document.querySelector('.dismiss-button');

function validateEmail(input) {
  var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return input.value.match(validRegex);
}

subscribeButton.addEventListener('click', () => {
  if (validateEmail(emailInput)) {
    subscribeFormGroup.classList.remove('form-error');
    successContainer.classList.remove('hidden');
    subscriptionContainer.classList.add('hidden');
    insertedEmailSpan.innerHTML = emailInput.value;
    emailInput.value = '';
  }
  else {
    subscribeFormGroup.classList.add('form-error');
  }
});

dismissButton.addEventListener('click', () => {
  subscriptionContainer.classList.remove('hidden');
  successContainer.classList.add('hidden');
});