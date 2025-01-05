import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn8 = () => {
    const foundProduct = products.find((product) => product.name === 'Keyboard');

    const productIndex = products.findIndex((product) => product.price === 1000);

    const productAtIndex = products[2] ?? null;

    return {
        foundProduct,
        productIndex,
        productAtIndex,
    };
};
