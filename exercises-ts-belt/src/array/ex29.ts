import { Product } from "./type";

type ProductWithCategory = Product & {
    category: string;
    quantity: number;
};

const defaultProducts: ProductWithCategory[] = [
    { name: 'Laptop', price: 1000, inStock: true, category: 'Electronics', quantity: 2 },
    { name: 'Mouse', price: 25, inStock: false, category: 'Accessories', quantity: 5 },
    { name: 'Monitor', price: 200, inStock: true, category: 'Electronics', quantity: 1 },
];

const defaultGroupFn = (product: ProductWithCategory) => product.category;

export const ArrayFn29 = (
    products: ProductWithCategory[] = defaultProducts,
    groupFn: (product: ProductWithCategory) => string = defaultGroupFn
): Record<string, { totalQuantity: number; products: ProductWithCategory[] }> => {
    if (!Array.isArray(products)) {
        throw new Error('products doit être un tableau');
    }
    if (typeof groupFn !== 'function') {
        throw new Error('groupFn doit être une fonction valide');
    }

    return products.reduce<Record<string, { totalQuantity: number; products: ProductWithCategory[] }>>(
        (acc, product) => {
            const groupKey = groupFn(product);
            if (!acc[groupKey]) {
                acc[groupKey] = { totalQuantity: 0, products: [] };
            }
            acc[groupKey].totalQuantity += product.quantity;
            acc[groupKey].products.push(product);

            return acc;
        },
        {}
    );
};
