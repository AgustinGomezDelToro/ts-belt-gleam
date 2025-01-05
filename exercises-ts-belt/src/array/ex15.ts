import { Product } from "./type";

export const ArrayFn15 = () => {
    const makeEmpty: Product[] = [];

    const makeWithIndex = Array.from({ length: 3 }, (_, index) => ({
        name: `Product ${index + 1}`,
        price: (index + 1) * 100,
        inStock: index % 2 === 0,
    }));

    return {
        makeEmpty,
        makeWithIndex,
    };
};
