import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn17 = () => {
    const removeAt = products.filter((_, index) => index !== 1);

    const replaceAt = products.map((product, index) =>
        index === 1 ? { name: 'Tablet', price: 300, inStock: true } : product
    );

    return {
        removeAt,
        replaceAt,
    };
};
