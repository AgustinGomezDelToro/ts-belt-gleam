import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn10 = () => {
    const newProduct = { name: 'Tablet', price: 300, inStock: true };

    const insertAt = [
        ...products.slice(0, 1),
        newProduct,
        ...products.slice(1),
    ];

    const prependToAll = products.map((product) => ({
        ...product,
        name: `New - ${product.name}`,
    }));

    const append = [...products, newProduct];

    return {
        insertAt,
        prependToAll,
        append,
    };
};
