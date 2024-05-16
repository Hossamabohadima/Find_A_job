document.addEventListener("DOMContentLoaded", function () {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const index = parseInt(urlParams.get("index"));

    $.ajax(
      {
        type: "GET",
        url: "details",
        data: { index: index },
        success: function (job) {
          var Body = document.body;
          var mHp = document.createElement("p");
          mHp.setAttribute("class", "headingMargin");
          var mHh1 = document.createElement("h1");
          mHh1.innerHTML = job.companyname + " is looking for a " + job.position;
          mHp.appendChild(mHh1);
          Body.appendChild(mHp);

          var mHdiv = document.createElement("div");
          mHdiv.setAttribute("class", "divlock");
          var mHh2 = document.createElement("h2");
          mHh2.innerHTML = "Firstly, a bit about us";
          mHdiv.appendChild(mHh2);
          var mHp = document.createElement("p");
          mHp.innerHTML = job.about_us;
          mHdiv.appendChild(mHp);
          Body.appendChild(mHdiv);

          var mHdiv = document.createElement("div");
          mHdiv.setAttribute("class", "divlock");
          var mHh2 = document.createElement("h2");
          mHh2.innerHTML = "Skills";
          mHdiv.appendChild(mHh2);
          var mHp = document.createElement("p");
          mHp.innerHTML = job.required;
          mHdiv.appendChild(mHp);
          Body.appendChild(mHdiv);

          var mHdiv = document.createElement("div");
          mHdiv.setAttribute("class", "divlock");
          var mHh2 = document.createElement("h2");
          mHh2.innerHTML = "What we need from you";
          mHdiv.appendChild(mHh2);
          var mHp = document.createElement("p");
          mHp.innerHTML = job.description;
          mHdiv.appendChild(mHp);
          Body.appendChild(mHdiv);

          var mHtable = document.createElement("table");

          var mHh2 = document.createElement("h2");
          mHh2.setAttribute("id", "q2");

          mHh2.innerHTML = "Job details : ";
          mHtable.appendChild(mHh2);

          var mHtr = document.createElement("tr");
          var mHth = document.createElement("th");
          mHth.innerHTML = "Job status:";
          mHtr.appendChild(mHth);
          var mHth = document.createElement("th");
          mHth.innerHTML = job.Status;
          mHtr.appendChild(mHth);
          mHtable.appendChild(mHtr);

          var mHtr = document.createElement("tr");
          var mHth = document.createElement("th");
          mHth.innerHTML = "Years of experience :";
          mHtr.appendChild(mHth);
          var mHth = document.createElement("th");
          mHth.innerHTML = job.yearsInput;
          mHtr.appendChild(mHth);
          mHtable.appendChild(mHtr);

          var mHtr = document.createElement("tr");
          var mHth = document.createElement("th");
          mHth.innerHTML = "Location:";
          mHtr.appendChild(mHth);
          var mHth = document.createElement("th");
          mHth.innerHTML = job.loc;
          mHtr.appendChild(mHth);
          mHtable.appendChild(mHtr);

          var mHtr = document.createElement("tr");
          var mHth = document.createElement("th");
          mHth.innerHTML = "Salary: ";
          mHtr.appendChild(mHth);
          var mHth = document.createElement("th");
          mHth.innerHTML = job.Salary;
          mHtr.appendChild(mHth);
          mHtable.appendChild(mHtr);

          var mHtr = document.createElement("tr");
          var mHth = document.createElement("th");
          mHth.innerHTML = "Hours work:";
          mHtr.appendChild(mHth);
          var mHth = document.createElement("th");
          mHth.innerHTML = job.Hours;
          mHtr.appendChild(mHth);
          mHtable.appendChild(mHtr);

          Body.appendChild(mHtable);

          var mHdiv = document.createElement("div");
          mHdiv.setAttribute("class", "divlock");

          var button = document.createElement("button");
          button.setAttribute("id", "q1");
          button.setAttribute(
            "onclick",
            `location.href='apply?index=${index}';`
          );
    
          var buttonText = document.createTextNode("Apply Now");
          button.appendChild(buttonText);
          mHdiv.appendChild(button);
          Body.appendChild(mHdiv);

        }
      })
      ;


})
