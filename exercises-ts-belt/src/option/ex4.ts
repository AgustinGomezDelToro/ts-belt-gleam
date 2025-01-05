// // Exercice 4: Vérifier une option, appliquer une transformation, puis obtenir le résultat sous forme nullableFonctions à utiliser : fromNullable, isSome, map, toNullableObjectif : Créer une option à partir d'une valeur, vérifier si elle est présente, appliquer une transformation en augmentant de 10%, puis retourner cette option sous forme nullable.

// const value = 1000;
import { O } from "@mobily/ts-belt";

export const optionFn4 = () => {
    const value = 1000;

    const option = O.fromNullable(value);

    if (O.isSome(option)) {
        console.log("L'option contient une valeur:", value);
    } else {
        console.log("Aucune valeur présente dans l'option.");
    }

    const transformedOption = O.map(option, (val: number) => val * 1.1);
    const nullableResult = O.toNullable(transformedOption);

    console.log("Valeur finale sous forme nullable:", nullableResult);
};

optionFn4();