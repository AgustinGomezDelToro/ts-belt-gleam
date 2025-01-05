import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn27 = (conditions: Array<(product: Product) => boolean> = []) => {
    if (!Array.isArray(conditions) || !conditions.every((fn) => typeof fn === 'function')) {
        throw new Error('conditions doit être un tableau de fonctions valides');
    }

    return products.reduce<Product[]>((acc, product) => {
        const satisfiesAllConditions = conditions.every((condition) => condition(product));
        if (satisfiesAllConditions) {
            acc.push(product);
        }
        return acc;
    }, []);
};

// Exemple d'utilisation :
const conditions = [
    (product: Product) => product.price > 50,
    (product: Product) => product.inStock,
];
console.log(ArrayFn27(conditions)); // Devrait retourner les produits en stock et ayant un prix supérieur à 50

// Exemple sans conditions :
console.log(ArrayFn27()); // Devrait retourner tous les produits
