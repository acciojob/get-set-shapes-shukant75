//complete this code
class Rectangle {
	constractor(width,height){
	this._width=width;
	this._height=height;
	}
}
get width(){
return this._width;	
}
get height(){
	return this._height;
}
get area(){
	return this._width*this._height;
}
class Square extends Animal {
constructor(side){
	super(side,side);
}
	getPerimeter() {
    return this.side * 4;
  }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
