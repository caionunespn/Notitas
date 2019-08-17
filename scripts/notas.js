class Notas extends botoesNotas{
	constructor(x,y,nome,nota,classe){
		super(x,y,68,nome,classe);
		this.nota = nota;
	}
	play(){
		if(this.selecionado){
			this.nota.play();
		}
	}
}