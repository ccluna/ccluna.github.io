/* eslint-disable no-undef */
//EXIBIR A TRANSCRIÇÃO


//AÇÕES NO BOTÃO PARA VOLTAR AO COMEÇO DA PÁGINA
btn = document.getElementById('up-btn');

var myScrollFunc = function() {
	var y = window.scrollY;
	if (y >= 400) {
		btn.style.display = 'block';
	} else {
		btn.style.display = 'none';
	}
};

window.addEventListener('scroll', myScrollFunc);

// CARD
window.onload = function() {
    var card = window.document.getElementsByClassName(".card-content") ;
     card.addEventListener("mouseover", function() {
             document.getElementsByClassName(".card-title").style.color = 'blue'
    });
	card.addEventListener("mouseout", function() {
		document.getElementsByClassName(".card-title").style.color = 'black'
	});
}

var read = window.document.getElementsByClassName('.read');
read.addEventListener('mouseover', function(){
	document.getElementsByClassName('.dot-arrow').style.display = 'inline'
});
read.addEventListener('mouseout', function() {
	document.getElementsByClassName('.dot-arrow').style.display = 'none'
});

