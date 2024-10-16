const form = document.getElementById("sign-up");
const usernameContainer = document.getElementById("username");
const usernameInput = document.getElementById("username-input");
const usernameError = document.getElementById("user-name-error");
const togglePassword = document.getElementById("toggle-password");
const signupsuccess = document.getElementById("signupsuccess");

const emailContainer = document.getElementById("email");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const passwordContainer = document.getElementById("password");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");

const confirmpassContainer = document.getElementById("confirm-password");
const confirmpassInput = document.getElementById("confirm-password-input");
const confirmpassError = document.getElementById("confirm-password-error");

function togglePasswordVisibility(inputField, toggleElement) {
  const type = inputField.type === "password" ? "text" : "password";
  inputField.type = type;

  toggleElement.src =
    type === "password" ? "./assets/eye-close.png" : "./assets/eye-open.png";
}

togglePassword.addEventListener("click", function (e) {
  e.preventDefault();
  togglePasswordVisibility(passwordInput, togglePassword);
});

function validateUsername(value) {
  if (value.length === 0) {
    usernameError.textContent = "Username is required";
    return false;
  } else if (value.toLowerCase() == "username") {
    usernameError.textContent = "Username should not be 'username'";
    return false;
  } else {
    usernameError.textContent = "";
    return true;
  }
}

function validateEmail(value) {
  if (value.length === 0) {
    emailError.textContent = "Email is required";
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    emailError.textContent = "Invalid email format";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword(value) {
  if (value.length === 0) {
    passwordError.textContent = "Password is required";
    return false;
  } else if (value.length < 8) {
    passwordError.textContent = "Password should be at least 8 characters long";
    return false;
  } else if (
    !/[a-z]/.test(value) ||
    !/[A-Z]/.test(value) ||
    !/\d/.test(value) ||
    !/[!@#$%^&*()]/.test(value)
  ) {
    passwordError.textContent =
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateconfirmPassword(value) {
  if (value.length === 0) {
    confirmpassError.textContent = "Confirm Password is required";
    return false;
  } else if (value !== passwordInput.value) {
    confirmpassError.textContent = "Passwords do not match";
    return false;
  } else {
    confirmpassError.textContent = "";
    return true;
  }
}

function handleSubmit(e) {
  e.preventDefault();

  const isUsernameValid = validateUsername(usernameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);
  const isConfirmPasswordValid = validateconfirmPassword(
    confirmpassInput.value
  );

  if (
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    signupsuccess.style.display = "block";
    signupsuccess.textContent = "Sign Up Successful!";
    signupsuccess.style.color = "green";

    setTimeout(() => {
      signupsuccess.style.display = "none";
      form.reset();
    }, 2000);
  }
}
form.addEventListener("submit", handleSubmit);
