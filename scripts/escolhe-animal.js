var divEscolhaAnimal = document.querySelector('#escolhe-animal');

function fechaEscolha() {
  divEscolhaAnimal.classList.add('invisible');
  menu.ativado = true;
}

function entraEditor() {
  estadoMenu=2;
  divEscolhaAnimal.classList.add('invisible');
  menu.ativado = true;
}

var selecaoUni = document.querySelector('#selecao-uni');
var selecaoLeao = document.querySelector('#selecao-leao');
var selecaoLobo = document.querySelector('#selecao-lobo');

function mudaEstado(estado){
	menu.interfaceEditor.animal.mudarAnimal(estado);
	var atual = document.querySelector("#animal-atual");
	switch(estado){
		case 0:
			atual.src="image/popup/Lobo.png";
            selecaoUni.src="image/popup/Uni2.png";
            selecaoLeao.src="image/popup/Lion2.png"
            selecaoLobo.src="image/popup/Lobo1.png"
			break;
		case 1:
			atual.src="image/popup/Lion.png";
            selecaoUni.src="image/popup/Uni2.png";
            selecaoLeao.src="image/popup/Lion1.png"
            selecaoLobo.src="image/popup/Lobo2.png"
			break;
		case 2:
			atual.src="image/popup/Uni.png";
            selecaoUni.src="image/popup/Uni1.png";
            selecaoLeao.src="image/popup/Lion2.png"
            selecaoLobo.src="image/popup/Lobo2.png"
			break;
	}
}