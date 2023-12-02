function hasEven(myNums:number[]):boolean {
    let i = 0;
    while (i < myNums.length)
    {
        if (myNums[i] %2 === 0)
        {
        return true
        }
    i++
    }  
}
let ages: number[] = [5,8,42,44]
console.log(hasEven(ages));



function startWithM(myNames: string[]): boolean {
    let allStartWithM = true;
    let i = 0;

    while (allStartWithM && i < myNames.length) {
        if (myNames[i][0] !== 'M') {
            allStartWithM = false;
        }
        i++;
    }

    return allStartWithM;
}

let familyNames:string[] = ['Vega','Lucas','Jacobo','Patricia'];
console.log(startWithM(familyNames));
let inventedNames:string[] = ['Manolo','María','Melisa']
console.log(startWithM(inventedNames));


