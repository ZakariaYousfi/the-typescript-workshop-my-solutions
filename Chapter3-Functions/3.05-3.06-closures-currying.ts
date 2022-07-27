// ran using ts-node 

interface Order {
    id: number;
    color: string;
    size: string
}

let id = 0 

export const createOrder = ( color: string, size: string, quantity: number ) : Order [] => {

    const orders = []
    for(let i = 0; i < quantity; i++) {
        orders.push({id: id++, color,size})
    }
    return orders
}

const orderOne = createOrder('red','M',4)
console.log(orderOne)

const orderTwo = createOrder('blue','S',7)
console.log(orderTwo)

export const orderFactory = () : (( color: string, size: string, qty: number ) => Order[]) => {
    let id = 0
    return (color: string, size: string, qty: number): Order[] => {
        const orders = []
        for(let i=0; i< qty; i++){ 
            orders.push({id: id++, color, size})
    }
    return orders
}
}

const createOrderClosure = orderFactory()

console.log(createOrderClosure('red','M',4))
console.log(createOrderClosure('Blue','S',7))

// start of exercise 3.06

export const orderFacotoryCurrying = () : ((color: string ) => (size: string) => (qty: number) => Order[]) => {
    let id = 0
    return (color: string): ((size: string) => (qty: number) => Order[]) => (size: string) => (qty: number): Order[] => {
        const orders = []
        for(let i = 0; i < qty; i++) orders.push({id: id++, color, size})
        return orders
    }
}

const createOrderCurrying = orderFacotoryCurrying()

const redLine = createOrderCurrying('red')

const redSmall = redLine('S')

const redMedium = redLine('M')

const blueSmall = createOrderCurrying('blue')('S')

const orderOneC = redMedium(4);
console.log(orderOneC);

const orderTwoC = blueSmall(7);
console.log(orderTwoC);

const orderThreeC = redSmall(11);
console.log(orderThreeC);


