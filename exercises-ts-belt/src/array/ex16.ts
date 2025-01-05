import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn16 = () => {
    const totalSum = products.reduce((acc, product) => acc + product.price, 0);

    const reduceReverse = [...products].reverse().reduce((acc, product) => acc + product.price, 0);

    const reduceWithIndex = products.reduce((acc, product, index) => acc + product.price * (index + 1), 0);

    return {
        totalSum,
        reduceReverse,
        reduceWithIndex,
    };
};
