import { Product } from "./type";

const inventory1: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];
const inventory2: Product[] = [
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: false },
];

const areProductsEqual = (a: Product, b: Product) =>
    a.name === b.name && a.price === b.price && a.inStock === b.inStock;

export const ArrayFn4 = () => {
    const difference = inventory1.filter(
        (product1) => !inventory2.some((product2) => areProductsEqual(product1, product2))
    );

    const intersection = inventory1.filter((product1) =>
        inventory2.some((product2) => areProductsEqual(product1, product2))
    );

    const union = [
        ...inventory1,
        ...inventory2.filter(
            (product2) => !inventory1.some((product1) => areProductsEqual(product1, product2))
        ),
    ];

    return {
        difference,
        intersection,
        union,
    };
};
