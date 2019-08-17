//abrir e fechar janela modal
var buttonClose = document.querySelector('#cancel-salvar');
buttonClose.addEventListener('click', modalToogle);

function modalToogle() {
    let modal = document.querySelector('#salvar');
    modal.classList.toggle('invisible');
	menu.interfaceEditor.ativado = !menu.interfaceEditor.ativado;
}

//exportar
/*
var buttonExport = document.querySelector('#btn-export');
buttonExport.addEventListener('click', function() {
	menu.interfaceEditor.salvar();
});
*/

//localstorage

//setando variável global
var tbMusicas = localStorage.getItem("tbMusicas");
tbMusicas = JSON.parse(tbMusicas);
console.log(tbMusicas);
if(tbMusicas == null)
	tbMusicas = [];



//form para adicionar no local storage
var form = document.querySelector('.modal form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	var nome = document.querySelector('#nome');
	var musica = formataDados(nome.value);
	//verificar se nome é igual, se for sobreescreve objeto
	tbMusicas.push(musica);
    //falta inserir na tabela
    addLinha(musica, tbMusicas.length-1);
	
	localStorage.setItem("tbMusicas", JSON.stringify(tbMusicas));
	modalToogle();
	console.log(tbMusicas);
	
});

function formataDados(nome) {
	var colunas = [];
	colunas = colunas.concat(menu.interfaceEditor.colunasNotas);
	
	for(var i = 0; i < colunas.length; i++) {
		colunas[i] = colunas[i].map(function(nota) {
			return nota.selecionado;
		});
	}
	
	dados = {
		nome: nome,
		colunas: colunas,
		andamento: menu.slider.value,
		instrumento: menu.interfaceEditor.estadoInstrumento
	}
	
	return dados;
}