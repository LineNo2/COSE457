import fabric from "fabric/fabric-impl";
import { FabricCanvas } from "./views/fabric_canvas";
import { RectangleModel } from "./models/shapes/rectangle_model";
import { ElipseModel } from "./models/shapes/elipse_model";
import { ShapeController } from "./controllers/shape_controller";
import { CanvasView } from "./views/canvas_view";
import { ToolController } from "./controllers/tool_controller";
import { ToolsView } from "./views/tools_view";
import { CircleTool, EllipseTool, RectangleTool } from "./models/tools/tools_model";

// implict import that this use Rectangle and ShapeController clas
let _upperCanvas = new fabric.Canvas('upper-c');
let _canvas = new fabric.Canvas('c',);

let canvas = new FabricCanvas(_canvas, _upperCanvas);

let view = new CanvasView(canvas);
let controller = new ShapeController(view);

let toolbarView = new ToolsView(document.getElementById('toolbar')!,
    (tool) => {
        toolbarController.selectTool(tool);
    }
);

let toolbarController = new ToolController(
    toolbarView
);

toolbarController.addTool(new RectangleTool());
toolbarController.addTool(new CircleTool());
toolbarController.addTool(new EllipseTool());
toolbarController.drawTools();

canvas.canvas.on('mouse:down', function (options) {
    let pointer = canvas.canvas.getPointer(options.e);
    let x = pointer.x;
    let y = pointer.y;
    let shape;
    if (toolbarController.getSelectedTool() == null) {
        controller.onMouseDown(x, y);
        return;
    }
    let tool = toolbarController.getSelectedTool();
    let index = controller.getCurrentZIndex();
    let name = index.toString();
    if (tool instanceof RectangleTool) {
        shape = new RectangleModel(
            x, y, 'red', 'black', name + '-Rect', index, 100, 100
        );
    }
    else if (tool instanceof EllipseTool) {
        shape = new ElipseModel(
            x, y, 'black', 'blue', name + '-Elipse', index, 100, 50
        );

    }
    else {
        throw new Error("Unknown tool type");
    }
    controller.addShape(shape);
    controller.drawShapes();
    toolbarController.resetSelectedTool();
});

// controller.addShape(rectangle);
// controller.addShape(circle);
// controller.addShape(elipse);

// controller.drawShapes();

// controller.selectShape(rectangle);
// console.log(controller.getSelectedShape());
// controller.drawSelectedShape();
