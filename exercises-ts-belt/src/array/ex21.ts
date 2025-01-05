// // Exercice 1: Créer un tableau de produits uniques par prix le plus bas
// Objectif : Tu veux obtenir une liste de produits uniques en fonction de leur nom, en gardant uniquement le produit avec le prix le plus bas pour chaque nom.
// Utilise Array.reduce (pour accumuler les produits dans un tableau, en vérifiant si un produit avec le même nom existe déjà et en gardant celui avec le prix le plus bas).

import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Laptop', price: 950, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Mouse', price: 20, inStock: true },
];

export const ArrayFn21 = () => {
    const uniqueByLowestPrice = products.reduce((acc, product) => {
        const existingProduct = acc.find((p) => p.name === product.name);
        if (!existingProduct || product.price < existingProduct.price) {
            return acc.filter((p) => p.name !== product.name).concat(product);
        }
        return acc;
    }, [] as Product[]);

    return uniqueByLowestPrice;
};
