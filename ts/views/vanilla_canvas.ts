import { AbstractShapeModel } from "../models/interfaces/shape_model_interface";
import { ElipseModel } from "../models/shapes/elipse_model";
import { RectangleModel } from "../models/shapes/rectangle_model";
import { AbstractCanvas } from "./interfaces/canvas_interface";

export class VanillaCanvas extends AbstractCanvas {
    canvas: HTMLCanvasElement;
    upperCanvas: HTMLCanvasElement;
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

    drawEllipse(model: ElipseModel): void {
        this.context.beginPath();
        this.context.ellipse(model.getCenterX(), model.getCenterY(), model.getRadiusX(), model.getRadiusY(), 0, 0, 2 * Math.PI);
        this.context.fillStyle = model.getFillColor();
        this.context.fill();
        this.context.strokeStyle = model.getBorderColor();
        this.context.stroke();
    }

    drawRectangle(model: RectangleModel): void {
        this.context.beginPath();
        this.context.rect(model.getX(), model.getY(), model.getWidth(), model.getHeight());
        this.context.fillStyle = model.getFillColor();
        this.context.fill();
        this.context.strokeStyle = model.getBorderColor();
        this.context.stroke();
    }

    drawBoundingBox(model: BoundingBoxInterface): void {
        this.eraseBoundingBox();
        this.upperContext.beginPath();
        this.upperContext.rect(model.getX(), model.getY(), model.getWidth(), model.getHeight());
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