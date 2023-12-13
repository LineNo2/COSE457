import { AbstractShapeModel } from "../models/interfaces/shape_model_interface";
import { GuidingBox, RectangleModel } from "../models/shapes/rectangle_model";
import { CanvasView } from "../views/canvas_view"

export class ShapeController {
    private static instance: ShapeController;
    private shapes: AbstractShapeModel[];
    private selectedShapes: AbstractShapeModel[];
    private guidingBox: GuidingBox | null;
    private view: CanvasView;

    private constructor(view: CanvasView) {
        this.shapes = [];
        this.selectedShapes = [];
        this.guidingBox = null;
        this.view = view;
    }

    static getInstance(view?: CanvasView): ShapeController {
        if (ShapeController.instance) {
            return ShapeController.instance;
        }
        if (view == null) {
            throw new Error("ShapeController instance not created yet");
        }
        ShapeController.instance = new ShapeController(view);
        return ShapeController.instance;
    }

    sortShapes(): void {
        this.shapes.sort((a, b) => {
            return a.getZIndex() - b.getZIndex();
        });
    }

    addShape(shape: AbstractShapeModel): void {
        this.shapes.push(shape);
        this.sortShapes();
    }

    getShapes(): AbstractShapeModel[] {
        return this.shapes;
    }

    drawShapes(): void {
        this.view.drawShapes(this.shapes);
    }

    drawSelectedShape(): void {
        if (this.selectedShapes.length == 0) return;
        let minX = this.selectedShapes[0].getBoundingBox().getX();
        let minY = this.selectedShapes[0].getBoundingBox().getY();
        let maxX = minX + this.selectedShapes[0].getBoundingBox().getWidth();
        let maxY = minY + this.selectedShapes[0].getBoundingBox().getHeight();
        for (let i = 1; i < this.selectedShapes.length; i++) {
            let boundingBox = this.selectedShapes[i].getBoundingBox();
            minX = Math.min(minX, boundingBox.getX());
            minY = Math.min(minY, boundingBox.getY());
            maxX = Math.max(maxX, boundingBox.getX() + boundingBox.getWidth());
            maxY = Math.max(maxY, boundingBox.getY() + boundingBox.getHeight());
        }
        let newBoundingBox = new RectangleModel(
            minX, minY, 'black', 'blue', 'selected', 0, maxX - minX, maxY - minY
        );
        this.view.drawBoundingBox(newBoundingBox);
    }

    darwGuidingBox(): void {
        if (this.guidingBox == null) return;
        this.view.drawBoundingBox(this.guidingBox);
    }

    selectShapes(shape: AbstractShapeModel[]): void {
        this.selectedShapes = shape;
        this.view.renderProperties(this.selectedShapes);
        this.drawSelectedShape();
    }

    getSelectedShapes(): AbstractShapeModel[] {
        return this.selectedShapes;
    }

    eraseSelectedShape(): void {
        if (this.selectedShapes.length == 0) return;
        this.view.eraseBoundingBox();
    }

    onMouseDown(event: MouseEvent): void {
        for (let i = this.shapes.length - 1; i >= 0; i--) {
            let x = event.offsetX;
            let y = event.offsetY;
            if (this.shapes[i].containsPoint(x, y)) {
                this.selectShapes([this.shapes[i]]);
                break;
            }
        }
        console.log(this.selectedShapes);
    }

    selectMultipleShapes(): void {
        if (this.guidingBox == null) return;
        this.guidingBox.adjustNegativeWidthAndHeight();
        let selectedShapes: AbstractShapeModel[] = [];
        for (let shape of this.shapes) {
            if (this.guidingBox.conatinsShape(shape)) {
                selectedShapes.push(shape);
            }
        }

        this.selectShapes(selectedShapes);
        console.log(this.selectedShapes);
    }

    setGuidingBox(x: number, y: number): void {
        let index = this.getCurrentZIndex();
        let name = index.toString();
        this.guidingBox = new GuidingBox(
            x, y, 'black', 'blue', name + '-GuidingBox', index, 0, 0
        );
    }

    onMouseMoveWhenToolSelected(event: MouseEvent): void {
        if (this.guidingBox == null) return;
        let x = event.offsetX;
        let y = event.offsetY;
        this.replaceEndPoint(x, y);
    }

    onMouseUpWhenToolSelected(event: MouseEvent, builder: (model: GuidingBox) => AbstractShapeModel): void {
        if (this.guidingBox == null) return;
        let x = event.offsetX;
        let y = event.offsetY;
        this.replaceEndPoint(x, y);
        this.addShape(builder(this.guidingBox));
        this.drawShapes();
    }

    replaceEndPoint(x: number, y: number): void {
        if (this.guidingBox == null) return;
        this.guidingBox.replaceEndPoint(x, y);
        this.darwGuidingBox();
    }

    getCurrentZIndex(): number {
        if (this.shapes.length == 0) return 0;
        return this.shapes[this.shapes.length - 1].getZIndex() + 1;
    }
}
