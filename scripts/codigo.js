var interfaceEditor;
//Estados e Botoes Menu
var estadoMenu = 1;
var estadoMouse = 0;
var estadoAnimal = 1;
var menu;
var btEditor,btTutorial,btCreditos,btPlay,btStop,btErase,btOpen,btHome,btSave,btPiano,btGuitar,btDrum;
var bgEditor,bgCreditos,creditos,bgNuvens,bgLogoMenu,bgCursor,bgLogo,bgMenu,idle_animal,rabo_animal,idle_lobo,idle_leao,idle_uni,rabo_lobo,rabo_leao,rabo_uni, imgCoelho, imgTartaruga;
var danca_animal,danca_lobo,danca_leao,danca_uni;
var moita_leao,moita_lobo,moita_uni;
var sdClick;
var xNuvem=0;
var xNuvem1=1300;
var angNota=3.14;
var framesX=0;
var estadoML=0,estadoMLo=0,estadoMU=0,estadoRLo=0,estadoRL=0,voltaML=1,voltaMLo=1,voltaMU=1;
var nota;
var vid = null;
var varAudio = 0;
p5.disableFriendlyErrors = true;
function preload(){
	imgCoelho = loadImage('image/Coelho.png');
	imgTartaruga = loadImage('image/Tartaruga.png');
	bgEditor = loadImage('image/telas/interface.png');
	bgCursor = ['cursor.png','cursorClick.png'];
	bgMenu = loadImage('image/telas/menu.png');
	bgNuvens = loadImage('image/telas/nuvens.png');
	bgLogoMenu = loadImage('image/telas/logo.png');
	bgCreditos= loadImage('image/telas/fundoCreditos.png');
	creditos = loadImage('image/telas/creditos.png');
	bgLogo = loadImage('image/telas/logoEditor.png');
	btAnimal = [loadImage('image/animal/LOBO1.png'),loadImage('image/animal/LOBO1.png')];
	btEditor = [loadImage('image/menu/EDT1.png'),loadImage('image/menu/EDT2.png')];
	btCreditos = [loadImage('image/menu/CRED1.png'),loadImage('image/menu/CRED2.png')];
	btTutorial = [loadImage('image/menu/TTR1.png'),loadImage('image/menu/TTR2.png')];
	btPlay = [loadImage("image/botoes/PLAY1.png"),loadImage("image/botoes/PLAY2.png")];
	btStop = [loadImage("image/botoes/STOP1.png"),loadImage("image/botoes/STOP2.png")];
	btErase = [loadImage("image/botoes/ERASE1.png"),loadImage("image/botoes/ERASE2.png")];
	btOpen = [loadImage("image/botoes/OPEN1.png"),loadImage("image/botoes/OPEN2.png")];
	btHome = [loadImage("image/botoes/HOME1.png"),loadImage("image/botoes/HOME2.png")];
	btSave = [loadImage("image/botoes/SAVE1.png"),loadImage("image/botoes/SAVE2.png")];
	btPiano = [loadImage("image/instrumentos/PIANO1.png"),loadImage("image/instrumentos/PIANO2.png")];
	btGuitar = [loadImage("image/instrumentos/GUITAR1.png"),loadImage("image/instrumentos/GUITAR2.png")];
	btDrum = [loadImage("image/instrumentos/DRUM1.png"),loadImage("image/instrumentos/DRUM2.png")];
	idle_lobo = [loadImage("image/animal/LOBO1.png"),loadImage("image/animal/LOBO2.png"),loadImage("image/animal/LOBO3.png")
	,loadImage("image/animal/LOBO4.png"),loadImage("image/animal/LOBO5.png"),loadImage("image/animal/LOBO6.png")];
	idle_leao = [loadImage("image/animal/LEAO1.png"),loadImage("image/animal/LEAO2.png"),loadImage("image/animal/LEAO3.png")
	,loadImage("image/animal/LEAO4.png"),loadImage("image/animal/LEAO5.png"),loadImage("image/animal/LEAO6.png")],
	idle_uni = [loadImage("image/animal/UNI1.png"),loadImage("image/animal/UNI2.png"),loadImage("image/animal/UNI3.png")
	,loadImage("image/animal/UNI4.png"),loadImage("image/animal/UNI5.png"),loadImage("image/animal/UNI6.png")];
	idle_animal = [idle_lobo,idle_leao,idle_uni];
	rabo_lobo = [loadImage("image/animal/raboLOBO1.png"),loadImage("image/animal/raboLOBO2.png"),loadImage("image/animal/raboLOBO3.png")
	,loadImage("image/animal/raboLOBO4.png"),loadImage("image/animal/raboLOBO5.png"),loadImage("image/animal/raboLOBO6.png")];
	rabo_leao = [loadImage("image/animal/raboLEAO1.png"),loadImage("image/animal/raboLEAO2.png"),loadImage("image/animal/raboLEAO3.png")
	,loadImage("image/animal/raboLEAO4.png"),loadImage("image/animal/raboLEAO5.png"),loadImage("image/animal/raboLEAO6.png")
	,loadImage("image/animal/raboLEAO7.png"),loadImage("image/animal/raboLEAO8.png"),loadImage("image/animal/raboLEAO9.png")
	,loadImage("image/animal/raboLEAO10.png"),loadImage("image/animal/raboLEAO11.png"),loadImage("image/animal/raboLEAO12.png")];
	rabo_uni = [loadImage("image/animal/raboUNI1.png"),loadImage("image/animal/raboUNI2.png"),loadImage("image/animal/raboUNI3.png")
	,loadImage("image/animal/raboUNI4.png"),loadImage("image/animal/raboUNI5.png"),loadImage("image/animal/raboUNI6.png")];
	rabo_animal = [rabo_lobo,rabo_leao,rabo_uni];
	danca_lobo = [loadImage("image/animal/dancaLOBO1.png"),loadImage("image/animal/dancaLOBO2.png"),loadImage("image/animal/dancaLOBO3.png")
	,loadImage("image/animal/dancaLOBO4.png"),loadImage("image/animal/dancaLOBO5.png"),loadImage("image/animal/dancaLOBO6.png")
	,loadImage("image/animal/dancaLOBO7.png"),loadImage("image/animal/dancaLOBO8.png"),loadImage("image/animal/dancaLOBO9.png")
	,loadImage("image/animal/dancaLOBO10.png"),loadImage("image/animal/dancaLOBO11.png"),loadImage("image/animal/dancaLOBO12.png")];
	danca_leao = [loadImage("image/animal/dancaLEAO1.png"),loadImage("image/animal/dancaLEAO2.png"),loadImage("image/animal/dancaLEAO3.png")
	,loadImage("image/animal/dancaLEAO4.png"),loadImage("image/animal/dancaLEAO5.png"),loadImage("image/animal/dancaLEAO6.png")
	,loadImage("image/animal/dancaLEAO7.png"),loadImage("image/animal/dancaLEAO8.png"),loadImage("image/animal/dancaLEAO9.png")
	,loadImage("image/animal/dancaLEAO10.png"),loadImage("image/animal/dancaLEAO11.png"),loadImage("image/animal/dancaLEAO12.png")
	,loadImage("image/animal/dancaLEAO13.png"),loadImage("image/animal/dancaLEAO14.png"),loadImage("image/animal/dancaLEAO15.png")
	,loadImage("image/animal/dancaLEAO16.png"),loadImage("image/animal/dancaLEAO17.png"),loadImage("image/animal/dancaLEAO18.png")
	,loadImage("image/animal/dancaLEAO19.png"),loadImage("image/animal/dancaLEAO20.png")];
	danca_uni = [loadImage("image/animal/dancaUNI1.png"),loadImage("image/animal/dancaUNI2.png"),loadImage("image/animal/dancaUNI3.png")
	,loadImage("image/animal/dancaUNI4.png"),loadImage("image/animal/dancaUNI5.png"),loadImage("image/animal/dancaUNI6.png")
	,loadImage("image/animal/dancaUNI7.png"),loadImage("image/animal/dancaUNI8.png"),loadImage("image/animal/dancaUNI9.png")
	,loadImage("image/animal/dancaUNI10.png")];
	danca_animal = [danca_lobo,danca_leao,danca_uni];
	nota=loadImage("image/telas/nota.png");
	moita_leao = [loadImage("image/animal/moitaLEAO1.png"),loadImage("image/animal/moitaLEAO2.png"),loadImage("image/animal/moitaLEAO3.png")
	,loadImage("image/animal/moitaLEAO4.png"),loadImage("image/animal/moitaLEAO5.png"),loadImage("image/animal/moitaLEAO6.png")
	,loadImage("image/animal/moitaLEAO7.png"),loadImage("image/animal/moitaLEAO8.png"),loadImage("image/animal/moitaLEAO9.png")
	,loadImage("image/animal/moitaLEAO10.png")];
	moita_lobo = [loadImage("image/animal/moitaLOBO1.png"),loadImage("image/animal/moitaLOBO2.png"),loadImage("image/animal/moitaLOBO3.png")
	,loadImage("image/animal/moitaLOBO4.png"),loadImage("image/animal/moitaLOBO5.png")];
	moita_uni = [loadImage("image/animal/moitaUNI1.png"),loadImage("image/animal/moitaUNI2.png"),loadImage("image/animal/moitaUNI3.png")
	,loadImage("image/animal/moitaUNI4.png"),loadImage("image/animal/moitaUNI5.png"),loadImage("image/animal/moitaUNI6.png")
	,loadImage("image/animal/moitaUNI7.png"),loadImage("image/animal/moitaUNI8.png"),loadImage("image/animal/moitaUNI9.png")
	,loadImage("image/animal/moitaUNI10.png"),loadImage("image/animal/moitaUNI11.png"),loadImage("image/animal/moitaUNI12.png")];
	rabo_lobo2 = [loadImage("image/animal/raboLOBO1.png"),loadImage("image/animal/raboLOBO2.png"),loadImage("image/animal/raboLOBO3.png")
	,loadImage("image/animal/raboLOBO4.png"),loadImage("image/animal/raboLOBO5.png"),loadImage("image/animal/raboLOBO6.png")];
	rabo_leao2 = [loadImage("image/animal/raboLEAO1.png"),loadImage("image/animal/raboLEAO2.png"),loadImage("image/animal/raboLEAO3.png")
	,loadImage("image/animal/raboLEAO4.png"),loadImage("image/animal/raboLEAO5.png"),loadImage("image/animal/raboLEAO6.png")
	,loadImage("image/animal/raboLEAO7.png"),loadImage("image/animal/raboLEAO8.png"),loadImage("image/animal/raboLEAO9.png")
	,loadImage("image/animal/raboLEAO10.png"),loadImage("image/animal/raboLEAO11.png"),loadImage("image/animal/raboLEAO12.png")];
	rabo_uni2 = [loadImage("image/animal/raboUNI1.png"),loadImage("image/animal/raboUNI2.png"),loadImage("image/animal/raboUNI3.png")
	,loadImage("image/animal/raboUNI4.png"),loadImage("image/animal/raboUNI5.png"),loadImage("image/animal/raboUNI6.png")];
	sdClick = new Howl({
		src: ['wav/efeitos/click.wav'],
			preload:true
		});
	fundo = new Howl({
		src: ['wav/efeitos/fundo.mp3'],
			preload:true
		});
}
function setup(){
	createCanvas(1260,680);
	frameRate(60);
	menu = new Menu();
}

function draw(){
	cursor('image/'+bgCursor[estadoMouse]);
	switch(estadoMenu){
		case 1:
			select("#container").style("display","none");
			menu.interfaceEditor.tocar=false;
			menu.desenharMenu();
			break;
		case 2:
			menu.desenharEditor();
			select("#container").style("display","block");
			if(menu.interfaceEditor.tocar){
				if(frameCount % menu.slider.value==0){
					menu.interfaceEditor.tocarColuna();
				}
			}
			break;
		case 3:
			menu.desenharTutorial();
			break;
		case 4:
			menu.desenharCredito();
			break;
	}
}
function mousePressed(){
	estadoMouse=1;
}
function mouseReleased(){
	estadoMouse=0;
}
function mouseClicked(){
	
    if(menu.ativado) {
        if(menu.botaoVoltar.colisao(mouseX,mouseY)){
            estadoMenu=1;
            if(vid!=null){
                vid.stop();
                vid=null;
                select("#tutorial").html('');
                select("#tutorial").style("display","none");
            }
        }

        if(estadoMenu==1 && menu.botaoEditor.colisao(mouseX,mouseY)) {
            divEscolhaAnimal.classList.remove('invisible');
            menu.ativado = false;
        }

		/*
        if(estadoMenu==1 && menu.botaoTutorial.colisao(mouseX,mouseY))
            estadoMenu=3;
		*/

        if(estadoMenu==1 && menu.botaoCredito.colisao(mouseX,mouseY))
            estadoMenu = 4;

        if(estadoMenu == 2 && menu.interfaceEditor.colisao(mouseX,mouseY))
            menu.desenharEditor();
    }
  
}


