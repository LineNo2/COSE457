var canvas = new fabric.Canvas('c');

// use MVC.js
var shape = new ShapeController(new Rectangle(10, 10, 100, 100));
shape.draw(canvas);
