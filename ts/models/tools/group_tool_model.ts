import { ShapeController } from "../../controllers/shape_controller";
import { ToolController } from "../../controllers/tool_controller";
import { AbstractToolModel, ToolType } from "../interfaces/tool_model_interface";

export class GroupTool extends AbstractToolModel {
    constructor() {
        super("Group", ToolType.group);
    }

    onToolSelected(): void {
        ShapeController.getInstance().groupShapes();
        ToolController.getInstance().resetSelectedTool();
    }

    onMousedown(event: MouseEvent): void {
    }

    onMouseup(event: MouseEvent): void {
    }

    onMousemove(event: MouseEvent): void {
    }

    onMouseout(event: MouseEvent): void {
        throw new Error("Method not implemented.");
    }
}