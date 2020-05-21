// CODE JAVASCRIPT

var slide = new Array('Images/slider-image1.jpg', 'Images/slider-image2.jpg', 'Images/slider-image3.jpg');

var numero = 1;

// function ChangeSlide(sens) {

//     // hide pictures  
//     numero = numero + sens;

//     if (numero < 0) {
//         numero = slide.length - 1;
//     }

//     if (numero > slide.length - 1) {
//         numero = 0;
//     }

//     document.getElementById('slide').style.opacity = 0;

//     show pictures 
//     for (var i = 0 ; i < 1 ; i += 0.25) {
//         alert(i);


//         setTimeout(function opaciteSlider() {
//             document.getElementById('slide').style.transition = "opacity 0.5s ease-in-out";
//             document.getElementById('slide').style.opacity = i;
//         }), 100;

//         opaciteSlider();
//     }
//     document.getElementById("slide").src = slide[numero];
// }

/**
 * j'ai remplace "src" par background. 
 * Si tu change le src, il n'y aura pas de transition car ca n'est pas une qualite css
 * or le background en est une
 */
// document.getElementById("slide").style.backgroundImage = "url('" + slide[0] + "')";
// document.getElementById("slide").style.transition = "2s";

// auto slide 
function ChangeSlideTimer() {

   setInterval(() => {
        console.log(numero);
        /**
         * dans ce cas utilise plutot "switch" que "if...else" 
         */
        switch(numero) {
            case 0:
            case 1:
            numero++;
            document.getElementById("slide").style.backgroundImage = "url('" + slide[numero] + "')";
            break;

            case 2:
            numero = 0;
            document.getElementById("slide").style.backgroundImage = "url('" + slide[numero] + "')";
            break;

            default: 
            alert('Erreur dû au slider.');
        }
    }, 10000);
}

ChangeSlideTimer();

/* TEST */

// var test = document.getElementById('test');
// var paragraphe = document.querySelector('.para');
// console.log(test, paragraphe);
// paragraphe.addEventListener('click', function() {
//     paragraphe.classList.toggle('testvalide');
// });

// LE TEST A POUR BUT DE CHANGER LE SLIDER D'UNE BELLE FACON ...