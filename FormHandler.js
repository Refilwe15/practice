// FormHandler.js
export default class FormHandler {
  constructor(form) {
    this.form = form;
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  validateName(name) {
    const re = /^[A-Za-z][A-Za-z\s]*$/;
    return re.test(name);
  }

  validateForm(data) {
    const errors = [];

    if (!data.fullname || !this.validateName(data.fullname)) {
      errors.push("Full name must start with a letter and cannot be empty.");
    }
    if (!data.email || !this.validateEmail(data.email)) {
      errors.push("Invalid email format.");
    }
    if (!data.password) {
      errors.push("Password cannot be empty.");
    }

    return errors;
  }

  saveToLocalStorage(data) {
    localStorage.setItem("formData", JSON.stringify(data));
  }

  getFormData() {
    const data = localStorage.getItem("formData");
    return data ? JSON.parse(data) : null;
  }
}
