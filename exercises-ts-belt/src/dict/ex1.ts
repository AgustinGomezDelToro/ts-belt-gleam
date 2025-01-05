// // Exercice 1: Supprimer une clé d'un objetFonctions à utiliser : deleteKey, getObjectif : Supprimer la clé 'price' de l'objet obj et vérifier que la valeur associée n'est plus accessible.

// const objf = { name: "Laptop", price: 1000, stock: true };
import { D, O } from "@mobily/ts-belt";
interface Product {
    name: string;
    price: number;
    stock: boolean;
}

type ProductWithoutPrice = Omit<Product, "price"> & { price?: number };

const objf: Product = { name: "Laptop", price: 1000, stock: true };

export const DictFn1 = () => {
    const objWithoutPrice: ProductWithoutPrice = D.deleteKey(objf, "price");
    console.log(objWithoutPrice);

    const priceValue = D.get(objWithoutPrice, "price");
    console.log(priceValue);

    const isPricePresent = O.isSome(priceValue);
    console.log(isPricePresent);
};