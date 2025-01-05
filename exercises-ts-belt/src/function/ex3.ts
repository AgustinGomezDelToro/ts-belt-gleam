// // Exercice 3: Limiter le nombre d'appels d'une fonctionFonctions à utiliser : before, always, identityObjectif : Crée une fonction qui ne peut être appelée que deux fois, renvoyant toujours 'Fonction limitée' pendant ces deux appels, puis renvoie l'identité après cela.Données :

// const limit = 2;
import { F } from "@mobily/ts-belt";

export const functionFn3 = () => {
    const limit = 2;

    const alwaysLimited = F.always("Fonction limitée");

    let count = 0;
    const limitedFunction = () => {
        if (count < limit) {
            count++;
            return alwaysLimited();
        } else {
            return undefined;
        }
    };

    const identityFn = F.identity;

    const combinedFunction = (arg: any) => {
        const result = limitedFunction();
        if (result !== undefined) {
            return result;
        } else {
            return identityFn(arg);
        }
    };
    console.log("combinedFunction:", combinedFunction("Premier appel"));
    console.log("combinedFunction:", combinedFunction("Deuxieme appel"));
    console.log("combinedFunction:", combinedFunction("Troisieme appel"));
    console.log("combinedFunction:", combinedFunction("Quatrieme appel"));
};