// class CircleModel extends AbstractShapeModel {
//     private radius: number;

//     constructor(x: number, y: number, borderColor: string, fillColor: string, id: string, zIndex: number, radius: number) {
//         super(x, y, borderColor, fillColor, id, zIndex);
//         this.radius = radius;
//     }

//     getRadius(): number {
//         return this.radius;
//     }

//     resize(scale: number): void {
//         this.radius *= scale;
//     }

//     getBoundingBox(): BoundingBoxInterface {
//         return BoundingBoxFactory.createBoundingBoxCircle(
//             this.x,
//             this.y,
//             this.radius
//         );
//     }

//     getType(): string {
//         return "circle";
//     }

//     containsPoint(x: number, y: number): boolean {
//         var centerX = this.x + this.radius;
//         var centerY = this.y + this.radius;
//         return Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2) <= Math.pow(this.radius, 2);
//     }
// }