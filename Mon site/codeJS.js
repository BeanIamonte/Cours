// CODE JAVASCRIPT

var slide = new Array('Images/slider-image1.jpg', 'Images/slider-image2.jpg', 'Images/slider-image3.jpg');

var numero = 1;

function ChangeSlide(sens) {

    numero = numero + sens;

    if (numero < 0) {

        numero = slide.length - 1;
    }

    if (numero > slide.length - 1) {

        numero = 0;
    }

    

     document.getElementById('slide').style.opacity = 0;

for (var i = 0 ; i < 1 ; i += 0.25) {

    

    setTimeout(function opaciteSlider() {

        document.getElementById('slide').style.opacity = i;

        console.log('test2');

    }), 100;

    opaciteSlider();

  

}

   

    document.getElementById("slide").src = slide[numero];


}







function ChangeSlideTimer() {

   setInterval(() => {
       
    console.log(numero);


    if (numero == 0) {

        numero++;
        document.getElementById("slide").src = slide[numero];

  
    } else if (numero == 1) {

        numero++;
        document.getElementById("slide").src = slide[numero];

    } else if (numero == 2) {

        numero = 0;
        document.getElementById("slide").src = slide[numero];

    } else {

        alert('Erreur dû au slider.')
    }



   }, 10000);




}

ChangeSlideTimer();





/* TEST */


var test = document.getElementById('test');

var paragraphe = document.querySelector('.para');

console.log(test, paragraphe);

paragraphe.addEventListener('click', function() {

    paragraphe.classList.toggle('testvalide');

});



// LE TEST A POUR BUT DE CHANGER LE SLIDER D'UNE BELLE FACON ...