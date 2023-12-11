import fabric from "fabric/fabric-impl";
import { AbstractCanvas } from "./interfaces/canvas_interface";

export class FabricCanvas extends AbstractCanvas {
    canvas: fabric.Canvas;
    protected upperCanvas: fabric.Canvas;

    constructor(canvas: fabric.Canvas, upperCanvas: fabric.Canvas) {
        super(canvas, upperCanvas);
        this.canvas = canvas;
        this.upperCanvas = upperCanvas;
    }

    drawEllipse(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void {
        var ellipse = new fabric.Ellipse({
            left: x,
            top: y,
            fill: fillColor,
            rx: width,
            ry: height,
            stroke: borderColor,
            strokeWidth: 1,
            selectable: false
        });
        this.canvas.add(ellipse);
    }

    drawRectangle(x: number, y: number, width: number, height: number, borderColor: string, fillColor: string): void {
        var rect = new fabric.Rect({
            left: x,
            top: y,
            fill: fillColor,
            width: width,
            height: height,
            stroke: borderColor,
            strokeWidth: 1,
            selectable: false
        });
        this.canvas.add(rect);
    }

    drawBoundingBox(x: number, y: number, width: number, height: number): void {
        this.eraseBoundingBox();
        let _boundingBox = new fabric.Rect({
            left: x,
            top: y,
            fill: 'transparent',
            width: width,
            height: height,
            stroke: 'red',
            strokeWidth: 1,
            selectable: false
        });
        this.upperCanvas.add(_boundingBox);
    }

    eraseBoundingBox(): void {
        this.upperCanvas.clear();
    }

    clear(): void {
        this.canvas.clear();
    }
}