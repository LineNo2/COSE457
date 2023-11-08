// // implict import that this use Rectangle and ShapeController clas
// var canvas = new fabric.Canvas('c');


// var view = new ShapeView(canvas);
// var controller = new ShapeController(view);

// var toolbarView = new ToolsView(document.getElementById('toolbar'),
//     (tool) => {
//         toolbarController.selectTool(tool);
//     }
// );

// var toolbarController = new ToolController(
//     toolbarView
// );

// toolbarController.addTool(new RectangleTool());
// toolbarController.addTool(new CircleTool());
// toolbarController.addTool(new EllipseTool());
// toolbarController.drawTools();

// canvas.on('mouse:down', function (options) {
//     var pointer = canvas.getPointer(options.e);
//     var x = pointer.x;
//     var y = pointer.y;
//     var shape: AbstractShapeModel | null = null;
//     if (toolbarController.getSelectedTool() == null) {
//         controller.onMouseDown(x, y);
//         return;
//     }
//     var tool = toolbarController.getSelectedTool();
//     if (tool instanceof RectangleTool) {
//         shape = new RectangleModel(
//             x, y, 'red', 'black', '1', 1, 100, 100
//         );
//     }
//     else if (tool instanceof CircleTool) {
//         shape = new CircleModel(
//             x, y, 'blue', 'red', '2', 1, 50
//         );
//     }
//     else if (tool instanceof EllipseTool) {
//         shape = new ElipseModel(
//             x, y, 'black', 'blue', '3', 199, 100, 50
//         );

//     }
//     else {
//         throw new Error("Unknown tool type");
//     }
//     controller.addShape(shape);
//     controller.drawShapes();
// });

// var rectangle = new RectangleModel(
//     100, 100, 'red', 'black', '1', 1, 100, 100
// );
// var circle = new CircleModel(
//     200, 200, 'blue', 'red', '2', 1, 50
// );

// var elipse = new ElipseModel(
//     200, 200, 'black', 'blue', '3', 199, 100, 50
// );

// controller.addShape(rectangle);
// controller.addShape(circle);
// controller.addShape(elipse);

// controller.drawShapes();

// controller.selectShape(rectangle);
// console.log(controller.getSelectedShape());
// controller.drawSelectedShape();
