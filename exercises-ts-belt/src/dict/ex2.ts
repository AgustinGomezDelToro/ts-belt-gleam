// // Exercice 2: Supprimer plusieurs clés et vérifier leur absenceFonctions à utiliser : deleteKeys, keysObjectif : Supprimer les clés 'price' et 'stock' de l'objet obj, puis vérifier que ces clés ne sont plus présentes dans l'objet.

import { D } from "@mobily/ts-belt";

interface Product {
    name: string;
    price: number;
    stock: boolean;
    brand: string;
}

type ProductWithOptionalKeys = Omit<Product, "price" | "stock"> & {
    price?: number;
    stock?: boolean;
};

const obj: Product = {
    name: "Laptop",
    price: 1000,
    stock: true,
    brand: "Dell",
};

export const DictFn2 = () => {
    const objWithoutKeys: ProductWithOptionalKeys = D.deleteKeys(obj, [
        "price",
        "stock",
    ]);
    console.log(objWithoutKeys);

    const keys = D.keys(objWithoutKeys);
    console.log(keys);

    const isPricePresent = keys.includes("price");
    console.log(isPricePresent);
    const isStockPresent = keys.includes("stock");
    console.log(isStockPresent);
};