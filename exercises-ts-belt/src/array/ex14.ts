import { Product } from "./type";

const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn14 = () => {
    const uniq = products.filter((product, index, self) =>
            index === self.findIndex((p) =>
                p.name === product.name && p.price === product.price && p.inStock === product.inStock
            )
    );

    const uniqByName = products.filter((product, index, self) =>
        index === self.findIndex((p) => p.name === product.name)
    );

    return {
        uniq,
        uniqByName,
    };
};
