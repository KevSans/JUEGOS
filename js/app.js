/*JavaScript*/
/*
	document
	window
	navigator
*/

window.addEventListener("load", function () {
	var elemento = document.getElementsByClassName("menu-button");
	$('.slider').slider({height: 200});
	$('.modal-trigger').leanModal();
	
	for (var i = 0; i < elemento.length; i++) {
	/*	elemento[i].addEventListener("click", function click(event) {

			var bloque = event.target.getAttribute("data-block");
			var block = $(bloque)

			$("html, body").scrollTop();


		});
	*/	elemento[i].addEventListener("click", function (event){
			console.log(event)
			var bloque=event.target.getAttribute("data-block");
			var block=$("#"+bloque).offset();
			$("html, body").animate({scrollTop: block.top-70}, "1000", "swing");
		});
	};
});


