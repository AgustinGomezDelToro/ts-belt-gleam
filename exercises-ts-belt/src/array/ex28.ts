import { Product } from "./type";

type ProductWithQuantity = Product & {
    quantity: number;
};

const defaultProducts: ProductWithQuantity[] = [
    { name: 'Laptop', price: 1000, inStock: true, quantity: 2 },
    { name: 'Mouse', price: 25, inStock: false, quantity: 5 },
    { name: 'Keyboard', price: 75, inStock: true, quantity: 3 },
];

const defaultAccumulateFn = (acc: number, product: ProductWithQuantity) => acc + product.quantity;
const defaultInitialValue = 0;

export const ArrayFn28 = <T>(
    products: ProductWithQuantity[] = defaultProducts,
    accumulateFn: (acc: T, product: ProductWithQuantity) => T = defaultAccumulateFn as unknown as (acc: T, product: ProductWithQuantity) => T,
    initialValue: T = defaultInitialValue as unknown as T
): T => {
    if (!Array.isArray(products)) {
        throw new Error('products doit être un tableau');
    }
    if (typeof accumulateFn !== 'function') {
        throw new Error('accumulateFn doit être une fonction valide');
    }
    if (initialValue === undefined) {
        throw new Error('initialValue ne peut pas être undefined');
    }

    return products.reduce(accumulateFn, initialValue);
};
