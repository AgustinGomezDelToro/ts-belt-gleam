import { Product } from "./type";

const product: Product = { name: 'Mouse', price: 25, inStock: true };

export const ArrayFn20 = () => {
    const repeated = Array(5).fill(product);

    const transformed = repeated.map((item, index) => ({
        ...item,
        name: `${item.name} ${index + 1}`,
        price: item.price * (index + 1),
    }));

    return {
        repeated,
        transformed,
    };
};
