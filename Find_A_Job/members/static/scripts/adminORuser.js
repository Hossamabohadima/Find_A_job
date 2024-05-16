var adminPages = ["admin_Job-details", "AdminEdit-job", "admin_HomePage", "add_job"];
var Pages = ["about-us", "contact-us"];

var url = window.location.href;
var currentPage = url.substring(url.lastIndexOf("/") + 1);
if (adminPages.includes(currentPage)) {
    sessionStorage.setItem("admin", "true");
} else if (!Pages.includes(currentPage)) {
    sessionStorage.setItem("admin", "false");
}
if (sessionStorage.getItem("admin") == 'true') {
    mHa = document.getElementById("Home");
    mHa.setAttribute("href", "admin_HomePage");

    mHa = document.getElementById("my_job");
    mHa.setAttribute("href", "admin_HomePage");
}


function search() {
    text = document.getElementsByClassName("searchTxt")[0]

    if (text.value != "") {
        $.ajax({
            type: "GET",
            url: "search",
            data: { "search": text.value },
            success: function (jobArray) {
                var container = document.getElementsByClassName("searchBar")[0];
                for (var i = 0; i < jobArray.length; i++) {
                    var job = jobArray[i];
            
                    var div = document.createElement("div");
                    div.classList.add("searchResultBox");
                    div.innerHTML = `
                        <a href="Job-details?index=${jobArray[i].idInput}">
                            <div style="font-size: 18px; color: black; background-color: white;">
                                <strong></strong> ${job.position}
                            </div>
                        </a>
                    `;
                    container.appendChild(div);
                }
            }
        }
        )


    }

}