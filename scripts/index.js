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
