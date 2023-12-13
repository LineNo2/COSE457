import fabric from "fabric/fabric-impl";
import { FabricCanvas } from "./views/fabric_canvas";
import { ShapeController } from "./controllers/shape_controller";
import { CanvasView } from "./views/canvas_view";
import { ToolController } from "./controllers/tool_controller";
import { ToolsView } from "./views/tools_view";
import { EllipseTool, RectangleTool } from "./models/tools/shape_tool_models";
import { VanillaCanvas } from "./views/vanilla_canvas";

// implict import that this use Rectangle and ShapeController clas
// let _upperCanvas = new fabric.Canvas('upper-c');
// let _canvas = new fabric.Canvas('c',);

// let canvas = new FabricCanvas(_canvas, _upperCanvas);

let _upperCanvas = document.getElementById('upper-c') as HTMLCanvasElement;
let _canvas = document.getElementById('c') as HTMLCanvasElement;

let canvas = new VanillaCanvas(_canvas, _upperCanvas);

let view = new CanvasView(canvas);
let controller = ShapeController.getInstance(view);

let toolbarView = new ToolsView(document.getElementById('toolbar')!,
    (tool) => {
        toolbarController.selectTool(tool);
    }
);

let toolbarController = ToolController.getInstance(
    toolbarView
);

toolbarController.addTool(new RectangleTool());
toolbarController.addTool(new EllipseTool());
toolbarController.drawTools();

var mousePressed = false;

canvas.setOnMouseDown((event: MouseEvent) => {
    let tool = toolbarController.getSelectedTool();
    if (tool == null) {
        controller.onMouseDown(event);
        return;
    }
    mousePressed = true;
    tool.onMousedown(event);
});

canvas.setOnMouseMove((event: MouseEvent) => {
    if (!mousePressed) {
        return;
    }

    let tool = toolbarController.getSelectedTool();

    if (tool == null) {
        return;
    }

    tool.onMousemove(event);
});

canvas.setOnMouseUp((event: MouseEvent) => {
    mousePressed = false;
    let tool = toolbarController.getSelectedTool();
    if (tool == null) {
        return;
    }
    tool.onMouseup(event);
});

// canvas.canvas.onmousedown = function (event) {
//     let x = event.offsetX;
//     let y = event.offsetY;
//     let shape;
//     if (toolbarController.getSelectedTool() == null) {
//         controller.onMouseDown(x, y);
//         return;
//     }
//     let tool = toolbarController.getSelectedTool();
//     let index = controller.getCurrentZIndex();
//     let name = index.toString();
//     if (tool instanceof RectangleTool) {
//         shape = new RectangleModel(
//             x, y, 'red', 'black', name + '-Rect', index, 100, 100
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
// };


// canvas.canvas.on('mouse:down', function (options) {
//     let pointer = canvas.canvas.getPointer(options.e);
//     let x = pointer.x;
//     let y = pointer.y;
//     let shape;
//     if (toolbarController.getSelectedTool() == null) {
//         controller.onMouseDown(x, y);
//         return;
//     }
//     let tool = toolbarController.getSelectedTool();
//     let index = controller.getCurrentZIndex();
//     let name = index.toString();
//     if (tool instanceof RectangleTool) {
//         shape = new RectangleModel(
//             x, y, 'red', 'black', name + '-Rect', index, 100, 100
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

// controller.addShape(rectangle);
// controller.addShape(circle);
// controller.addShape(elipse);

// controller.drawShapes();

// controller.selectShape(rectangle);
// console.log(controller.getSelectedShape());
// controller.drawSelectedShape();
