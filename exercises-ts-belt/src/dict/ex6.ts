// // Exercice 6: Récupérer la valeur d'une clé avec sécuritéFonctions à utiliser : get, getUnsafeObjectif : Récupérer la valeur de la clé 'price' de manière sécurisée (avec get), puis tenter de récupérer la valeur de la clé 'stock' sans sécurité (avec getUnsafe).

// const obj = { name: 'Laptop', price: 1000, stock: true };
import { D, O } from "@mobily/ts-belt";

type Product = {
    name: string;
    price: number;
    stock: boolean;
};

export const DictFn6 = () => {
    const obj: Product = { name: "Laptop", price: 1000, stock: true };

    const priceOption = D.get(obj, "price");
    if (O.isSome(priceOption)) {
        const price = O.getExn(priceOption);
        console.log(price);
    } else {
        console.log("price not found");
    }

    try {
        const stock = D.getUnsafe(obj, "stock");
        console.log(stock);
    } catch (error) {
        console.log(error);
    }

    try {
        const nonExistent = D.getUnsafe(obj, "nonExistentKey" as keyof Product);
        console.log(nonExistent);
    } catch (error) {
        console.log(error);
    }
};