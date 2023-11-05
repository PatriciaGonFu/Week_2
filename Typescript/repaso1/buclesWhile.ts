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

function startWithM(myNames:string[]):boolean{
    let i=0;
    while (i<myNames.length)
    {
        if (!myNames[i].startsWith('M')){
            return false
        }
        else{
            return true
        }
        i++
    }
}

let familyNames:string[] = ['Vega','Lucas','Jacobo','Patricia'];
console.log(startWithM(familyNames));
let inventedNames:string[] = ['Manolo','María','Melisa']
console.log(startWithM(inventedNames));

// no me deja compilar porque no reconoce el método Startswith


