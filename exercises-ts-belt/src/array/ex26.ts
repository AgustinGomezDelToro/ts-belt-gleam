import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn26 = (filterFn: (product: Product) => boolean = () => true) => {
    const total = products.reduce((acc, product) => {
        if (filterFn(product)) {
            return acc + product.price;
        }
        return acc;
    }, 0);

    return total;
};

// Exemple d'utilisation :
const filterInStock = (product: Product) => product.inStock;
console.log(ArrayFn26(filterInStock)); // Devrait retourner la somme des produits en stock (1075)

// Utilisation sans argument :
console.log(ArrayFn26()); // Devrait retourner la somme de tous les produits (1100)
