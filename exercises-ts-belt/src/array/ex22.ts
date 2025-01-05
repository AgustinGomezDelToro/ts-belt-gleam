// // Exercice 2: Calculer le total de la quantité de chaque produit en regroupant par catégories
// Objectif : Chaque produit a une catégorie et une quantité associée. Tu veux calculer la somme des quantités pour chaque catégorie distincte.
// Utilise Array.reduce (pour accumuler les quantités par catégorie dans un objet, en vérifiant l'existence de la catégorie et en y ajoutant les quantités).

import { Product } from "./type";

type ProductWithCategory = Product & {
    category: string;
    quantity: number;
};

const products: ProductWithCategory[] = [
    { name: 'Laptop', price: 1000, inStock: true, category: 'Electronics', quantity: 2 },
    { name: 'Mouse', price: 25, inStock: false, category: 'Accessories', quantity: 5 },
    { name: 'Monitor', price: 200, inStock: true, category: 'Electronics', quantity: 1 },
    { name: 'Keyboard', price: 75, inStock: true, category: 'Accessories', quantity: 3 },
];

export const ArrayFn22 = () => {
    const totalQuantitiesByCategory = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + product.quantity;
        return acc;
    }, {} as Record<string, number>);

    return totalQuantitiesByCategory;
};
