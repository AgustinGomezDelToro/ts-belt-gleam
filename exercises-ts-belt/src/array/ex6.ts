import { Product } from "./type";

const products1: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
];
const products2: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Keyboard', price: 75, inStock: true },
];

const areProductsEqual = (a: Product, b: Product) =>
    a.name === b.name && a.price === b.price && a.inStock === b.inStock;

const areListsEqual = (list1: Product[], list2: Product[]) =>
    list1.length === list2.length && list1.every((product, index) => {
        const product2 = list2[index];
        return product2 !== undefined && areProductsEqual(product, product2);
    });

export const ArrayFn6 = () => {
    const eq = areListsEqual(products1, products2);

    const includes = products1.some((product1) =>
        areProductsEqual(product1, { name: 'Laptop', price: 1000, inStock: true })
    );

    return {
        eq,
        includes,
    };
};
