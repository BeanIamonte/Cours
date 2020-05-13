// JavaScript Document



// CODE ANIMATION PASSAGE BANIERE


function KingRexService() { 

var baniere = document.getElementById('baniere');
var deco = document.getElementById('deco');


baniere.addEventListener('mouseover', function() {
	
	
		if ( deco.style.opacity == '0' ) {
			

			deco.style.opacity = '1';
			
		} else {
			
			deco.style.opacity = '0';
			
		}
	
});

baniere.addEventListener('mouseout', function() {
	
	
		if ( deco.style.opacity == '1' ) {
			
			
			deco.style.opacity = '0';
			
		} else {
			
			deco.style.opacity = '0';
			
		}
	
});


}

KingRexService();




var blockOne = document.getElementById('block1');

var boutonOne = document.getElementById('bouton1');



// SCRIP AU CLICK

function bouton() { 

boutonOne.addEventListener('click', function() {
	
	
	if (blockOne.style.display == "block" ) {
	
		blockOne.style.display = "none";
		
	} else 
		
		blockOne.style.display = "block";
	
});

}

bouton();





// Agrandir une image au click
var image = document.getElementById('imageagrandir');

var image2 = document.getElementById('imageagrandir2');

image.addEventListener('click', function() {  //Comprendre que: lorsque je click sur "image" alors fair ca. Si "document.addEventListener..." comprendre: lorsque je click sur la page alors faire ca...
	



var image = document.getElementById('imageagrandir');

var image2 = document.getElementById('imageagrandir2');

	

	if (image.style.width == "50%" ) {
		
		image.style.width = "100%";
		image2.style.display = "none";
	
	} else 
	
		image.style.width = "50%";
		image2.style.width=  "50%";
		image2.style.display = "block";
});

//// DEUXIEME IMAGE.....




image2.addEventListener('click', function() {
	
	var image = document.getElementById('imageagrandir');

	var image2 = document.getElementById('imageagrandir2');
	
	
	if (image2.style.width == "50%" ) {
		
		image2.style.width = "100%";
		image.style.display = "none";
		
	} else 
		
		image2.style.width = "50%";
		image.style.width = "50%";
		image.style.display = "block";
	
});




/*function agrandirImage(){
	
	if (image.style.width == "50%" ) {
		
		image.style.width = "100%";
		imageDeux.style.display = "none";
		
	} else 
		
		image.style.width = "50%";
		imageDeux.style.display = "block";
	
	
}*/






//SCROLL ANCRE

$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");
	if (the_id === '#') {
		return;
	}
	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});




function devisGratuit() {
	
	var btndevis = document.getElementById('section-devis__box');
	var sectiondevis = document.getElementById('sectionDevis');
	
	
	btndevis.addEventListener('click', function() {
		
		
		sectiondevis.style.display = "flex";
		
	})
}

devisGratuit();