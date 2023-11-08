class ShapeController {
    constructor(private shape: ShapeInterface) {
    }

    public draw(canvas: fabric.Canvas) {
        this.shape.draw(
            canvas
        );
    }

    public move(dx: number, dy: number) {
        this.shape.move(
            dx,
            dy
        );
    }

    public resize(scale: number) {
        this.shape.resize(
            scale
        );
    }

    public getBoundingBox(): BoundingBoxControllerInterface {
        return new BoundingBoxController(
            this.shape.getBoundingBox()
        );
    }

    public drawBoundingBox(canvas: fabric.Canvas) {
        this.shape.drawBoundingBox(
            canvas
        );
    }
}