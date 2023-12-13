import { DefaultBoundingBoxModel } from "../models/bounding_boxes/default_bounding_box_model";
import { AbstractShapeModel } from "../models/interfaces/shape_model_interface";
import { GuidingBox, RectangleModel } from "../models/shapes/rectangle_model";
import { CanvasView } from "../views/canvas_view"

export class ShapeController {
    private static instance: ShapeController;
    private shapes: AbstractShapeModel[];
    private selectedShape: AbstractShapeModel | null;
    private guidingBox: GuidingBox | null;
    private view: CanvasView;

    private constructor(view: CanvasView) {
        this.shapes = [];
        this.selectedShape = null;
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
        if (this.selectedShape == null) return;
        this.view.drawBoundingBox(this.selectedShape);
    }

    darwGuidingBox(): void {
        if (this.guidingBox == null) return;
        this.view.drawBoundingBox(this.guidingBox);
    }

    selectShape(shape: AbstractShapeModel): void {
        this.selectedShape = shape;
        this.view.renderProperties(shape);
        this.drawSelectedShape();
    }

    getSelectedShape(): AbstractShapeModel | null {
        return this.selectedShape;
    }

    eraseSelectedShape(): void {
        if (this.selectedShape == null) return;
        this.view.eraseBoundingBox();
    }

    onMouseDown(x: number, y: number): void {
        for (let i = this.shapes.length - 1; i >= 0; i--) {
            if (this.shapes[i].containsPoint(x, y)) {
                this.selectShape(this.shapes[i]);
                break;
            }
        }
        console.log(this.selectedShape);
    }

    setGuidingBox(x: number, y: number): void {
        let index = this.getCurrentZIndex();
        let name = index.toString();
        this.guidingBox = new GuidingBox(
            x, y, 'black', 'blue', name + '-GuidingBox', index, 0, 0
        );
    }

    onMouseMoveWhenToolSelected(x: number, y: number): void {
        if (this.guidingBox == null) return;
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
