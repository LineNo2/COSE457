import { AbstractCanvas } from "../../views/canvas/canvas_interface";
import { BoundingBoxFactory } from "../bounding_boxes/default_bounding_box_model";
import { AbstractShapeModel } from "../interfaces/shape_model_interface";

export class GroupedShapeModel extends AbstractShapeModel{
    protected shapes: AbstractShapeModel[];

    constructor(x: number, y: number, borderColor: string, fillColor: string, id: string, zIndex: number, shapes: AbstractShapeModel[]) {
        super(x, y, borderColor, fillColor, id, zIndex);
        this.shapes = shapes;
    }

    getShapes(): AbstractShapeModel[] {
        return this.shapes;
    }

    getBoundingBox(): BoundingBoxInterface {
        return BoundingBoxFactory.createBoundingBoxGroupedShape(this.shapes);
    }

    getType(): string {
        return "grouped";
    }

    containsPoint(x: number, y: number): boolean {
        for (let shape of this.shapes) {
            if (shape.containsPoint(x, y)) {
                return true;
            }
        }
        return false;
    }

    draw(canvas: AbstractCanvas): void {
        for (let shape of this.shapes) {
            shape.draw(canvas);
        }
    }

    drawBoundingBox(canvas: AbstractCanvas): void {
        canvas.drawBoundingBox(this.getBoundingBox());
    }

    replaceEndPoint(x: number, y: number): void {
        let boundingBox = this.getBoundingBox();
        let deltaX = x - boundingBox.getX();
        let deltaY = y - boundingBox.getY();
        for (let shape of this.shapes) {
            shape.replaceEndPoint(shape.getX() + deltaX, shape.getY() + deltaY);
        }
    }

    adjustNegativeWidthAndHeight(): void {
        let boundingBox = this.getBoundingBox();
        let deltaX = boundingBox.getX() - this.x;
        let deltaY = boundingBox.getY() - this.y;
        for (let shape of this.shapes) {
            shape.replaceEndPoint(shape.getX() + deltaX, shape.getY() + deltaY);
        }
    }

    resize(scale: number): void {
        let boundingBox = this.getBoundingBox();
        let deltaX = boundingBox.getX() - this.x;
        let deltaY = boundingBox.getY() - this.y;
        for (let shape of this.shapes) {
            shape.replaceEndPoint(shape.getX() + deltaX, shape.getY() + deltaY);
            shape.resize(scale);
        }
    }
}