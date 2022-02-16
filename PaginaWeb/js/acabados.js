// $(document).ready(function(){
//     var altura = $('.banner-navigation').offset().top;
    
//     $(window).on('scroll', function(){
//         if ( $(window).scrollTop() > altura ) {
//             $('.banner-navigation').addClass('fijar-banner');
//         } else {
//             $('.banner-navigation').removeClass('fijar-banner');
//         }
//     })
// });

let animado = document.querySelectorAll(".banner-navigation");
let altura = document.querySelectorAll(".section-services");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (var i = 0; i < altura.length; i++) {
        let alturaAnimado = altura[i].offsetTop;
        if(alturaAnimado -100 < scrollTop && alturaAnimado +1600 > scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrar-banner");
        }else {
            animado[i].style.opacity = 0;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);