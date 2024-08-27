document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector(".navbar"),
        navOpenBtn = document.querySelector("#bar-open"),
        navCloseBtn = document.querySelector("#x-closed");

    // Ensure elements are not null before adding event listeners
    if (navOpenBtn) {
        navOpenBtn.addEventListener("click", () => {
            nav.classList.add("openNav");
            console.log("clicked");
        });
    }

    if (navCloseBtn) {
        navCloseBtn.addEventListener("click", () => {
            nav.classList.remove("openNav");
        });
        console.log("clicked");
    }
});

