import { AbstractCanvas } from "../../views/canvas/canvas_interface";

interface ShapeInterface {
    getX(): number;
    getY(): number;
    getBorderColor(): string;
    getFillColor(): string;
    getId(): string;
    getZIndex(): number;
    getType(): string;
    move(dx: number, dy: number): void;
    resize(scale: number): void;
    getBoundingBox(): BoundingBoxInterface;
    containsPoint(x: number, y: number): boolean;
    draw(canvas: AbstractCanvas): void;
    drawBoundingBox(canvas: AbstractCanvas): void;
    replaceEndPoint(x: number, y: number): void;
}

export abstract class AbstractShapeModel implements ShapeInterface {
    protected x: number;
    protected y: number;
    protected borderColor: string;
    protected fillColor: string;
    protected id: string;
    protected zIndex: number;

    constructor(x: number, y: number, borderColor: string, fillColor: string, id: string, zIndex: number) {
        this.x = x;
        this.y = y;
        this.borderColor = borderColor;
        this.fillColor = fillColor;
        this.id = id;
        this.zIndex = zIndex;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getBorderColor(): string {
        return this.borderColor;
    }

    getFillColor(): string {
        return this.fillColor;
    }

    getId(): string {
        return this.id;
    }

    getZIndex(): number {
        return this.zIndex;
    }

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    abstract replaceEndPoint(x: number, y: number): void;

    abstract getType(): string;

    abstract resize(scale: number): void;

    abstract getBoundingBox(): BoundingBoxInterface;

    abstract containsPoint(x: number, y: number): boolean;

    abstract draw(canvas: AbstractCanvas): void;

    drawBoundingBox(canvas: AbstractCanvas): void {
        const boundingBox = this.getBoundingBox();
        canvas.drawBoundingBox(boundingBox);
    }
}