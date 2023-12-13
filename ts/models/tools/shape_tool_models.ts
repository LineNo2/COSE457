import { ShapeController } from "../../controllers/shape_controller";
import { ShapeToolModel, ToolType } from "../interfaces/tool_model_interface";
import { ElipseModel } from "../shapes/elipse_model";
import { GuidingBox, RectangleModel } from "../shapes/rectangle_model";

export class RectangleTool extends ShapeToolModel {
    constructor() {
        super("Rectangle", ToolType.rectangle);
    }

    builder(guidingBox: GuidingBox): RectangleModel {
        let width = guidingBox.getWidth();
        let height = guidingBox.getHeight();
        let x = guidingBox.getX();
        let y = guidingBox.getY();
        if (width < 0) {
            x += width;
            width *= -1;
        }
        if (height < 0) {
            y += height;
            height *= -1;
        }
        let index = ShapeController.getInstance().getCurrentZIndex();
        let name = index.toString();
        let shape = new RectangleModel(
            x, y, 'black', 'blue', name + '-Rectangle', index, width, height
        );
        return shape;
    }
}

export class EllipseTool extends ShapeToolModel {
    constructor() {
        super("Ellipse", ToolType.elipse);
    }

    builder(guidingBox: GuidingBox): ElipseModel {
        let width = guidingBox.getWidth();
        let height = guidingBox.getHeight();
        let x = guidingBox.getX();
        let y = guidingBox.getY();
        if (width < 0) {
            x += width;
            width *= -1;
        }
        if (height < 0) {
            y += height;
            height *= -1;
        }
        let radiusX = width / 2;
        let radiusY = height / 2;
        let index = ShapeController.getInstance().getCurrentZIndex();
        let name = index.toString();
        let shape = new ElipseModel(
            x, y, 'black', 'blue', name + '-Elipse', index, radiusX, radiusY
        );
        return shape;
    }

}