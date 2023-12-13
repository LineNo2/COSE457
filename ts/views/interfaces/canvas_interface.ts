import { ElipseModel } from "../../models/shapes/elipse_model";
import { RectangleModel } from "../../models/shapes/rectangle_model";

interface CanvasInterface {
    drawEllipse(model: ElipseModel): void;
    drawRectangle(model: RectangleModel): void;
    drawBoundingBox(model: BoundingBoxInterface): void;
    eraseBoundingBox(): void;
    setOnMouseDown(callback: (event: any) => void): void;
    setOnMouseUp(callback: (event: any) => void): void;
    setOnMouseMove(callback: (event: any) => void): void;
    setOnMouseOut(callback: (event: any) => void): void;
    clear(): void;
}

export abstract class AbstractCanvas implements CanvasInterface {
    protected canvas: any;
    protected upperCanvas: any;

    constructor(canvas: any, upperCanvas: any) {
        this.canvas = canvas;
        this.upperCanvas = upperCanvas;
    }

    abstract drawEllipse(model: ElipseModel): void;

    abstract drawRectangle(model: RectangleModel): void;

    abstract drawBoundingBox(model: BoundingBoxInterface): void;

    abstract eraseBoundingBox(): void;

    abstract setOnMouseDown(callback: (event: any) => void): void;

    abstract setOnMouseUp(callback: (event: any) => void): void;

    abstract setOnMouseMove(callback: (event: any) => void): void;

    abstract setOnMouseOut(callback: (event: any) => void): void;
    
    abstract clear(): void;
}