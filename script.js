document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.getElementById("scroll-up");
    const scrollDownButton = document.getElementById("scroll-down");

    scrollUpButton.addEventListener("click", scrollToTop);
    scrollDownButton.addEventListener("click", scrollToBottom);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
