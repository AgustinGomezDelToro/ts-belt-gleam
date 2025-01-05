import { R } from "@mobily/ts-belt";

export const resultFn4 = () => {
    const result = R.fromNullable<null, string>(null, "Erreur");

    const flippedResult = R.flip(result);

    const errorHandledResult = R.mapError(
        flippedResult,
        (err: string) => `${err} - Résolu`
    );

    const finalResult = R.recover(errorHandledResult, "Valeur par défaut");
    console.log("Résultat final :", finalResult);
};

resultFn4();