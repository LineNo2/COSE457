interface ShapeControllerInterface {
    draw(): void;
    move(dx: number, dy: number): void;
    resize(scale: number): void;
    getBoundingBox(): BoundingBoxControllerInterface;
}