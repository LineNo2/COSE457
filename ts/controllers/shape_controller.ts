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
    }

    getSelectedShape(): AbstractShapeModel | null {
        return this.selectedShape;
    }

    drawSelectedShape(): void {
        if (this.selectedShape == null) return;
        this.view.drawBoundingBox(this.selectedShape.getBoundingBox());
    }

    onMouseDown(x: number, y: number): void {
        this.selectedShape = null;
        for (let i = this.shapes.length - 1; i >= 0; i--) {
            if (this.shapes[i].containsPoint(x, y)) {
                this.selectedShape = this.shapes[i];
                break;
            }
        }
        console.log(this.selectedShape);
    }
}
