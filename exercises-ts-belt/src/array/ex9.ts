import { Product } from "./type";

const nestedProducts: Product[][] = [
    [
        { name: "Laptop", price: 1000, inStock: true },
        { name: "Mouse", price: 25, inStock: false },
    ],
    [
        { name: "Keyboard", price: 75, inStock: true },
        { name: "Monitor", price: 200, inStock: true },
    ],
];

const deeplyNestedProducts: any[] = [
    [
        { name: "Laptop", price: 1000, inStock: true },
        [
            { name: "Mouse", price: 25, inStock: false },
            [{ name: "Headphones", price: 50, inStock: true }]
        ]
    ],
    [
        { name: "Keyboard", price: 75, inStock: true },
        { name: "Monitor", price: 200, inStock: true }
    ]
];

export const ArrayFn9 = () => {
    const flatProducts = nestedProducts.flat(1);

    const deepFlatProducts = deeplyNestedProducts.flat(Infinity);

    return {
        flatProducts,
        deepFlatProducts,
    };
};
