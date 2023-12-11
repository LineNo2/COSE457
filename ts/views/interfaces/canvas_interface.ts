import { ElipseModel } from "../../models/shapes/elipse_model";
import { RectangleModel } from "../../models/shapes/rectangle_model";

interface CanvasInterface {
    drawEllipse(model: ElipseModel): void;
    drawRectangle(model: RectangleModel): void;
    drawBoundingBox(model: BoundingBoxInterface): void;
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

    abstract drawEllipse(model: ElipseModel): void;

    abstract drawRectangle(model: RectangleModel): void;

    abstract drawBoundingBox(model: BoundingBoxInterface): void;

    abstract eraseBoundingBox(): void;

    abstract clear(): void;
}