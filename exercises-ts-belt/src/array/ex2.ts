import { Product } from "./type";  // Asegúrate de que el archivo "type.ts" esté correctamente definido.

const products1: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Headphones', price: 50, inStock: true },
];

const products2: Product[] = [
    { name: 'catrina', price: 900, inStock: true },
    { name: 'ibiza', price: 45, inStock: true },
    { name: 'barcelona', price: 10, inStock: true },
];

const products3: Product[] = [
    { name: 'lala', price: 900, inStock: true },
    { name: 'lolo', price: 45, inStock: false },
    { name: 'lili', price: 10, inStock: true },
];

export const ArrayFn2 = () => {
    // Utilizando las funciones de la propiedad Array que tú mismo has creado:
    const newProducts1 = Array.prepend(products1, { name: 'Monitor', price: 200, inStock: true });
    const newProducts2 = Array.append(products2, { name: 'Keyboard', price: 75, inStock: true });
    const productAtIndex = Array.at(products3, 2); // Recogiendo el producto en el índice 2

    return {
        newProducts1,
        newProducts2,
        productAtIndex,
    };
};

// Definición de las funciones de Array (prepend, append, at)
export const Array = {
    prepend: (products: Product[], product: Product) => {
        // Añadir un producto al principio del array
        return [product, ...products];
    },
    append: (products: Product[], product: Product) => {
        // Añadir un producto al final del array
        return [...products, product];
    },
    at: (products: Product[], index: number) => {
        // Recuperar un producto en el índice especificado
        return products[index];
    }
};

// Para probar la función:
ArrayFn2();
