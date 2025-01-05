import { Product } from "./type";

const products: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
];
const accessories: Product[] = [
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
];

export const ArrayFn3 = () => {
    const combined = products.concat(accessories);
    const allCombined = combined.concat(products, accessories);
    const copiedList = [...allCombined];

    return copiedList;
};
