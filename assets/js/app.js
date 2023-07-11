const quickAccessLinks = document.querySelectorAll(".quickaccess__content a");

quickAccessLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        quickAccessLinks.forEach(link => link.classList.add("deactive"));
        e.currentTarget.classList.remove("deactive");
    });
});

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true
});