const submit = () => {
  const nameInput = document.getElementById("Name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("Message");

  let validation = true;

  document.querySelectorAll(".error").forEach((el) => el.remove());

  if (nameInput.value.trim() === "") {
    showInputError(nameInput, "Please enter your name.");
    validation = false;
  }

  if (emailInput.value.trim() === "") {
    showInputError(emailInput, "Please enter your email.");
    validation = false;
  } else if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".")
  ) {
    showInputError(emailInput, "Please enter a valid email address.");
    validation = false;
  }

  if (phoneInput.value.trim() === "") {
    showInputError(phoneInput, "Please enter your phone number.");
    validation = false;
  }

  if (messageInput.value.trim() === "") {
    showInputError(messageInput, "Please enter your message.");
    validation = false;
  }

  if (validation) {

    $.ajax({
      type: "POST",
      url: "contact",
      data: {
        "name": nameInput.value,
        "email": emailInput.value,
        "phone": phoneInput.value,
        "message": messageInput.value
      },
      success: function (job) {
        alert("Form submitted successfully!");
      }
    })

  }

};

const showInputError = (inputElement, errorMessage) => {
  const container = inputElement.parentElement;
  const errorElement = container.querySelector(".error");

  if (!errorElement) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error";
    errorDiv.textContent = errorMessage;
    container.appendChild(errorDiv);
  } else {
    errorElement.innerText = errorMessage;
  }

  inputElement.classList.add("error-input");
};


document.querySelectorAll(".m").forEach((input) => {
  input.addEventListener("focus", () => {
    const container = input.parentElement;
    const errorElement = container.querySelector(".error");
    if (errorElement) {
      errorElement.remove();
      input.classList.remove("error-input");
    }
  });
});
