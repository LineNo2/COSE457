class RectangleTool extends AbstractToolModel {
    constructor() {
        super("Rectangle", ToolType.rectangle);
    }
}

class CircleTool extends AbstractToolModel {
    constructor() {
        super("Circle", ToolType.circle);
    }
}

class EllipseTool extends AbstractToolModel {
    constructor() {
        super("Ellipse", ToolType.elipse);
    }
}