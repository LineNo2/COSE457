interface ShapeInterface {
    draw(canvas: fabric.Canvas): void;
    move(dx: number, dy: number): void;
    resize(scale: number): void;
    getBoundingBox(): BoundingBoxInterface;
    drawBoundingBox(canvas: fabric.Canvas): void;
}
