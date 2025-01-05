// // Exercice 4: Appliquer une action seulement si une condition est vraieFonctions à utiliser : ifElse, identity, tapObjectif : Si un nombre est pair, multiplie-le par 2 et affiche 'Nombre pair'. Sinon, retourne 'Non pair' et l'identité.Données :

// const number = 7;
import { F } from "@mobily/ts-belt";

export const functionFn4 = () => {
    const number = 7;

    const isEven = (n: number) => n % 2 === 0;

    const onTrue = (n: number) => {
        const result = n * 2;
        F.tap((_: number) => console.log("Nombre pair"))(result);
        return result;
    };

    const onFalse = F.always("Non pair");

    const checkNumber = F.ifElse<number, number | string>(
        isEven,
        onTrue,
        onFalse
    );

    const result = checkNumber(number);
    console.log("result:", result);
};