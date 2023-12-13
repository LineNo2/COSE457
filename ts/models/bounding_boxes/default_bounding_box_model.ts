import { AbstractShapeModel } from "../interfaces/shape_model_interface";

export class DefaultBoundingBoxModel implements BoundingBoxInterface {
    private readonly x: number;
    private readonly y: number;
    private readonly width: number;
    private readonly height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getX(): number {
        return this.width > 0 ? this.x - 5 : this.x + 5;
    }

    getY(): number {
        return this.height > 0 ? this.y - 5 : this.y + 5;
    }

    getWidth(): number {
        return this.width > 0 ? this.width + 10 : this.width - 10;
    }

    getHeight(): number {
        return this.height > 0 ? this.height + 10 : this.height - 10;
    }
}

export class BoundingBoxFactory {
    static createBoundingBoxRectangle(x: number, y: number, width: number, height: number): BoundingBoxInterface {
        return new DefaultBoundingBoxModel(x, y, width, height);
    }

    static createBoundingBoxEllipse(x: number, y: number, radiusX: number, radiusY: number): BoundingBoxInterface {
        return new DefaultBoundingBoxModel(
            x,
            y,
            radiusX * 2,
            radiusY * 2,
        );
    }

    static createBoundingBoxGroupedShape(shapes: AbstractShapeModel[]): BoundingBoxInterface {
        let minX = shapes[0].getBoundingBox().getX();
        let minY = shapes[0].getBoundingBox().getY();
        let maxX = minX + shapes[0].getBoundingBox().getWidth();
        let maxY = minY + shapes[0].getBoundingBox().getHeight();
        shapes.map((shape) => {
            let boundingBox = shape.getBoundingBox();
            minX = Math.min(minX, boundingBox.getX());
            minY = Math.min(minY, boundingBox.getY());
            maxX = Math.max(maxX, boundingBox.getX() + boundingBox.getWidth());
            maxY = Math.max(maxY, boundingBox.getY() + boundingBox.getHeight());
        });
        return new DefaultBoundingBoxModel(
            minX,
            minY,
            maxX - minX,
            maxY - minY,
        );
    }
}