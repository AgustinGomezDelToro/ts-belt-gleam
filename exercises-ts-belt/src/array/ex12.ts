import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

export const ArrayFn12 = () => {
    const groupByAvailability = products.reduce((acc, product) => {
        const key = product.inStock ? 'inStock' : 'outOfStock';
        if (!acc[key]) acc[key] = [];
        acc[key].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    const sortByPrice = [...products].sort((a, b) => a.price - b.price);

    const sortByName = [...products].sort((a, b) => a.name.localeCompare(b.name));

    return {
        groupByAvailability,
        sortByPrice,
        sortByName,
    };
};
