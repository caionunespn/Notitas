class Animal{
	constructor(x,y,spr_idle,spr_rabo,spr_danca,estado){
		this.x = x;
		this.y = y;
		this.estadoAnimal = estado;
		this.idle = spr_idle;
		this.rabo = spr_rabo;
		this.danca = spr_danca;
		this.spr_rabo = this.rabo[this.estadoAnimal];
		this.spr_idle = this.idle[this.estadoAnimal];
		this.spr_danca = this.danca[this.estadoAnimal];
		for(var i = 0; i<6;i++){
			this.spr_idle[i].resize(350,0);
		}
		for(var i = 0; i<this.spr_rabo.length;i++){
			this.spr_rabo[i].resize(350,0);
		}
		for(var i = 0; i<this.spr_danca.length;i++){
			this.spr_danca[i].resize(350,0);
		}
		this.anima=true;
		this.estadoAnimacao = 1;
		this.estadoAnim = 0;
		this.estadoRabo = 0;
		this.estadoDanca = 0;
		this.vel=4;
		this.velRabo = 4;
	}
	show(){
		image(this.spr_rabo[this.estadoRabo],this.x,this.y);
		fill(30,30,30);
		ellipse(this.x+178,this.y+337,162,40);
		if(this.estadoAnimacao==1)
			image(this.spr_idle[this.estadoAnim],this.x,this.y);
		else
			image(this.spr_danca[this.estadoDanca],this.x,this.y);
		if(this.anima){
			if(frameCount%this.vel==0){
				if(this.estadoAnimacao==1)
					this.estadoAnim+=1;
			}
			if(this.estadoAnim==this.spr_idle.length-1){
				this.estadoAnim=0;
				this.anima=false;
			}
		}
		if(this.estadoAnimacao!=1 && frameCount%4==0){
			this.estadoDanca+=1;
		}
		if(this.estadoDanca==this.spr_danca.length-1){
			this.estadoDanca=0;
		}
		if(frameCount%this.velRabo == 0){
			this.estadoRabo+=1;
		}
		if(this.estadoRabo==this.spr_rabo.length-1){
			this.estadoRabo=0;
		}
		if(second()%3==0 && this.anima==false){
			this.anima=true;
		}
	}
	mudarAnimal(estado){
		this.estadoAnimal = estado;
		this.estadoAnim=0;
		this.estadoRabo=0;
		this.estadoDanca=0;
		this.spr_rabo = this.rabo[this.estadoAnimal];
		this.spr_idle = this.idle[this.estadoAnimal];
		this.spr_danca = this.danca[this.estadoAnimal];
		for(var i = 0; i<6;i++){
			this.spr_idle[i].resize(350,0);
		}
		for(var i = 0; i<this.spr_rabo.length;i++){
			this.spr_rabo[i].resize(350,0);
		}
		for(var i = 0; i<this.spr_danca.length;i++){
			this.spr_danca[i].resize(350,0);
		}
	}
}