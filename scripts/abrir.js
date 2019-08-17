var lista = document.querySelector("#lista");

function criaLinha(musica, id) {
  return `
    <tr>
      <td>${musica.nome}</td>
      <td><span class="btn-abrir" onclick="adicionaEventoAbrir(${id})"></span></td>
      <td><span class="btn-excluir" onclick="adicionaEventoExcluir(${id})"></span></td>
    </tr>
    `
}

function addLinha(musica, id) {
  lista.innerHTML += criaLinha(musica,id);
}

function adicionaEventoAbrir(id) {
    menu.interfaceEditor.setMusicaAtual(tbMusicas[id]);
	//alterar valor do slider
	menu.slider.setValue(tbMusicas[id].andamento);
	abrirToogle();
}

function adicionaEventoExcluir(id) {
	document.querySelector('#confirm-exclusao').classList.remove('invisible');
	
	document.querySelector('#btn-excluir').onclick = function() {
		tbMusicas.splice(id, 1);
		localStorage.setItem("tbMusicas", JSON.stringify(tbMusicas));
		//refazer lista
		lista.innerHTML = '';
		listaMusicas();
		document.querySelector('#confirm-exclusao').classList.add('invisible');
	};
}

document.querySelector('#btn-nao-excluir').addEventListener('click', function() {
	document.querySelector('#confirm-exclusao').classList.add('invisible');
});

function listaMusicas() {
  for(var i = 0; i < tbMusicas.length; i++) {
    addLinha(tbMusicas[i], i);
  }
}

listaMusicas();

//abrir e fechar janela modal
var buttonCloseAbrir = document.querySelector('#cancel-abrir');
buttonCloseAbrir.addEventListener('click', abrirToogle);

function abrirToogle() {
    let modal = document.querySelector('#abrir');
    modal.classList.toggle('invisible');
	menu.interfaceEditor.ativado = !menu.interfaceEditor.ativado;
}