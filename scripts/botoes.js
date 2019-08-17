class Botoes{
	constructor(x, y,w,h,sprite){
		this.posicao = createVector(x,y);
		this.tamanho = createVector(w,h);
		this.sprite = sprite;
		this.estadoImg = 0;
		this.selecionado = false;
	}
	show(){
		if(mouseX >= this.posicao.x && mouseX<=(this.posicao.x+this.tamanho.x) 
		&& mouseY>=this.posicao.y && mouseY<=(this.posicao.y+this.tamanho.y)){
			this.estadoImg=1;
		}else{
			if(this.selecionado){
				this.estadoImg=1;
			}else{
				this.estadoImg=0;
			}
		}
		image(this.sprite[this.estadoImg],this.posicao.x,this.posicao.y);
	}
	colisao(x,y){
		if(x >= this.posicao.x && x<=(this.posicao.x+this.tamanho.x) 
		&& y>=this.posicao.y && y<=(this.posicao.y+this.tamanho.y)){
			if(this.selecionado==false){
				this.selecionado=true;
			}else{
				this.selecionado=false;
			}
			sdClick.play();
			return true;
		}
		return false;
	}
}