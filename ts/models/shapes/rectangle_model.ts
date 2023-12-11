import { AbstractCanvas } from "../../views/interfaces/canvas_interface";
import { AbstractShapeModel } from "../interfaces/shape_model_interface";

export class RectangleModel extends AbstractShapeModel {
    private width: number;
    private height: number;

    constructor(x: number, y: number, borderColor: string, fillColor: string, id: string, zIndex: number, width: number, height: number) {
        super(x, y, borderColor, fillColor, id, zIndex);
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    resize(scale: number): void {
        this.width *= scale;
        this.height *= scale;
    }

    getBoundingBox(): BoundingBoxInterface {
        return BoundingBoxFactory.createBoundingBoxRectangle(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    getType(): string {
        return "rectangle";
    }

    containsPoint(x: number, y: number): boolean {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    draw(canvas: AbstractCanvas): void {
        canvas.drawRectangle(this.x, this.y, this.width, this.height, this.borderColor, this.fillColor);
    }
}