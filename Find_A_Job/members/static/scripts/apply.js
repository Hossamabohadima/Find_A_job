const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = parseInt(urlParams.get("index"));

function validateEmail(val) {
  const re = /\S+@\S+\.\S+/;
  return re.test(val);
}

function SubmitForm() {
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var add = document.getElementById("add");
  var telephone = document.getElementById("telephone");
  var Em = document.getElementById("Em");

  var validation = true;

  document.querySelectorAll(".error").forEach((el) => el.remove());

  if (firstname.value.trim() === "") {
    showInputError(firstname, "Please enter your first name.");
    validation = false;
  }

  if (lastname.value.trim() === "") {
    showInputError(lastname, "Please enter your last name.");
    validation = false;
  }

  if (add.value.trim() === "") {
    showInputError(add, "Please enter your address.");
    validation = false;
  }

  if (telephone.value.trim() === "") {
    showInputError(telephone, "Please enter your phone number.");
    validation = false;
  }

  if (!validateEmail(Em.value)) {
    showInputError(Em, "Please enter a valid email.");
    validation = false;
  }

  if (validation) {
    newUser = {
      user: sessionStorage.getItem("user"),
      email: Em.value,
      fname: firstname.value,
      lname: lastname.value,
      phone: telephone.value,
      address: add.value,
      jobid: index
    }
    $.ajax(
      {
        type: "POST",
        url: "applyDS",
        data: newUser,
        success: async function (data) {
          window.location.href = "applied-jobs";
        }
      })






  }


}

function showInputError(inputElement, errorMessage) {
  var errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.innerText = errorMessage;
  inputElement.parentElement.appendChild(errorDiv);

  inputElement.addEventListener("focus", function () {
    errorDiv.remove();
  });
}
