// // Exercice 4: Filtrer les propriétés dont le nom commence par une lettre spécifiqueFonctions à utiliser : filterWithKey, keysObjectif : Filtrer l'objet obj pour ne conserver que les propriétés dont le nom commence par 'p', puis récupérer les clés restantes.

// const obj = { price: 1000, stock: true, brand: 'Dell', processor: 'Intel' };

import { D } from "@mobily/ts-belt";

type ProductInfo = {
    price: number;
    stock: boolean;
    brand: string;
    processor: string;
};

const obj: ProductInfo = {
    price: 1000,
    stock: true,
    brand: "Dell",
    processor: "Intel",
};

export const DictFn4 = () => {
    const filteredObj = D.filterWithKey(obj, (key): key is keyof ProductInfo =>
        key.startsWith("p")
    ) as {
        price: number;
        processor: string;
    };

    console.log(filteredObj);
    const remainingKeys = D.keys(filteredObj);
    console.log(remainingKeys);
};