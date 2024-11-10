function toggleForm(formType) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (formType === 'login') {
    loginForm.classList.remove('d-none');
    registerForm.classList.add('d-none');
  } else {
    loginForm.classList.add('d-none');
    registerForm.classList.remove('d-none');
  }
}

export function initializeToggleFormButtons() {
  const loginPillButton = document.getElementById('login-tab');
  const registerPillButton = document.getElementById('register-tab');

  loginPillButton.addEventListener('click', () => toggleForm('login'));
  registerPillButton.addEventListener('click', () => toggleForm('register'));
}
