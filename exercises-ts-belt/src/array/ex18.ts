import { Product } from "./type";

const products1: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
];

const products2: Product[] = [
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

const products3: Product[] = [
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
];

export const ArrayFn18 = () => {
    const splitAt = {
        firstPart: products1.slice(0, 2),
        secondPart: products1.slice(2),
    };

    const combined = products1.concat(products2);

    const zipped = products2.map((product, index) => [product, products3[index]]);

    return {
        splitAt,
        combined,
        zipped,
    };
};
