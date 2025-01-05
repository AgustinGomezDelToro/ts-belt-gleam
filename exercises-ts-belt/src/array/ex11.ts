import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

export const ArrayFn11 = () => {
    const slice = products.slice(1, 3);

    const takeExactly = products.slice(0, 2);

    const takeWhile = products.filter((product) => product.price < 100);

    return {
        slice,
        takeExactly,
        takeWhile,
    };
};
