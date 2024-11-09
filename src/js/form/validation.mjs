export function formValidations() {
  // Get references to forms and input elements
  const loginForm = document.querySelector('#login-form form');
  const registerForm = document.querySelector('#register-form form');
  const email = document.getElementById('email');
  const registerEmail = document.getElementById('registerEmail');
  const password = document.getElementById('password');
  const registerPassword = document.getElementById('registerPassword');
  const confirmPassword = document.getElementById('confirmPassword');

  // Real-time validation event listeners
  addInputValidation(email, validateEmail);
  addInputValidation(registerEmail, validateEmail);
  addInputValidation(password, validatePasswordLength);
  addInputValidation(registerPassword, validatePasswordLength);
  addInputValidation(confirmPassword, () =>
    validatePasswordMatch(registerPassword, confirmPassword)
  );

  // Form submit event listeners
  loginForm.addEventListener('submit', (event) => {
    if (!validateLogin()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

  registerForm.addEventListener('submit', (event) => {
    if (!validateRegister(registerPassword, confirmPassword)) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
}

// Helper function to add input validation with real-time feedback
function addInputValidation(inputElement, validationFunction) {
  inputElement.addEventListener('input', () => {
    if (validationFunction(inputElement)) {
      inputElement.classList.remove('is-invalid');
      inputElement.classList.add('is-valid');
    } else {
      inputElement.classList.remove('is-valid');
      inputElement.classList.add('is-invalid');
    }
  });
}

// Validation functions
function validateEmail(inputElement) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(inputElement.value);
}

function validatePasswordLength(inputElement) {
  return inputElement.value.length >= 8;
}

function validatePasswordMatch(passwordElement, confirmPasswordElement) {
  return (
    passwordElement.value === confirmPasswordElement.value &&
    passwordElement.value.length >= 8
  );
}

// Login form validation
function validateLogin() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePasswordLength(password);

  return isEmailValid && isPasswordValid;
}

// Register form validation
function validateRegister(registerPassword, confirmPassword) {
  const registerEmail = document.getElementById('registerEmail');
  const isEmailValid = validateEmail(registerEmail);
  const isPasswordValid = validatePasswordLength(registerPassword);
  const isPasswordMatch = validatePasswordMatch(
    registerPassword,
    confirmPassword
  );

  return isEmailValid && isPasswordValid && isPasswordMatch;
}
