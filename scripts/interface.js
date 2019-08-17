class Interface{
	constructor(){
		this.ativado = true;
		this.colunaAtual = 0;
		this.estadosAnteriores = null;
		this.colunasNotas = null;
		this.numeroColunas = 16;
		this.estadoInstrumento = 0;
		this.instrumento = new Instrumento(this.estadoInstrumento);
		this.oitava = this.instrumento.oitava();
		//Criar Botoes
		this.botoes = [];
		this.animal = new Animal(885,270,idle_animal,rabo_animal,danca_animal,estadoAnimal);
		this.btPlay = new Botoes(545,5,68,68,btPlay);
		this.btStop = new Botoes(625,5,68,68,btStop);
		this.btErase = new Botoes(955,5,68,68,btErase);
		this.btAbrir = new Botoes(875,5,68,68,btOpen);
		this.btSalvar = new Botoes(1035,5,68,68,btSave);
		this.btPiano = new Botoes(946,108,68,68,btPiano);
		this.btPiano.selecionado=true;
		this.btPiano.estadoImg=1;
		this.btViolao = new Botoes(1026,108,68,68,btGuitar);
		this.btViolao.selecionado=false;
		this.btBateria = new Botoes(1111,108,68,68,btDrum);
		this.btBateria.selecionado=false;
		this.botoes = [this.btPlay,this.btStop,this.btErase,this.btPiano,this.btViolao,this.btBateria,this.btSalvar, this.btAbrir];
		this.tocar = false;
	}
	adicionar(){
		//Criar Notas
		if(this.colunasNotas==null){
			this.colunasNotas= new Array(this.numeroColunas);
			for(var i = 0; i < this.colunasNotas.length; i++){
				this.colunasNotas[i] = new Array(7);
				for(var j = 0; j < this.colunasNotas[i].length; j++){
					var nota = this.oitava[j];
					var nome;
					var classe;
					if(this.estadoInstrumento!=2){
						switch(j){
							case 0:
								nome= "SI";
								classe = "si";
								break;
							case 1:
								nome= "LÁ";
								classe = "la";
								break;
							case 2:
								nome= "SOL";
								classe = "sol";
								break;
							case 3:
								nome= "FÁ";
								classe = "fa";
								break;
							case 4:
								nome= "MI";
								classe = "mi";
								break;
							case 5:
								nome= "RÉ";
								classe = "re";
								break;
							case 6:
								nome= "DÓ";
								classe = "do";
								break;
						}
					}
					this.colunasNotas[i][j] = new Notas((10+(i*81)),(10+(j*75)),nome,nota, classe);	
					this.colunasNotas[i][j].botao.parent('container');
				}
			}
		}
	}
	mostrarBotoes(){
		//Desenha os botoes
		for(var i = 0; i<this.botoes.length;i++){
			this.botoes[i].show();
		}
		this.animal.show();
	}
	tocarColuna(){
		if(this.estadosAnteriores==null){
			this.estadosAnteriores = new Array(this.colunasNotas.length);
			for(var i = 0; i < this.numeroColunas; i++){
				this.estadosAnteriores[i] = new Array(7);
				for(var j = 0; j < 7; j++){
					this.estadosAnteriores[i][j] = this.colunasNotas[i][j].estadoImg;
				}
			}
		}
		for (var i = 0; i < this.colunasNotas[this.colunaAtual].length; i++) {
			this.colunasNotas[this.colunaAtual][i].play();
            this.colunasNotas[this.colunaAtual][i].botao.addClass('tocando');
            if(this.colunasNotas[this.colunaAtual][i].selecionado) {
                this.colunasNotas[this.colunaAtual][i].estadoImg = 2;
            }
            if(this.colunaAtual!=0){
                    this.colunasNotas[this.colunaAtual-1][i].botao.removeClass('tocando');
                    this.colunasNotas[this.colunaAtual-1][i].estadoImg = this.estadosAnteriores[this.colunaAtual-1][i];
		    } else {
				this.colunasNotas[this.numeroColunas-1][i].botao.removeClass('tocando');
				document.querySelector("#container").scrollTo(0,0);
			}
		}
			
          if(this.colunaAtual==9) {
			  document.querySelector("#container").scrollTo(this.colunasNotas[this.colunaAtual][0].x,0);
		  }
		
		this.colunaAtual++;
		if(this.colunaAtual>=this.colunasNotas.length){
			this.colunaAtual=0;
		}
	}
	novoInstrumento(){
		this.instrumento = new Instrumento(this.estadoInstrumento);
		this.oitava = this.instrumento.oitava();
		for(var i = 0; i < this.colunasNotas.length; i++){
			for(var j = 0; j < this.colunasNotas[i].length; j++){
				this.colunasNotas[i][j].nota = this.oitava[j];
				if(this.estadoInstrumento==2) {
					this.colunasNotas[i][j].botao.addClass('bateria');
				} else {
					this.colunasNotas[i][j].botao.removeClass('bateria');
				}
			}
		}
	}
	getAudios(indice){
		var enderecos;
		switch(this.estadoInstrumento){
			case 0:
				enderecos = ['wav/piano/b1.wav','wav/piano/a1.wav','wav/piano/g1.wav','wav/piano/f1.wav',
				'wav/piano/e1.wav','wav/piano/d1.wav','wav/piano/c1.wav','wav/piano/nulo.wav'];
				break;
			case 1:
			enderecos = ['wav/violao/b1.wav','wav/violao/a1.wav','wav/violao/g1.wav','wav/violao/f1.wav',
				'wav/violao/e1.wav','wav/violao/d1.wav','wav/violao/c1.wav','wav/violao/nulo.wav'];
				break;
			case 2:
				enderecos = ['wav/bateria/bassDrum.wav','wav/bateria/snareDrum.wav','wav/bateria/hi-hat.wav','wav/bateria/cymbal.wav',
				'wav/bateria/hiTomTom.wav','wav/bateria/mdTomTom.wav','wav/bateria/flTomTom.wav','wav/bateria/nulo.wav'];
		}
		var audioJuntos = new Array(7);
		for (var i = 0; i < this.colunasNotas[indice].length; i++) {
			if(this.colunasNotas[indice][i].selecionado){
				for(var j = 0;j<audioJuntos.length;j++){
					if (audioJuntos[j]==null){
						audioJuntos[j] = enderecos[i];
						break;
					}
				}
			}else{
				for(var j = 0;j<audioJuntos.length;j++){
					if (audioJuntos[j]==null){
						audioJuntos[j] = enderecos[7];
						break;
					}
				}
			}
		}
		return audioJuntos;
	}
	salvar(){
		console.log("Exportando...");
		var audios = new Array(10);
		var audioJuntos = [];
		for(var i = 0; i<audios.length;i++){
				audioJuntos[i] = this.getAudios(i);
		}
		setTimeout(function(){
		for(var i = 0; i<4;i++){
			var nome = 'coluna';	
			let audio = new Crunker();	
			audio.fetchAudio(audioJuntos[i][0], audioJuntos[i][1],audioJuntos[i][2],audioJuntos[i][3],
				audioJuntos[i][4],audioJuntos[i][5],audioJuntos[i][6])
			.then(buffers => audio.mergeAudio(buffers))
			.then(merged => audio.export(merged, 'audio/wav'))
			.then(output => audio.download(output.blob,nome))
		}},10000);
		setTimeout(function(){
		for(var i = 4; i<10;i++){
			var nome = 'coluna';	
			let audio = new Crunker();	
			audio.fetchAudio(audioJuntos[i][0], audioJuntos[i][1],audioJuntos[i][2],audioJuntos[i][3],
				audioJuntos[i][4],audioJuntos[i][5],audioJuntos[i][6])
			.then(buffers => audio.mergeAudio(buffers))
			.then(merged => audio.export(merged, 'audio/wav'))
			.then(output => audio.download(output.blob,nome))
		}},20000);
		clearTimeout();
		var enderecosFinal = new Array(10);
		setTimeout(function(){
			for(var i = 0; i<10;i++){
					var nome = "coluna"+i;
					var elem = document.getElementById(nome);
					enderecosFinal[i]=elem.href;
				}
			console.log(enderecosFinal);
			//
			//	enderecosFinal[4],enderecosFinal[5],enderecosFinal[6],enderecosFinal[7],enderecosFinal[8]
			//	,enderecosFinal[0]
			let audio = new Crunker();	
			audio.fetchAudio(enderecosFinal[0],enderecosFinal[1],enderecosFinal[2],enderecosFinal[3])
			.then(buffers => audio.concatAudio(buffers))
			.then(concat => audio.export(concat, 'audio/wav'))
			.then(output => audio.download(output.blob,"Musica"))
		},30000);
		setTimeout(function(){
			//	enderecosFinal[4]
			var nome = "Musica10"
			var elemMus = document.getElementById(nome);
			let audio = new Crunker();	
			audio.fetchAudio(elemMus.href,enderecosFinal[4],enderecosFinal[5],enderecosFinal[6],enderecosFinal[7],
				enderecosFinal[8],enderecosFinal[9])
			.then(buffers => audio.concatAudio(buffers))
			.then(concat => audio.export(concat, 'audio/wav'))
			.then(output => audio.downloader(output.blob,"Musica"))
		},50000);
		return true;
	}
	acoes(indice){
		switch(indice){
			case 0:
				if(this.botoes[0].selecionado)	{
					this.tocar=true;
					this.animal.estadoAnim=0;
					this.animal.estadoRabo=0;
					this.animal.estadoDanca=0;
					this.animal.estadoAnimacao=2;
				}else{
					this.tocar=false;
					this.animal.estadoAnim=0;
					this.animal.estadoRabo=0;
					this.animal.estadoDanca=0;
					this.animal.estadoAnimacao=1;
					//this.estadosAnteriores = null;
				}
				break;
			case 1:
				if(this.botoes[1].selecionado){
					this.tocar=false;
					this.animal.estadoAnim=0;
					this.animal.estadoRabo=0;
					this.animal.estadoDanca=0;
					this.animal.estadoAnimacao=1;
					for (var i = 0; i < this.colunasNotas[this.colunaAtual].length; i++) {
						if(this.colunaAtual!=0){
							this.colunasNotas[this.colunaAtual-1][i].botao.removeClass('tocando');
							this.colunasNotas[this.colunaAtual-1][i].estadoImg = this.estadosAnteriores[this.colunaAtual-1][i];
						}
					}
					this.colunaAtual = 0;
					document.querySelector("#container").scrollTo(0,0);
					this.estadosAnteriores = null;
					this.botoes[0].selecionado=false;
					this.botoes[1].selecionado=false;
				}
				break;
			case 2:
				if(this.botoes[2].selecionado){
					//confirmação
					var modalConfirm = document.querySelector('#confirm');
					modalConfirm.classList.remove('invisible');
					
					var btnSim = document.querySelector('#btn-sim');
					btnSim.addEventListener('click', () => {
						this.apagaNotas();
						modalConfirm.classList.add('invisible');
					});
					
					var btnNao = document.querySelector('#btn-nao');
					btnNao.addEventListener('click', function() {
						modalConfirm.classList.add('invisible')
					});
					
					this.botoes[2].selecionado=false;
				}
				break;
			case 3:
				if(this.botoes[3].selecionado){
					this.botoes[4].selecionado=false;
					this.botoes[5].selecionado=false;
					if(this.estadoInstrumento!=0){
						this.estadoInstrumento = 0;
						this.novoInstrumento();
					}
				}
				break;
			case 4:
				if(this.botoes[4].selecionado){
					this.botoes[3].selecionado=false;
					this.botoes[5].selecionado=false;
					if(this.estadoInstrumento!=1){
						this.estadoInstrumento = 1;
						this.novoInstrumento();
					}
				}
				break;
			case 5:
				if(this.botoes[5].selecionado){
					this.botoes[3].selecionado=false;
					this.botoes[4].selecionado=false;
					if(this.estadoInstrumento!=2){
						this.estadoInstrumento = 2;
						this.novoInstrumento();
					}
				}
				break;
			case 6:
				modalToogle();
				this.botoes[6].selecionado = false;
				break;
			case 7:
				abrirToogle();
				this.botoes[7].selecionado = false;
				break;
		}
	}
	colisao(x,y){
		if(this.ativado) {
			for(var i = 0; i < this.botoes.length; i++){
				if(this.botoes[i].colisao(x,y)){
					this.acoes(i);
					return true;
				}
			}
		}
		return false;
	}
	
	apagaNotas() {
		this.tocar=false;
		this.colunaAtual = 0;
		this.botoes[0].selecionado=false;
		for(var i = 0; i < this.colunasNotas.length; i++){
			for(var j = 0; j < this.colunasNotas[i].length; j++){
				this.colunasNotas[i][j].setaEstado(false);
			}
		}
		this.estadosAnteriores = null;
	}
	
	setMusicaAtual(musica) {
		this.botoes[3 + musica.instrumento].selecionado = true;
		this.acoes(3 + musica.instrumento);
		for(var i = 0; i < this.colunasNotas.length; i++) {
			for(var j = 0; j < this.colunasNotas[i].length; j++) {
				this.colunasNotas[i][j].setaEstado(musica.colunas[i][j]);
			}
		}
	}
}