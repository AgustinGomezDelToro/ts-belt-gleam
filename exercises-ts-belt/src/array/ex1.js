"use strict";
// Exercice 1: Vérifier si tous les produits sont en stock et leur nombreUtilise Array.all (pour vérifier si tous les produits sont en stock).Utilise Array.any (pour vérifier si au moins un produit n’est pas en stock).Utilise Array.length (pour obtenir le nombre total de produits).
Object.defineProperty(exports, "__esModule", { value: true });
exports.areAllProductsInStock = areAllProductsInStock;
exports.isAnyProductOutOfStock = isAnyProductOutOfStock;
exports.getTotalNumberOfProducts = getTotalNumberOfProducts;
var products = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];
// usar all de ts-belt ex : function all<A>(xs: Array<A>, predicateFn: (_1: A) => boolean): boolean
// function all<A>(predicateFn: (_1: A) => boolean): (xs: Array<A>) => boolean.
// asi function() {
//   const xs = A.makeWithIndex(5, index => index) // → [0, 1, 2, 3, 4]
//   const value = pipe(
//     xs,
//     A.tailOrEmpty, // → [1, 2, 3, 4]
//     A.take(2), // → [1, 2]
//     A.map(value => value * 2), // → [2, 4]
//   )
//
//   return JSON.stringify(value)
// }
function areAllProductsInStock(products) {
    return products.every(function (product) { return product.inStock; });
}
function isAnyProductOutOfStock(products) {
    return products.some(function (product) { return !product.inStock; });
}
function getTotalNumberOfProducts(products) {
    return products.length;
}
console.log(areAllProductsInStock(products)); // false
console.log(isAnyProductOutOfStock(products)); // true
console.log(getTotalNumberOfProducts(products)); // 3
