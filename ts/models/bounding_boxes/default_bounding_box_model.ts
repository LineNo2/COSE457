class DefaultBoundingBoxInterface implements BoundingBoxInterface {
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
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    draw(canvas: fabric.Canvas): void {
        canvas.add(new fabric.Rect({
            left: this.x,
            top: this.y,
            width: this.width,
            height: this.height,
            fill: 'transparent',
            stroke: 'blue',
            strokeWidth: 2,
            selectable: false
        }));
    }
}