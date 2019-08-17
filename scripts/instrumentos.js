class Instrumento{
	constructor(codInstrumento){
		this.codInstrumento = codInstrumento;
	}
	oitava(){
		switch (this.codInstrumento){
			case 0:
				var oitava = [];
				var c,d,e,f,g,a,b;
				c = new Howl({
						src: ['wav/piano/c1.wav'],
						preload:true
					});
				d = new Howl({
						src: ['wav/piano/d1.wav'],
						preload:true
					});
				e = new Howl({
						src: ['wav/piano/e1.wav'],
						preload:true
					});
				f = new Howl({
						src: ['wav/piano/f1.wav'],
						preload:true
					});
				g = new Howl({
						src: ['wav/piano/g1.wav'],
						preload:true
					});
				a = new Howl({
						src: ['wav/piano/a1.wav'],
						preload:true
					});
				b = new Howl({
						src: ['wav/piano/b1.wav'],
						preload:true
					});
				oitava = [b,a,g,f,e,d,c];
				return oitava;
				break;
			case 1:
				var oitava = [];
				var c,d,e,f,g,a,b;
				c = new Howl({
						src: ['wav/violao/c1.wav'],
						preload:true
					});
				d = new Howl({
						src: ['wav/violao/d1.wav'],
						preload:true
					});
				e = new Howl({
						src: ['wav/violao/e1.wav'],
						preload:true
					});
				f = new Howl({
						src: ['wav/violao/f1.wav'],
						preload:true
					});
				g = new Howl({
						src: ['wav/violao/g1.wav'],
						preload:true
					});
				a = new Howl({
						src: ['wav/violao/a1.wav'],
						preload:true
					});
				b = new Howl({
						src: ['wav/violao/b1.wav'],
						preload:true
					});
				oitava = [b,a,g,f,e,d,c];
				return oitava;
				break;
			case 2:
				var oitava = [];
				var c,d,e,f,g,a,b;
				c = new Howl({
						src: ['wav/bateria/flTomTom.wav'],
						preload:true
					});
				d = new Howl({
						src: ['wav/bateria/mdTomTom.wav'],
						preload:true
					});
				e = new Howl({
						src: ['wav/bateria/hiTomTom.wav'],
						preload:true
					});
				f = new Howl({
						src: ['wav/bateria/cymbal.wav'],
						preload:true
					});
				g = new Howl({
						src: ['wav/bateria/hi-hat.wav'],
						preload:true
					});
				a = new Howl({
						src: ['wav/bateria/snareDrum.wav'],
						preload:true
					});
				b = new Howl({
						src: ['wav/bateria/bassDrum.wav'],
						preload:true
					});
				oitava = [b,a,g,f,e,d,c];
				return oitava;
				break;
		}
	}

}