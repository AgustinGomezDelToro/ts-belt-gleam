import { Product } from "./type";

const defaultProducts: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

const defaultDiscountCriteria = (product: Product) => product.price > 100; // Descuento para productos > 100
const defaultDiscountPercentage = 10; // Descuento del 10%

export const ArrayFn30 = (
    products: Product[] = defaultProducts,
    discountCriteria: (product: Product) => boolean = defaultDiscountCriteria,
    discountPercentage: number = defaultDiscountPercentage
): number => {
    if (!Array.isArray(products)) {
        throw new Error('products doit être un tableau');
    }
    if (typeof discountCriteria !== 'function') {
        throw new Error('discountCriteria doit être une fonction valide');
    }
    if (typeof discountPercentage !== 'number' || discountPercentage < 0 || discountPercentage > 100) {
        throw new Error('discountPercentage doit être un nombre compris entre 0 et 100');
    }

    const discountFactor = 1 - discountPercentage / 100;

    const totalPrice = products.reduce((acc, product) => {
        if (discountCriteria(product)) {
            return acc + product.price * discountFactor;
        }
        return acc + product.price;
    }, 0);

    return totalPrice;
};
