interface BoundingBoxInterface {
    getX(): number;
    getY(): number;
    getWidth(): number;
    getHeight(): number;
    draw(canvas: fabric.Canvas): void;
}