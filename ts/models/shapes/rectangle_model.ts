import { AbstractCanvas } from "../../views/interfaces/canvas_interface";
import { BoundingBoxFactory } from "../bounding_boxes/default_bounding_box_model";
import { AbstractShapeModel } from "../interfaces/shape_model_interface";

export class RectangleModel extends AbstractShapeModel {
    protected width: number;
    protected height: number;

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
        let isContainsX = (x >= this.x && x <= this.x + this.width) || (x <= this.x && x >= this.x + this.width);
        let isContainsY = (y >= this.y && y <= this.y + this.height) || (y <= this.y && y >= this.y + this.height);
        return isContainsX && isContainsY;
    }

    draw(canvas: AbstractCanvas): void {
        canvas.drawRectangle(this);
    }

    drawBoundingBox(canvas: AbstractCanvas): void {
        canvas.drawBoundingBox(this.getBoundingBox());
    }

    replaceEndPoint(x: number, y: number): void {
        this.width = x - this.x;
        this.height = y - this.y;
    }

    adjustNegativeWidthAndHeight(): void {
        if (this.width < 0) {
            this.x += this.width;
            this.width *= -1;
        }
        if (this.height < 0) {
            this.y += this.height;
            this.height *= -1;
        }
    }
}

export class GuidingBox extends RectangleModel {
    constructor(x: number, y: number, borderColor = 'black', fillColor = 'red', id = 'draw-guide', zIndex = 999, width: number, height: number) {
        super(x, y, borderColor, fillColor, id, zIndex, width, height);
    }

    draw(canvas: AbstractCanvas): void {
        canvas.drawRectangle(this);
    }

    containsPoint(x: number, y: number): boolean {
        return false;
    }

    conatinsShape(shape: AbstractShapeModel): boolean {
        let boundingBox = shape.getBoundingBox();
        let isContainsX = (boundingBox.getX() >= this.x && boundingBox.getX() + boundingBox.getWidth() <= this.x + this.width);
        let isContainsY = (boundingBox.getY() >= this.y && boundingBox.getY() + boundingBox.getHeight() <= this.y + this.height);
        return isContainsX && isContainsY;
    }
}