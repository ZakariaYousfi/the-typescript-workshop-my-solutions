
type Product = {
    name: string,
    price: number,
    amount: number,
}
type Post = {
    header: string,
    method: string,
    product: Product
}
type Put = {
    header: string,
    method: string,
    product: Product,
    productId: number
}

type SomeRequest = Post | Put

const Products : Product[] = []

function ProcessRequest(request: SomeRequest) {
    if('productId' in request) Products[request.productId] = {
        ...request.product
    }
    else Products.push(request.product)
}

const apple : Product = {
    name: 'apple',
    price: 1,
    amount: 10
}

const mango : Product = {
    name: 'mango',
    price: 2,
    amount: 15
}

let products = [apple,mango]


const postAppleRequest : Post = {
    header: "zzzzz",
    method: 'new',
    product: apple,
};
const putMangoRequest : Put = {
    header:"ggggg",
    method: 'update',
    product: mango,
    productId: 2
};

ProcessRequest(postAppleRequest);
ProcessRequest(putMangoRequest);

console.log(products)

