let animado = document.querySelectorAll(".banner-navigation");
let altura = document.querySelectorAll(".section-services");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (var i = 0; i < altura.length; i++) {
        let alturaAnimado = altura[i].offsetTop;
        if(alturaAnimado -160 < scrollTop && alturaAnimado +1700 > scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrar-banner");
            animado[i].classList.add("posicionar-banner");
        }else {
            animado[i].style.opacity = 0;
            animado[i].classList.remove("posicionar-banner");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);