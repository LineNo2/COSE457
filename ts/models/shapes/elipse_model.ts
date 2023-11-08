class ElipseModel implements ShapeInterface {
    private x: number;
    private y: number;
    private radiusX: number;
    private radiusY: number;

    constructor(x: number, y: number, radiusX: number, radiusY: number) {
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    draw(canvas: fabric.Canvas): void {
        canvas.add(new fabric.Ellipse({
            left: this.x,
            top: this.y,
            rx: this.radiusX,
            ry: this.radiusY,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            selectable: false
        }));
    }

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    resize(scale: number): void {
        this.radiusX *= scale;
        this.radiusY *= scale;
    }

    getBoundingBox(): BoundingBoxInterface {
        return new DefaultBoundingBoxInterface(this.x - this.radiusX, this.y - this.radiusY, this.radiusX * 2, this.radiusY * 2);
    }

    drawBoundingBox(canvas: fabric.Canvas): void {
        this.getBoundingBox().draw(canvas);
    }
}