//1 to toggle password icon
document.getElementById("eyeToggle").addEventListener("click", function () {
  var passwordInput = document.getElementById("passwordInput");
  var hide1Icon = document.getElementById("hide1");
  var hide2Icon = document.getElementById("hide2");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    hide1Icon.style.display = "inline-block";
    hide2Icon.style.display = "none";
  } else {
    passwordInput.type = "password";
    hide1Icon.style.display = "none";
    hide2Icon.style.display = "inline-block";
  }
});

document.getElementById("eyeToggleConfirmPassword")
  .addEventListener("click", function () {
    console.log("i got here");
    var passwordInput = document.getElementById("confirmPasswordInput");
    var hide1Icon = document.getElementById("hide1");
    var hide2Icon = document.getElementById("hide2");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      hide1Icon.style.display = "inline-block";
      hide2Icon.style.display = "none";
    } else {
      passwordInput.type = "password";
      hide1Icon.style.display = "none";
      hide2Icon.style.display = "inline-block";
    }
  });

// form
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");

form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

//3 the function below  set an error
const setError = (element, message) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");

  errorDisplay.innerText = message;
  inputBox.classList.add("error");
  inputBox.classList.remove("success");
};

// 4 success
const setSuccess = (element) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");

  errorDisplay.innerText = message;
  inputBox.classList.add("error");
  inputBox.classList.remove("success");
};

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// 2 with the fubction below i am getting the value of all the input fields
const validateInputs = () => {
  // The trim() method removes whitespace from both sides of a string
  const firstnameValue = fname.value.trim();
  const lastnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const passwordInputValue = passwordInput.value.trim();
  const confirmPasswordInputValue = confirmPasswordInput.value.trim();

  // make your checks

  if (firstnameValue === "") {
    setError(fname, "first name is required");
  } else {
    setSuccess(fname);
  }

  if (lastnameValue === "") {
    setError(lname, "last name is required");
  } else {
    setSuccess(lname);
  }

  if (mobileValue === "") {
    setError(mobile, "mobile is required");
  } else {
    setSuccess(mobile);
  }

  if (emailValue === "") {
    setError(email, "email is required");
  } else if (!isValidEmail(emailValue)) {
    setSuccess(email);
  }

  if (passwordInputValue === "") {
    setError(passwordInput, "Password is required");
  } else if (passwordInputValue.length < 10) {
    setError(passwordInput, "password must be at least 8 character");
  } else {
    setSuccess(passwordInput);
  }

  // confirm password

  if (confirmPasswordInputValue === "") {
    setError(confirmPasswordInput, "Please confirm your password");
  } else if (confirmPasswordInputValue !== passwordInputValue) {
    setError(confirmPasswordInput, "password doesnt match");
  } else {
    setSuccess(confirmPasswordInput);
  }
};
