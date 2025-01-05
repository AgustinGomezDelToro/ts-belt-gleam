// // Exercice 3: Filtrer les propriétés numériques d'un objetFonctions à utiliser : filter, valuesObjectif : Filtrer l'objet obj pour ne garder que les propriétés dont la valeur est un nombre, puis récupérer les valeurs des propriétés restantes.

// const obj = { name: 'Laptop', price: 1000, stock: true, category: 'Electronics' };
import { D } from "@mobily/ts-belt";

type Product = {
    name: string;
    price: number;
    stock: boolean;
    category: string;
};

const obj: Product = {
    name: "Laptop",
    price: 1000,
    stock: true,
    category: "Electronics",
};

export const DictFn3 = () => {
    const numericProperties = D.filter(
        obj,
        (value): value is number => typeof value === "number"
    ) as Record<string, number>;
    console.log(numericProperties);

    const values = D.values(numericProperties);
    console.log(values);
};