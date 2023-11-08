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

    eraseBoundingBox(): void {
        this.canvas.remove(this.canvas.getObjects()[this.canvas.getObjects().length - 1]);
    }

    renderProperties(selectedShape: AbstractShapeModel): void {
        const properties = document.getElementById("properties");
        if (properties == null) return;
        properties.innerHTML = "";
        if (selectedShape == null) return;
        const shape = selectedShape;
        let propertyDict = {
            "id": shape.getId(),
            "x": shape.getX().toString(),
            "y": shape.getY().toString(),
            "fillColor": shape.getFillColor(),
            "borderColor": shape.getBorderColor(),
            "type": shape.getType()
        };
        Object.entries(propertyDict).forEach(([key, value]) => {
            let property = document.createElement("div");
            property.className = "property";
            let propertyName = document.createElement("div");
            propertyName.className = "property-name";
            propertyName.innerHTML = key;
            let propertyValue = document.createElement("div");
            propertyValue.className = "property-value";
            propertyValue.innerHTML = value;
            property.appendChild(propertyName);
            property.appendChild(propertyValue);
            properties!.appendChild(property); // since null checked, ! is safe
        });
    }
}