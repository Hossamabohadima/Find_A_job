const checkbox = document.getElementById("showDivCheckbox");
const hiddenDiv = document.getElementById("hiddenDiv");
const usernameInput = document.getElementById("Username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmpaswordInput = document.getElementById("confirmpasword");
const companynameInput = document.getElementById("companyname");

function validateEmail(userEmail) {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailFormat.test(userEmail);
}
function Register() {
  var validation = 1;
  if (usernameInput.value.trim() === "") {
    validation = 0;
    usernameError.style.display = "block";
    usernameInput.classList.add("error-input");
  } else {
    usernameError.style.display = "none";
    usernameInput.classList.remove("error-input");
  }

  if (!validateEmail(emailInput.value)) {
    validation = 0;
    emailError.style.display = "block";
    emailInput.classList.add("error-input");
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("error-input");
  }

  if (passwordInput.value.length < 7) {
    validation = 0;
    passwordError.style.display = "block";
    passwordInput.classList.add("error-input");
  } else {
    passwordError.style.display = "none";
    passwordInput.classList.remove("error-input");
  }

  if (
    confirmpaswordInput.value.trim() === "" ||
    passwordInput.value !== confirmpaswordInput.value
  ) {
    validation = 0;
    confirmPasswordError.style.display = "block";
    confirmpaswordInput.classList.add("error-input");
  } else {
    confirmPasswordError.style.display = "none";
    confirmpaswordInput.classList.remove("error-input");
  }

  if (checkbox.checked && companynameInput.value.trim() === "") {
    validation = 0;
    confirmCompanyError.style.display = "block";
    companynameInput.classList.add("error-input");
  } else {
    confirmCompanyError.style.display = "none";
    companynameInput.classList.remove("error-input");
  }
  if (validation) {
    let newUser = {
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      company: checkbox.checked ? companynameInput.value : null
    };

    $.ajax(
      {
        type: "POST",
        url: "register",
        data: newUser,
        success: async function (data) {
          window.location.href = data;
        }
      })



  }



}


usernameInput.addEventListener("focus", function () {
  usernameError.style.display = "none";
  usernameInput.classList.remove("error-input");
});

emailInput.addEventListener("focus", function () {
  emailError.style.display = "none";
  emailInput.classList.remove("error-input");
});

passwordInput.addEventListener("focus", function () {
  passwordError.style.display = "none";
  passwordInput.classList.remove("error-input");
});

confirmpaswordInput.addEventListener("focus", function () {
  confirmPasswordError.style.display = "none";
  confirmpaswordInput.classList.remove("error-input");
});

companynameInput.addEventListener("focus", function () {
  confirmCompanyError.style.display = "none";
  companynameInput.classList.remove("error-input");
});

checkbox.addEventListener("change", function () {
  if (this.checked) {
    hiddenDiv.style.display = "block";
  } else {
    hiddenDiv.style.display = "none";
  }
});


