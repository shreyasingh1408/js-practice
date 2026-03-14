let btn = document.querySelector("#toggleBtn");

// Page load hone par check kare ki pehle kya saved tha
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
}

btn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    //save mode in local storage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }

});