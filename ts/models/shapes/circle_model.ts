class CircleModel implements ShapeInterface {
    private x: number;
    private y: number;
    private radius: number;

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(canvas: fabric.Canvas): void {
        canvas.add(new fabric.Circle({
            left: this.x,
            top: this.y,
            radius: this.radius,
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
        this.radius *= scale;
    }

    getBoundingBox(): BoundingBoxInterface {
        return new DefaultBoundingBoxInterface(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }

    drawBoundingBox(canvas: fabric.Canvas): void {
        this.getBoundingBox().draw(canvas);
    }
}