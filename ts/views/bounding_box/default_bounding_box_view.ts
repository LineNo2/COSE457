class DefaultBoundingBoxView implements IBoundingBoxView {
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

    draw(canvas: fabric.Canvas): void {
        let rect = new fabric.Rect({
            left: this.x,
            top: this.y,
            fill: 'transparent',
            width: this.width,
            height: this.height,
            stroke: 'red',
            strokeWidth: 1,
            selectable: false
        });
        canvas.add(rect);
    }
}