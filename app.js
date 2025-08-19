// app.js
import FormHandler from "./FormHandler.js";

const form = document.getElementById("applicationForm");
const alertPlaceholder = document.getElementById("alertPlaceholder");
const handler = new FormHandler(form);

function showAlert(message, type) {
  alertPlaceholder.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    fullname: document.getElementById("fullname").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
  };

  const errors = handler.validateForm(formData);

  if (errors.length > 0) {
    showAlert(errors.join("<br>"), "danger");
  } else {
    handler.saveToLocalStorage(formData);
    showAlert("Form submitted successfully and saved!", "success");
    console.log("Saved Data:", handler.getFormData());
    form.reset();
  }
});
