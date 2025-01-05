// // Exercice 2: Manipuler une valeur nullable et récupérer une valeur par défautFonctions à utiliser : fromNullable, isOk, getWithDefault, mapObjectif : Créer un Result à partir d'une valeur nullable, vérifier si c'est un succès, appliquer une transformation sur la valeur, puis récupérer une valeur par défaut si l'option est vide.

// const value = null;
import { Result, O } from "@mobily/ts-belt";

export const resultFn2 = () => {
    const value: string | null = null;
    const result = O.fromNullable<string | null>(value);

    if (O.isSome(result)) {
        console.log("Valeur présente:", result);
    } else {
        console.log("Aucune valeur trouvée.");
    }

    const transformedResult = O.map(result, (val: string) => val.toUpperCase());
    const finalValue = O.getWithDefault(transformedResult, "DEFAULT VALUE");

    console.log("Valeur finale :", finalValue);
};