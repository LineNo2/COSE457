import { ShapeController } from "../../controllers/shape_controller";
import { ToolController } from "../../controllers/tool_controller";
import { AbstractToolModel, ToolType } from "../interfaces/tool_model_interface";

export class SelectTool extends AbstractToolModel {
    constructor() {
        super("Select", ToolType.select);
    }

    onMousedown(event: MouseEvent): void {
        ShapeController.getInstance().setGuidingBox(event.offsetX, event.offsetY);
    }

    onMouseup(): void {
        ShapeController.getInstance().selectMultipleShapes();
        ToolController.getInstance().resetSelectedTool();
    }

    onMousemove(event: MouseEvent): void {
        ShapeController.getInstance().onMouseMoveWhenToolSelected(event);
    }

    onMouseout(event: MouseEvent): void {
        throw new Error("Method not implemented.");
    }
}