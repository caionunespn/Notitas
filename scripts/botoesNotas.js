class botoesNotas{
	constructor(x, y,raio,nome,classe){
		this.x = x;
		this.botao = createButton('');
		this.botao.class("bottoes");
		this.botao.position(x,y);
		this.raio = raio;
		this.botao.html(nome);
		this.botao.addClass(classe)
		this.estadoImg = 0;
		this.selecionado = false;
        this.botao.mousePressed(() => {
          if(this.selecionado==false){
              this.estadoImg=1;
              this.botao.addClass('selecionado');
              sdClick.play();
              this.selecionado=true;
          }else{
              this.estadoImg=0;
              this.botao.removeClass('selecionado');
              sdClick.play();
              this.selecionado=false;
          }
        });
	}
  
    setaEstado(estado) {
      if(estado){
              this.estadoImg=1;
              this.botao.addClass('selecionado');
              this.selecionado=true;
          }else{
              this.estadoImg=0;
              this.botao.removeClass('selecionado');
              this.selecionado=false;
          }
    }
}