/*
importar essa classe no html e usar o slider
segue um exemplo comentado de uso:

  //cria um slider com posições x, y e tamanho, que pode ser omitido tendo 100 por default
  var slider = new Slider(100,100,150);
  //seta a cor da barra e do controle do slider em rgb
  slider.setColor(255,0,0,0,255,0);


  function setup(){
    createCanvas(800,600);
  }

  function draw(){
    background(0);
    //para o slider funcionar
    slider.control();
  }

  //para acessar o valor de 0 a 100 do slider, use "slider.value"
  function mouseClicked() {
    console.log(slider.value);
  }

*/


class Slider {
  
  constructor(x,y,maximo=100,minimo=0,size=100) {
    this._x = x;
    this._y = y;
    this._level = x;
    this._size = size;
    this._mainColor = [150];
    this._secColor = [220];
    this._height = this._size/9
    this._radius = this._size/6
    this._max = this._x + this._size/2;
    this._min = this._x - this._size/2;
    this._maxValue = maximo;
    this._minValue = minimo;
    this._value = minimo + (maximo-minimo)*((this._level - this._min)/(this._size));
  }
  
  _display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(this._mainColor);
    rect(this._x,this._y,this._size,this._height);
    fill(this._secColor);
    ellipse(this._level,this._y,this._radius*2);
    fill(0);
    pop();
  }
  
  setColor(main1,main2,main3,sec1,sec2,sec3) {
    this._mainColor = [main1,main2,main3];
    this._secColor = [sec1,sec2,sec3];
  }
  
  control() {
    this._display();
    
    if(this._colision() && mouseIsPressed) {
      this._level = mouseX;
      if(mouseX > this._max)
        this._level = this._max;
      if(mouseX < this._min)
        this._level = this._min;
    
      this._setValue();
    }
  }
  
  _setValue() {
    this._value = this._minValue + (this._maxValue-this._minValue)*((this._level - this._min)/(this._size));
  }
	
	setValue(valor) {
		this._value = valor;
		this._level = ((this._value - this._minValue)/(this._maxValue-this._minValue))*this._size + this._min;
	}
  
  get value() {
    return Math.floor(this._value);
  }
  
  _colision() {
    return (!(mouseX < this._x - this._size/2 ||
             mouseX > this._x + this._size/2 ||
             mouseY < this._y - this._height/0.3 ||
             mouseY > this._y + this._height/1.8)) ||
            dist(mouseX,mouseY,this._level,this._y) <= this._radius;
    
  }
  
}