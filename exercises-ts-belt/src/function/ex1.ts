// // Exercice 1: Exécuter une fonction après plusieurs appelsFonctions à utiliser : after, always, identityObjectif : Crée une fonction qui retourne toujours 'Appel réussi' après avoir été appelée 3 fois, puis renvoie la valeur d'origine avec identity.

// const calls = 3;
import { F } from "@mobily/ts-belt";

export const functionFn1 = () => {
    const calls = 3;

    const alwaysSuccess = F.always("Appel réussi");

    const identityFn = F.identity;

    const afterFn = F.after(calls, alwaysSuccess);

    const combinedFn = (arg: any) => {
        const result = afterFn();
        if (result === undefined) {
            return identityFn(arg);
        } else {
            return result;
        }
    };

    console.log(combinedFn("Premier appel"));
    console.log(combinedFn("Deuxième appel"));
    console.log(combinedFn("Troisième appel"));
    console.log(combinedFn("Quatrième appel"));
    console.log(combinedFn("Cinquième appel"));
};