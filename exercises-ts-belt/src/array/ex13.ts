import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

export const ArrayFn13 = () => {
    const reversed = [...products].reverse();

    const shuffled = [...products].sort(() => Math.random() - 0.5);

    return {
        reversed,
        shuffled,
    };
};
