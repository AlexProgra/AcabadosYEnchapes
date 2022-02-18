window.addEventListener('scroll', function() {
    var header = document.querySelector("header");
    header.classList.toggle("fijar-header",window.scrollY > 500)
});