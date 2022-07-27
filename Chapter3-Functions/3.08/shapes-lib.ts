
export const PI = 3.14;

interface Shape  {
    type: 'circle' | 'rectangle' | 'rightTriangle' | 'square';
    area?: number;
    }

export interface Circle extends Shape {
    type: 'circle';
    radius: number;
}

export interface Rectangle extends Shape {
    type: 'rectangle';     
    length: number;
    width: number;
}

export interface RightTriangle extends Shape {
    type: 'rightTriangle'; 
    base: number;   
    height: number;
}

export interface Square extends Shape { 
    type: 'square';
    width: number;
}




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



export function getArea(shape: Shape) : number{
  switch (shape.type) {
    case 'circle':
        return getCircleArea(shape as Circle);
    case 'rectangle':
        return getRectangleArea(shape as Rectangle);
    case 'square':
        return getSquareArea(shape as Square);
    case 'rightTriangle':
        return getRightTriangleArea(shape as RightTriangle);
  }
}