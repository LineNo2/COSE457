import fabric from "fabric/fabric-impl";
import { AbstractCanvas } from "./interfaces/canvas_interface";
import { ElipseModel } from "../models/shapes/elipse_model";
import { RectangleModel } from "../models/shapes/rectangle_model";

export class FabricCanvas extends AbstractCanvas {
    canvas: fabric.Canvas;
    protected upperCanvas: fabric.Canvas;

    constructor(canvas: fabric.Canvas, upperCanvas: fabric.Canvas) {
        super(canvas, upperCanvas);
        this.canvas = canvas;
        this.upperCanvas = upperCanvas;
    }

    drawEllipse(model: ElipseModel): void {
        var ellipse = new fabric.Ellipse({
            left: model.getX(),
            top: model.getY(),
            fill: model.getFillColor(),
            stroke: model.getBorderColor(),
            strokeWidth: 3,
            rx: model.getRadiusX(),
            ry: model.getRadiusY(),
            selectable: false
        });
        this.canvas.add(ellipse);
    }

    drawRectangle(model: RectangleModel): void {
        var rect = new fabric.Rect({
            left: model.getX(),
            top: model.getY(),
            fill: model.getFillColor(),
            stroke: model.getBorderColor(),
            strokeWidth: 3,
            width: model.getWidth(),
            height: model.getHeight(),
            selectable: false
        });
        this.canvas.add(rect);
    }

    drawBoundingBox(model: BoundingBoxInterface): void {
        this.eraseBoundingBox();
        var rect = new fabric.Rect({
            left: model.getX(),
            top: model.getY(),
            fill: "transparent",
            stroke: "red",
            strokeWidth: 3,
            width: model.getWidth(),
            height: model.getHeight(),
            selectable: false
        });
        this.upperCanvas.add(rect);
    }

    eraseBoundingBox(): void {
        this.upperCanvas.clear();
    }

    clear(): void {
        this.canvas.clear();
    }
}