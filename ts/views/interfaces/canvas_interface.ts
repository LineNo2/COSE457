interface CanvasInterface {
    drawEllipse(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void;
    drawRectangle(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void;
    drawBoundingBox(x: number, y: number, width: number, height: number): void;
    eraseBoundingBox(): void;
    clear(): void;
}

export abstract class AbstractCanvas implements CanvasInterface {
    protected canvas: any;
    protected upperCanvas: any;

    constructor(canvas: any, upperCanvas: any) {
        this.canvas = canvas;
        this.upperCanvas = upperCanvas;
    }

    abstract drawEllipse(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void;

    abstract drawRectangle(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void;

    abstract drawBoundingBox(x: number, y: number, width: number, height: number): void;

    abstract eraseBoundingBox(): void;

    abstract clear(): void;
}