import { ShapeController } from "../../controllers/shape_controller";
import { ToolController } from "../../controllers/tool_controller";
import { GuidingBox } from "../shapes/rectangle_model";
import { AbstractShapeModel } from "./shape_model_interface";

export enum ToolType {
    elipse,
    rectangle,
    circle,
    select,
    line,
    text,
    image,
}

export interface ToolModelInterface {
    getToolName(): string;
    getToolAction(): ToolType;

    onMousedown(event: MouseEvent): void;
    onMouseup(event: MouseEvent): void;
    onMousemove(event: MouseEvent): void;
    onMouseout(event: MouseEvent): void;
}

export abstract class AbstractToolModel implements ToolModelInterface {
    protected toolName: string;
    protected toolAction: ToolType;

    constructor(toolName: string, toolAction: ToolType,) {
        this.toolName = toolName;
        this.toolAction = toolAction;
    }

    getToolName(): string {
        return this.toolName;
    }

    getToolAction(): ToolType {
        return this.toolAction;
    }

    abstract onMousedown(event: MouseEvent): void;

    abstract onMouseup(event: MouseEvent): void;

    abstract onMousemove(event: MouseEvent): void;

    abstract onMouseout(event: MouseEvent): void;

}

export abstract class ShapeToolModel extends AbstractToolModel {
    onMouseup(event: MouseEvent): void {
        ShapeController.getInstance().onMouseUpWhenToolSelected(event, this.builder);
        ToolController.getInstance().resetSelectedTool();
    }

    abstract builder(model: GuidingBox): AbstractShapeModel;
}
