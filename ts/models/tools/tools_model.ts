import { AbstractToolModel, ToolType } from "../interfaces/tool_model_interface";

export class RectangleTool extends AbstractToolModel {
    constructor() {
        super("Rectangle", ToolType.rectangle);
    }
}

export class CircleTool extends AbstractToolModel {
    constructor() {
        super("Circle", ToolType.circle);
    }
}

export class EllipseTool extends AbstractToolModel {
    constructor() {
        super("Ellipse", ToolType.elipse);
    }
}