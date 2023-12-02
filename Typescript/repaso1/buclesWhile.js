function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
}
var ages = [5, 8, 42, 44];
console.log(hasEven(ages));
function startWithM(myNames) {
    var allStartWithM = true;
    var i = 0;
    while (allStartWithM && i < myNames.length) {
        if (myNames[i][0] !== 'M') {
            allStartWithM = false;
        }
        i++;
    }
    return allStartWithM;
}
var familyNames = ['Vega', 'Lucas', 'Jacobo', 'Patricia'];
console.log(startWithM(familyNames));
var inventedNames = ['Manolo', 'María', 'Melisa'];
console.log(startWithM(inventedNames));
