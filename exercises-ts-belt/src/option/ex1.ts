// // Exercice 1: Vérifier et filtrer une option, puis obtenir une valeur par défautFonctions à utiliser : fromNullable, filter, getWithDefaultObjectif : Créer une option à partir de 'Laptop', filtrer les options contenant la lettre 'L', puis obtenir la valeur par défaut 'No Item' si l'option est vide.

import { O } from "@mobily/ts-belt";

export const optionFn1 = () => {
    const item: string | null = "Laptop";
    const option = O.fromNullable<string>(item);

    const filteredOption = O.filter(option, (value: string) =>
        value.includes("L")
    );

    const finalValue = O.getWithDefault(filteredOption, "No Item");

    console.log("Valeur finale :", finalValue);
};

optionFn1();