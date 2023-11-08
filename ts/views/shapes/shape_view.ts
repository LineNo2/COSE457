class ShapeView {
    private canvas: fabric.Canvas;

    constructor(canvas: fabric.Canvas) {
        this.canvas = canvas;
    }

    drawShapes(shapes: AbstractShapeModel[]): void {
        for (let shape of shapes) {
            this.drawShape(shape);
        }
    }

    drawShape(shape: AbstractShapeModel): void {
        // watch type of shape and draw it
        if (shape instanceof RectangleModel) {
            this.drawRectangle(shape);
        } else if (shape instanceof CircleModel) {
            this.drawCircle(shape);
        } else if (shape instanceof ElipseModel) {
            this.drawElipse(shape);
        }
        else {
            throw new Error("Unknown shape type");
        }
    }

    drawRectangle(shape: RectangleModel): void {
        let rect = new fabric.Rect({
            left: shape.getX(),
            top: shape.getY(),
            fill: shape.getFillColor(),
            width: shape.getWidth(),
            height: shape.getHeight(),
            stroke: shape.getBorderColor(),
            strokeWidth: 1,
            selectable: false
        });
        this.canvas.add(rect);
    }

    drawCircle(shape: CircleModel): void {
        let circle = new fabric.Circle({
            left: shape.getX(),
            top: shape.getY(),
            fill: shape.getFillColor(),
            radius: shape.getRadius(),
            stroke: shape.getBorderColor(),
            strokeWidth: 1,
            selectable: false
        });
        this.canvas.add(circle);
    }

    drawElipse(shape: ElipseModel): void {
        let elipse = new fabric.Ellipse({
            left: shape.getX(),
            top: shape.getY(),
            fill: shape.getFillColor(),
            rx: shape.getRadiusX(),
            ry: shape.getRadiusY(),
            stroke: shape.getBorderColor(),
            strokeWidth: 1,
            selectable: false
        });
        this.canvas.add(elipse);
    }

    drawBoundingBox(boundingBox: BoundingBoxInterface): void {
        let _boundingBox = new fabric.Rect({
            left: boundingBox.getX(),
            top: boundingBox.getY(),
            fill: 'transparent',
            width: boundingBox.getWidth(),
            height: boundingBox.getHeight(),
            stroke: 'red',
            strokeWidth: 1,
            selectable: false
        });
        this.canvas.add(_boundingBox);
    }
}