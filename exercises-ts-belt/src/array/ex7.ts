import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
    { name: 'Headphones', price: 50, inStock: false },
];

export const ArrayFn7 = () => {
    const filteredInStock = products.filter((product) => product.inStock);

    const filteredWithIndex = products.filter((_, index) => index % 2 === 0);

    const filterMap = products
        .filter((product) => product.inStock)
        .map((product) => ({ ...product, price: product.price * 0.9 }));

    return {
        filteredInStock,
        filteredWithIndex,
        filterMap,
    };
};
