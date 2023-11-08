class ElipseModel extends AbstractShapeModel {
    private radiusX: number;
    private radiusY: number;

    constructor(x: number, y: number, borderColor: string, fillColor: string, id: string, zIndex: number, radiusX: number, radiusY: number) {
        super(x, y, borderColor, fillColor, id, zIndex);
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    getRadiusX(): number {
        return this.radiusX;
    }

    getRadiusY(): number {
        return this.radiusY;
    }

    resize(scale: number): void {
        this.radiusX *= scale;
        this.radiusY *= scale;
    }

    getBoundingBox(): BoundingBoxInterface {
        return BoundingBoxFactory.createBoundingBoxEllipse(
            this.x,
            this.y,
            this.radiusX,
            this.radiusY
        );
    }

    containsPoint(x: number, y: number): boolean {
        var centerX = this.x + this.radiusX;
        var centerY = this.y + this.radiusY;
        return Math.pow(x - centerX, 2) / Math.pow(this.radiusX, 2) + Math.pow(y - centerY, 2) / Math.pow(this.radiusY, 2) <= 1;
    }
}