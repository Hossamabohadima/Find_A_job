const usernameInput = document.getElementById("Username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

function SignIn(event) {
  var validation = true;
  event.preventDefault();


  if (usernameInput.value.trim() === "") {
    validation = false;
    usernameError.style.display = "block";
    usernameInput.classList.add("error-input");
  } else {
    usernameError.style.display = "none";
    usernameInput.classList.remove("error-input");
  }


  if (passwordInput.value.length < 7) {
    validation = false;
    passwordError.style.display = "block";
    passwordInput.classList.add("error-input");
  } else {
    passwordError.style.display = "none";
    passwordInput.classList.remove("error-input");
  }

  if (validation) {
    let user = {
      username: usernameInput.value.trim(),
      password: passwordInput.value
    }
    $.ajax(
      {
        type: "POST",
        url: "Check",
        data: user,
        success: function (company) {
          if (company == "User does not exist") {
            passwordError.innerText = "Invalid username or password. Please try again.";
            passwordError.style.display = "block";
          }
          else {
            sessionStorage.setItem("user", usernameInput.value);
            if (company) {
              sessionStorage.setItem("company", company);
              window.location.href = "admin_HomePage";
            }
            else {
              window.location.href = "jobslist";
            }
          }
        }
      })



  }
}


usernameInput.addEventListener("focus", function () {
  usernameError.style.display = "none";
  usernameInput.classList.remove("error-input");
});

passwordInput.addEventListener("focus", function () {
  passwordError.style.display = "none";
  passwordInput.classList.remove("error-input");
});



