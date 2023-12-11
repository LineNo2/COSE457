// // implict import that this use Rectangle and ShapeController clas
// var _upperCanvas = new fabric.Canvas('upper-c');
// var _canvas = new fabric.Canvas('c',);

// var canvas = new FabricCanvas(_canvas, _upperCanvas);

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
//     var shape;
//     if (toolbarController.getSelectedTool() == null) {
//         controller.onMouseDown(x, y);
//         return;
//     }
//     var tool = toolbarController.getSelectedTool();
//     var index = controller.getCurrentZIndex();
//     var name = index.toString();
//     if (tool instanceof RectangleTool) {
//         shape = new RectangleModel(
//             x, y, 'red', 'black', name + '-Rect', index, 100, 100
//         );
//     }
//     else if (tool instanceof CircleTool) {
//         shape = new CircleModel(
//             x, y, 'blue', 'red', name + '-Circle', index, 50
//         );
//     }
//     else if (tool instanceof EllipseTool) {
//         shape = new ElipseModel(
//             x, y, 'black', 'blue', name + '-Elipse', index, 100, 50
//         );

//     }
//     else {
//         throw new Error("Unknown tool type");
//     }
//     controller.addShape(shape);
//     controller.drawShapes();
//     toolbarController.resetSelectedTool();
// });

// // controller.addShape(rectangle);
// // controller.addShape(circle);
// // controller.addShape(elipse);

// // controller.drawShapes();

// // controller.selectShape(rectangle);
// // console.log(controller.getSelectedShape());
// // controller.drawSelectedShape();
