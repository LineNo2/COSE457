import { AbstractCanvas } from "./interfaces/canvas_interface";

class VanillaCanvas extends AbstractCanvas {
    protected canvas: HTMLCanvasElement;
    protected upperCanvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    protected upperContext: CanvasRenderingContext2D;


    constructor(canvas: HTMLCanvasElement, upperCanvas: HTMLCanvasElement) {
        super(canvas, upperCanvas);
        this.canvas = canvas;
        let _context = canvas.getContext("2d");
        if (_context === null) {
            throw new Error("Canvas not supported");
        }
        this.context = _context;
        this.upperCanvas = upperCanvas;
        let _upperContext = upperCanvas.getContext("2d");
        if (_upperContext === null) {
            throw new Error("Canvas not supported");
        }
        this.upperContext = _upperContext;
    }

    drawEllipse(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void {
        this.context.beginPath();
        this.context.ellipse(x, y, width, height, 0, 0, 2 * Math.PI);
        this.context.fillStyle = fillColor;
        this.context.fill();
        this.context.lineWidth = 1;
        this.context.strokeStyle = borderColor;
        this.context.stroke();
    }

    drawRectangle(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void {
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.fillStyle = fillColor;
        this.context.fill();
        this.context.lineWidth = 1;
        this.context.strokeStyle = borderColor;
        this.context.stroke();
    }

    drawBoundingBox(x: number, y: number, width: number, height: number): void {
        this.eraseBoundingBox();
        this.upperContext.beginPath();
        this.upperContext.rect(x, y, width, height);
        this.upperContext.lineWidth = 1;
        this.upperContext.strokeStyle = "red";
        this.upperContext.stroke();
    }

    eraseBoundingBox(): void {
        this.upperContext.clearRect(0, 0, this.upperCanvas.width, this.upperCanvas.height);
    }

    clear(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}