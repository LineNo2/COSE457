class Rectangle implements ShapeInterface {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(canvas: fabric.Canvas): void {
        canvas.add(new fabric.Rect({
            left: this.x,
            top: this.y,
            width: this.width,
            height: this.height,
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
        this.width *= scale;
        this.height *= scale;
    }

    getBoundingBox(): BoundingBoxInterface {
        return new DefaultBoundingBoxInterface(this.x, this.y, this.width, this.height);
    }

    drawBoundingBox(canvas: fabric.Canvas): void {
        this.getBoundingBox().draw(canvas);
    }
}
