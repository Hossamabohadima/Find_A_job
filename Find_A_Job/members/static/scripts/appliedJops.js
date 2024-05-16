document.addEventListener("DOMContentLoaded", function () {

  $.ajax(
    {
      type: "GET",
      url: "Get_Applayedjobs",
      data: { "user": sessionStorage.getItem("user") },
      success: function (jobArray) {
        let list = document.getElementById("lista");

        for (let i = 0; i < jobArray.length; i++) {
          let li = document.createElement("li");
          let a = document.createElement("a");
          a.setAttribute("href", `Job-details?index=${jobArray[i].idInput}`);

          let button = document.createElement("button");
          button.setAttribute("class", "my_button");
          button.setAttribute("style", "font-size: larger");

          let buttonText = document.createTextNode(jobArray[i].position);
          button.appendChild(buttonText);
          a.appendChild(button);

          let h3 = document.createElement("h3");
          let descriptionText = document.createTextNode(jobArray[i].description);
          h3.appendChild(descriptionText);

          li.appendChild(a);
          li.appendChild(h3);
          list.appendChild(li);
        }
      }
    })
});
