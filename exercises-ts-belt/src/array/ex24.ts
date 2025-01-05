// // Exercice 4: Créer un tableau d’objets résumant la quantité totale et le prix moyen par catégorie
// Objectif : Chaque produit appartient à une catégorie, tu veux calculer la quantité totale et le prix moyen pour chaque catégorie.
// Utilise Array.reduce (pour accumuler les produits par catégorie, calculer la somme des prix et des quantités, puis retourner le prix moyen et la quantité totale pour chaque catégorie).

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

export const ArrayFn24 = () => {
    const summaryByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = { totalQuantity: 0, totalPrice: 0, productCount: 0 };
        }

        const categoryData = acc[product.category]!;
        categoryData.totalQuantity += product.quantity;
        categoryData.totalPrice += product.price * product.quantity;
        categoryData.productCount += product.quantity;

        return acc;
    }, {} as Record<string, { totalQuantity: number; totalPrice: number; productCount: number }>);

    return Object.entries(summaryByCategory).map(([category, data]) => ({
        category,
        totalQuantity: data.totalQuantity,
        averagePrice: data.totalPrice / data.productCount,
    }));
};
