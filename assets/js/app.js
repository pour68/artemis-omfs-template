const quickAccessLinks = document.querySelectorAll(".quickaccess__content a");

quickAccessLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        quickAccessLinks.forEach(link => link.classList.add("deactive"));
        e.currentTarget.classList.remove("deactive");
    });
});