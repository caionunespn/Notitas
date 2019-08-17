class Menu{
	constructor(){
		this.botaoEditor = new Botoes(505,255,232,83,btEditor);
		this.botaoCredito = new Botoes(505,360,232,83,btCreditos);
		//this.botaoTutorial = new Botoes(505,325,232,83,btTutorial);
		this.botaoVoltar = new Botoes(1115,5,68,68,btHome);
        this.slider = new Slider(1060,235,10,30,120);
        this.slider.setColor(255,70,70,83,132,255);
		this.interfaceEditor = new Interface(this.slider);
		this.interfaceEditor.adicionar();
        this.ativado = true;
	}
	desenharMenu(){
		clear();
		background(bgMenu);
		if(!fundo.playing())
			fundo.play();
		image(bgNuvens,xNuvem,0);
		image(bgNuvens,xNuvem1,0);
		image(bgLogoMenu,410,100);
		if(frameCount%2==0){
			xNuvem-=2;
			xNuvem1-=2;
		}
		if(xNuvem1==-1450){
			xNuvem1=1450;
		}
		if(xNuvem==-1450){
			xNuvem=1450;
		}
		if(angNota==0){
			angNota==3.14;
		}
		else{
			angNota=0;
		}
		push();
		imageMode(CENTER);
		if(frameCount%50==0)
			framesX+=10;
		var step = framesX % 20;
		var angle = map(step, 0, 20, -PI/8, PI/6);
		var cos_a = cos(angle);
		var sin_a = sin(angle);
		translate(835, 180);
		applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
		image(nota,0,0);
		pop();
		if(frameCount%4==0){
			estadoML+=voltaML;
			estadoMU+=voltaMU;
			estadoRLo+=1;
			estadoRL+=1;
		}else if(frameCount%5==0){
			estadoMLo+=voltaMLo;
		}
		if(estadoML==9){
			voltaML=-1;
		}
		if(estadoML<=0){
			voltaML=1;
		}
		if(estadoMLo==4){
			voltaMLo=0;
			setTimeout(function(){voltaMLo=-1},2000);
		}
		if(estadoMLo<=0){
			estadoMLo=0;
			voltaMLo=1;
		}
		if(estadoMU==11){
			voltaMU=0;
			setTimeout(function(){voltaMU=-1},4000);
		}
		if(estadoMU<=0){
			estadoMU=0;
			voltaMU=1;
		}
		if(estadoRLo==5){
			estadoRLo=0;
		}
		if(estadoRL==11){
			estadoRL=0;
		}
		rabo_leao2[estadoRL].resize(200,0);
		image(rabo_leao2[estadoRL],520,390);
		moita_leao[estadoML].resize(160,0);
		image(moita_leao[estadoML],530,430);
		rabo_lobo2[estadoRLo].resize(200,0);
		image(rabo_lobo2[estadoRLo],330,470);
		moita_lobo[estadoMLo].resize(180,0);
		image(moita_lobo[estadoMLo],350,500);
		rabo_uni2[estadoRLo].resize(200,0);
		image(rabo_uni2[estadoRLo],680,475);
		moita_uni[estadoMU].resize(180,0);
		image(moita_uni[estadoMU],700,500);
		this.botaoEditor.selecionado=false;
		//this.botaoTutorial.selecionado=false;
		this.botaoCredito.selecionado=false;
		this.botaoVoltar.selecionado=false;
		this.botaoEditor.show();
		//this.botaoTutorial.show();
		this.botaoCredito.show();
	}
	desenharEditor(){
		clear();
		background(bgEditor);
		if(fundo.playing()){
			fundo.stop();
		}
		image(bgLogo,10,5);
		image(imgCoelho, 1148,210);
		image(imgTartaruga, 925,208);
		this.botaoVoltar.show();
		this.interfaceEditor.mostrarBotoes();
        this.slider.control();
	}
	/*
	desenharTutorial(){
		clear();
		background(bgEditor);
		this.botaoVoltar.show();
		if(fundo.playing()){
			fundo.stop();
		}
		if(vid==null){
			vid = createVideo('video/tutorial.mp4',this.playVideo);
			vid.id("video");
			vid.showControls();
			vid.parent('tutorial');
			select("#tutorial").style("display","block");
		}
	}
	playVideo(){
		vid.play();
	}
	*/
	desenharCredito(){
		clear();
		background(bgCreditos);
		image(creditos,290,100);
		this.botaoVoltar.show();
		
	}
}