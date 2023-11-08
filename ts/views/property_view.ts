class PropertyView {
    private selectedShape: AbstractShapeModel | null;

    constructor() {
        this.selectedShape = null;
    }

    selectShape(shape: AbstractShapeModel | null): void {
        this.selectedShape = shape;
        this.renderProperties();
    }

    renderProperties(): void {
        const properties = document.getElementById("properties");
        if (properties == null) return;
        properties.innerHTML = "";
        if (this.selectedShape == null) return;
        const shape = this.selectedShape;
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