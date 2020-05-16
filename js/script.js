$(window).scroll(function(){
	$('nav').toggleClass('active', $(this).scrollTop() > 60 );
});


let navbar = document.querySelector(".navbar");
let navlink = document.querySelectorAll(".nav-link");

navlink.forEach(function (event) {
event.addEventListener("click", function () {
  navbar.querySelector(".active").classList.remove("active");
  event.classList.add("active");
});
});


var kalimat = [
	"goal",
	"dream",
	"passion"
];

var index = 0;
var indexKe = 0;
var type;
var text = document.querySelector('.typer');

function Ketik() {
	var textType = kalimat[index].substring(0, indexKe + 1);
	text.innerHTML = textType;
	indexKe++;

	if(textType === kalimat[index]) {
		clearInterval(type);
		setTimeout(function() {
			type = setInterval(Hapus, 100);	
		}, 1000);
	}
 }


function Hapus() {
	var textType = kalimat[index].substring(0, indexKe - 1);
	text.innerHTML = textType;
	indexKe--;

	if(textType === '') {
		clearInterval(type);

		if(index == (kalimat.length - 1))
			index = 0;
		else 
			index++;

			indexKe = 0;

		setTimeout(function() {
			type = setInterval(Ketik, 150);
		}, 800);
	}
}

type = setInterval(Ketik, 150);


$(document).ready(function () {
     $('.click').on('click', function (e) {
         e.preventDefault();

         var href = $(this).attr('href');
         var elm = $(href);

         $('html, body').stop().animate({
             'scrollTop': $(elm).offset().top - 50
         }, 900);
     });
 });


$(document).ready(function() {
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 70) {
	        $('.btnTop').fadeIn();
	    } else {
	        $('.btnTop').fadeOut();
	    }
	});

	 $('.btnTop').click(function(){
        $('html, body').animate({scrollTop : 0},800, );
    });
});
