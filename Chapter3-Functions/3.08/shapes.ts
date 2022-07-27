import { PI, Circle, Square, Rectangle, RightTriangle, getArea } from "./shapes-lib";

function getCircleArea(circle: Circle) : number {
    const { radius } = circle
    return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle): number {
    const { length, width } = rectangle
    return length * width;
}

function getSquareArea(square: Square): number {
    const { width } = square
    return getRectangleArea({length: width, width: width,type:'rectangle'});
}

function getRightTriangleArea(rightTriangle: RightTriangle): number {
    const {base, height} = rightTriangle
    return (base * height) / 2;
}




const circle: Circle= { type: 'circle', radius: 4 };

console.log({...circle,area: getArea(circle) });

const rectangle : Rectangle = { type: 'rectangle', length: 7, width: 4 };

console.log({...rectangle,area:getArea(rectangle) });

const square: Square = { type: 'square', width: 5 };

console.log({...square,area:getArea(square) });

const rightTriangle: RightTriangle = { type: 'rightTriangle', base: 9, height: 4 };

console.log({...rightTriangle,area: getArea(rightTriangle)});
