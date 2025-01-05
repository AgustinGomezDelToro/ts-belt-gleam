// // Exercice 7: Manipuler un Result d'une promesse et récupérer la valeur avec une exceptionFonctions à utiliser : fromPromise, map, getExnObjectif : Transformer une promesse en Result, appliquer une transformation, puis récupérer la valeur avec exception si le Result échoue.

import { R } from "@mobily/ts-belt";

const fetchData = async () => {
    if (Math.random() > 0.5) {
        return "Données";
    }
    throw new Error("Erreur");
};

export const resultFn7 = async () => {
    const result = await R.fromPromise(fetchData());
    const transformedResult = R.map(result, (data: string) => data.toUpperCase());

    try {
        const value = R.getExn(transformedResult);
        console.log("Valeur récupérée :", value);
    } catch (err) {
        console.error("Erreur rencontrée :", err);
    }
};

resultFn7();