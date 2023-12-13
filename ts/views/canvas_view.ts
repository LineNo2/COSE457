import { AbstractShapeModel } from "../models/interfaces/shape_model_interface";
import { AbstractCanvas } from "./interfaces/canvas_interface";

export class CanvasView {
    private canvas: AbstractCanvas;


    constructor(canvas: AbstractCanvas) {
        this.canvas = canvas;
    }

    drawShapes(shapes: AbstractShapeModel[]): void {
        for (let shape of shapes) {
            this.drawShape(shape);
        }
    }

    drawShape(shape: AbstractShapeModel): void {
        shape.draw(this.canvas);
    }

    drawBoundingBox(shape: AbstractShapeModel): void {
        shape.drawBoundingBox(this.canvas);
    }

    eraseBoundingBox(): void {
        this.canvas.eraseBoundingBox();
    }

    renderProperties(shapes: AbstractShapeModel[]): void {
        const properties = document.getElementById("properties");
        if (properties == null) return;
        properties.innerHTML = "";
        if (this == null) return;
        for (let shape of shapes) {
            let propertyDict = {
                "id": shape.getId(),
                "x": shape.getX().toString(),
                "y": shape.getY().toString(),
                "fillColor": shape.getFillColor(),
                "borderColor": shape.getBorderColor(),
                "type": shape.getType()
            };
            Object.entries(propertyDict).forEach(([key, value]) => {
                let wrapper = document.createElement('div');
                wrapper.className = 'property-wrapper';


                let property = document.createElement('div');
                property.className = 'property';
                let propertyName = document.createElement('div');
                propertyName.className = 'property-name';
                propertyName.innerHTML = key;
                let propertyValue = document.createElement('div');
                propertyValue.className = 'property-value';
                propertyValue.innerHTML = value;
                property.appendChild(propertyName);
                property.appendChild(propertyValue);
                wrapper.appendChild(property);
                properties!.appendChild(wrapper); // since null checked, ! is safe
            });
        }
    }
}