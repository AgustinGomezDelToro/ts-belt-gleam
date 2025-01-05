// // Exercice 5: Créer une structure imbriquée des produits groupés par disponibilité et nom
// Objectif : Tu veux organiser les produits dans une structure imbriquée où les produits sont d’abord regroupés par disponibilité (en stock ou non), puis par nom de produit, tout en accumulant la quantité de chaque produit dans chaque groupe.
// Utilise Array.reduce (pour créer une structure imbriquée qui regroupe d'abord les produits par disponibilité, puis par nom, en additionnant la quantité de chaque produit).

import { Product } from "./type";

type ProductWithQuantity = Product & {
    quantity: number;
};

const products: ProductWithQuantity[] = [
    { name: 'Laptop', price: 1000, inStock: true, quantity: 2 },
    { name: 'Laptop', price: 950, inStock: true, quantity: 1 },
    { name: 'Mouse', price: 25, inStock: false, quantity: 5 },
    { name: 'Keyboard', price: 75, inStock: true, quantity: 3 },
    { name: 'Mouse', price: 20, inStock: false, quantity: 2 },
];

export const ArrayFn25 = () => {
    return products.reduce<{
        inStock: Record<string, ProductWithQuantity>;
        outOfStock: Record<string, ProductWithQuantity>;
    }>((acc, product) => {
        const availabilityKey = product.inStock ? 'inStock' : 'outOfStock';

        // Aseguramos que la clave 'availabilityKey' existe en el acumulador
        if (!acc[availabilityKey]) {
            acc[availabilityKey] = {};
        }

        if (!acc[availabilityKey][product.name]) {
            acc[availabilityKey][product.name] = { ...product, quantity: 0 };
        }

        // Incrementar la cantidad del producto existente
        acc[availabilityKey][product.name]!.quantity += product.quantity;

        return acc;
    }, { inStock: {}, outOfStock: {} });
};

// Ejemplo de uso:
console.log(ArrayFn25());