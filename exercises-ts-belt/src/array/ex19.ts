import { Product } from "./type";

const products1: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
];

const products2: Product[] = [
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn19 = () => {
    const swapAt = [...products1];

    if (swapAt[0] !== undefined && swapAt[1] !== undefined) {
        [swapAt[0], swapAt[1]] = [swapAt[1], swapAt[0]];
    }

    const union = [
        ...products1,
        ...products2.filter(
            (product2) =>
                !products1.some(
                    (product1) =>
                        product1.name === product2.name &&
                        product1.price === product2.price &&
                        product1.inStock === product2.inStock
                )
        ),
    ];

    return {
        swapAt,
        union,
    };
};
