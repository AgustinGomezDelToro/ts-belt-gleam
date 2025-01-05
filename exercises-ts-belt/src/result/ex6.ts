// // Exercice 6: Appliquer une transformation à une erreur et récupérer une optionFonctions à utiliser : fromNullable, mapError, toOptionObjectif : Créer un Result à partir d'une valeur nullable, appliquer une transformation sur l'erreur, puis convertir le résultat en option.

// const value = null;
import { R } from "@mobily/ts-belt";

export const resultFn6 = () => {
    const value: string | null = null;
    const result = R.fromNullable(value, "Erreur : Valeur manquante");

    const transformedErrorResult = R.mapError(
        result,
        (err: string) => `${err} - Veuillez réessayer`
    );

    const option = R.toOption(transformedErrorResult);

    console.log("Option :", option);
};

resultFn6();