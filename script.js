// implict import that this use Rectangle and ShapeController clas
var canvas = new fabric.Canvas('c');


var view = new ShapeView(canvas);
var controller = new ShapeController(view);

canvas.on('mouse:down', function (options) {
    var pointer = canvas.getPointer(options.e);
    controller.onMouseDown(pointer.x, pointer.y);
});

var rectangle = new RectangleModel(
    100, 100, 'red', 'black', '1', 1, 100, 100
);
var circle = new CircleModel(
    200, 200, 'blue', 'red', '2', 1, 50
);

var elipse = new ElipseModel(
    300, 300, 'black', 'blue', '3', 199, 100, 50
);

controller.addShape(rectangle);
controller.addShape(circle);
controller.addShape(elipse);

controller.drawShapes();

controller.selectShape(rectangle);
console.log(controller.getSelectedShape());
controller.drawSelectedShape();
