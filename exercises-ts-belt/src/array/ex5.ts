import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

export const ArrayFn5 = () => {
    const drop = products.slice(1);

    const dropExactly = products.slice(2);

    const dropWhile = products.filter((product) => !product.inStock);

    return {
        drop,
        dropExactly,
        dropWhile,
    };
};
