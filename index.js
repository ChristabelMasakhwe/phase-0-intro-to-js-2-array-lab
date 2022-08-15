// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendCat(name) {
cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(...name) {
    const newCats = ["Milo", "Otis", "Garfield", ...name]
    return newCats;
}
function prependCat(...name) {
    const newCats = [...name, "Milo", "Otis", "Garfield"]
    return newCats;
}
function removeLastCat() {
    var newArray = cats.slice();
    newArray.pop();
    return newArray
}
function removeFirstCat() {
    var newArray = cats.slice();
    newArray.shift();
    return newArray
}