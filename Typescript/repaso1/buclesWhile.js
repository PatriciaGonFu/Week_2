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
    var i = 0;
    while (i < myNames.length) {
        if (!myNames[i].startsWith('M')) {
            return false;
        }
        else {
            return true;
        }
        i++;
    }
}
var familyNames = ['Vega', 'Lucas', 'Jacobo', 'Patricia'];
console.log(startWithM(familyNames));
var inventedNames = ['Manolo', 'María', 'Melisa'];
console.log(startWithM(inventedNames));
