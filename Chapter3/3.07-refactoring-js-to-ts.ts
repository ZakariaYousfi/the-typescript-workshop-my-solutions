
export const PI = 3.14;

interface Shape  {
    type: 'circle' | 'rectangle' | 'rightTriangle' | 'square';
    area?: number;
    }

interface Circle extends Shape {
    type: 'circle';
    radius: number;
}

interface Rectangle extends Shape {
    type: 'rectangle';     
    length: number;
    width: number;
}

interface RightTriangle extends Shape {
    type: 'rightTriangle'; 
    base: number;   
    height: number;
}

interface Square extends Shape { 
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



function getArea(shape: Shape) : number{
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

const circle: Circle= { type: 'circle', radius: 4 };

console.log({...circle,area: getArea(circle) });

const rectangle : Rectangle = { type: 'rectangle', length: 7, width: 4 };

console.log({...rectangle,area:getArea(rectangle) });

const square: Square = { type: 'square', width: 5 };

console.log({...square,area:getArea(square) });

const rightTriangle: RightTriangle = { type: 'rightTriangle', base: 9, height: 4 };

console.log({...rightTriangle,area: getArea(rightTriangle)});
