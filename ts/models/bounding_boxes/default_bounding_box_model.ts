class DefaultBoundingBoxModel implements BoundingBoxInterface {
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
        return this.x - 5;
    }

    getY(): number {
        return this.y - 5;
    }

    getWidth(): number {
        return this.width + 10;
    }

    getHeight(): number {
        return this.height + 10;
    }
}

class BoundingBoxFactory {
    static createBoundingBoxRectangle(x: number, y: number, width: number, height: number): BoundingBoxInterface {
        return new DefaultBoundingBoxModel(x, y, width, height);
    }

    static createBoundingBoxCircle(x: number, y: number, radius: number): BoundingBoxInterface {
        console.log(x, y, radius);
        return new DefaultBoundingBoxModel(
            x,
            y,
            radius * 2,
            radius * 2,
        );
    }

    static createBoundingBoxEllipse(x: number, y: number, radiusX: number, radiusY: number): BoundingBoxInterface {
        return new DefaultBoundingBoxModel(
            x,
            y,
            radiusX * 2,
            radiusY * 2,
        );
    }
}