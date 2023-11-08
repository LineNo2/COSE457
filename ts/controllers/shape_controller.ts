class ShapeController {
    private shapes: AbstractShapeModel[];
    private selectedShape: AbstractShapeModel | null;
    private view: ShapeView;

    constructor(view: ShapeView) {
        this.shapes = [];
        this.selectedShape = null;
        this.view = view;
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

    selectShape(shape: AbstractShapeModel): void {
        this.selectedShape = shape;
        this.view.renderProperties(shape);
        this.drawSelectedShape();
    }

    getSelectedShape(): AbstractShapeModel | null {
        return this.selectedShape;
    }

    drawSelectedShape(): void {
        if (this.selectedShape == null) return;
        this.view.drawBoundingBox(this.selectedShape.getBoundingBox());
    }

    eraseSelectedShape(): void {
        if (this.selectedShape == null) return;
        this.view.eraseBoundingBox();
    }

    onMouseDown(x: number, y: number): void {
        this.selectedShape = null;
        for (let i = this.shapes.length - 1; i >= 0; i--) {
            if (this.shapes[i].containsPoint(x, y)) {
                this.selectShape(this.shapes[i]);
                break;
            }
        }
        console.log(this.selectedShape);
    }

    getCurrentZIndex(): number {
        if (this.shapes.length == 0) return 0;
        return this.shapes[this.shapes.length - 1].getZIndex() + 1;
    }
}
