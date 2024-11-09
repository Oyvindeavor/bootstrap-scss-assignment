import { initializeToggleFormButtons } from './form/toggleForm.mjs';
import { formValidations } from './form/validation.mjs';

function init() {
  initializeToggleFormButtons();
  formValidations();
}

init();
