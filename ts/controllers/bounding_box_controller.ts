class BoundingBoxController {
    constructor(private boundingBox: BoundingBoxInterface) {
    }

    public getX(): number {
        return this.boundingBox.getX();
    }

    public getY(): number {
        return this.boundingBox.getY();
    }

    public getWidth(): number {
        return this.boundingBox.getWidth();
    }

    public getHeight(): number {
        return this.boundingBox.getHeight();
    }

    public draw(canvas: fabric.Canvas): void {
        this.boundingBox.draw(
            canvas
        );
    }
}