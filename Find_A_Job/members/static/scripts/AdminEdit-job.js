const Status = document.getElementById("statusValue");
const idInput = document.getElementById("id");
const yearsInput = document.getElementById("years");
const posi = document.getElementById("posi");
const about_us = document.getElementById("company");
const description = document.getElementById("description");
const required = document.getElementById("required");
const loc = document.getElementById("loc");
const Salary = document.getElementById("Salary");
const Hours = document.getElementById("Hours");

class job {
    constructor(
        status,
        idInput,
        yearsInput,
        position,
        aboutUS,
        description,
        skills,
        loca,
        salary,
        hours,
        company_name
    ) {
        this.status = status;
        this.id = idInput;
        this.years = yearsInput;
        this.position = position;
        this.about_us = aboutUS;
        this.description = description;
        this.skills_required = skills;
        this.location = loca;
        this.salary = salary;
        this.hours = hours;
        this.company_name = company_name;
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = parseInt(urlParams.get("index"));

document.addEventListener("DOMContentLoaded", function () {





        $.ajax(
            {
                type: "GET",
                url: "details",
                data: { index: index },
                success: function (job) {
                    Status.value = job.status
                    idInput.value = job.idInput
                    yearsInput.value = job.yearsInput;
                    posi.value = job.position;
                    about_us.value = job.about_us
                    description.value = job.description
                    required.value = job.required
                    loc.value = job.loc
                    Salary.value = job.Salary
                    Hours.value = job.Hours
                }
            })

}
)

function addJob() {
    let isValid = true;
    document.querySelectorAll(".error").forEach((el) => el.remove());


    if (posi.value.trim() === "") {
        showError(posi, "Position is required.");
        isValid = false;
    }

    if (about_us.value.trim() === "") {
        showError(about_us, "about_us is required.");
        isValid = false;
    }
    if (description.value.trim() === "") {
        showError(description, "Description is required.");
        isValid = false;
    }
    if (required.value.trim() === "") {
        showError(required, "Skills required is required.");
        isValid = false;
    }
    if (loc.value.trim() === "") {
        showError(loc, "Location is required.");
        isValid = false;
    }
    if (Salary.value.trim() === "") {
        showError(Salary, "Salary is required.");
        isValid = false;
    }
    if (Hours.value.trim() === "") {
        showError(Hours, "Hours of work is required.");
        isValid = false;
    }
    if (Status.value.trim() === "") {
        showError(Status, "Job status is required.");
        isValid = false;
    }
    if (idInput.value.trim() === "") {
        showError(idInput, "ID is required.");
        isValid = false;
    }
    if (yearsInput.value.trim() === "") {
        showError(yearsInput, "Years of experience is required.");
        isValid = false;
    }

    if (isValid) {
        let addedJob = new job(
            Status.value,
            idInput.value,
            yearsInput.value,
            posi.value,
            about_us.value,
            description.value,
            required.value,
            loc.value,
            Salary.value,
            Hours.value,
            sessionStorage.getItem("company")
        );
        $.ajax(
            {
                type: "GET",
                url: "DeleteJob",
                data: { index: index },
                success: function (job) {
                    $.ajax(
                        {
                            type: "POST",
                            url: "add",
                            data: addedJob,
                            success: function (status) {
                                if (status) {
                                    window.location.href = "admin_HomePage";
                                }
                            }
                        })
                }
            })

    }
}

function showError(input, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error";
    errorDiv.textContent = message;
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
}

posi.addEventListener("focus", () => removeError(posi));
about_us.addEventListener("focus", () => removeError(company));
description.addEventListener("focus", () => removeError(description));
required.addEventListener("focus", () => removeError(required));
loc.addEventListener("focus", () => removeError(loc));
Salary.addEventListener("focus", () => removeError(Salary));
Hours.addEventListener("focus", () => removeError(Hours));
Status.addEventListener("focus", () => removeError(statusValue));
idInput.addEventListener("focus", () => removeError(id));
yearsInput.addEventListener("focus", () => removeError(years));

function removeError(input) {
    const errorDiv = input.parentNode.querySelector(".error");
    if (errorDiv) {
        errorDiv.remove();
    }
    input.style.border = "1px solid #ccc";
}




