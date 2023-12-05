// function evenNumbers(num:number):void{
//     for (let i:number = 1;i<=num;i +=2)
//     {
//         console.log(i);
//     }
// }

// evenNumbers(15);

// Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

function myRevert(myArr: number[]): number[] {
        let newArray: number[] = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        newArray.push(myArr[i])
    }
    return newArray;
}

let ages: number[] = [5,8,42,44];
console.log(myRevert(ages));



// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

// function isRainbow (colors: string[]):void{
//     const rainbow = ['rojo', 'naranja', 'amarillo', 'verde', 'añil', 'azul', 'violeta']
//     for(let i=0; i<colors.length; i++){
//         if (rainbow.includes(colors[i])){
//             console.log(`El color ${colors[i]}, está en el arcoiris`);
//         }
//         else {
//             console.log (`El color ${colors[i]} no está incluido en el arcoiris`);            
//         }
//     }
// }

// isRainbow(['verde','rosa','amarillo','morado']);

// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords:string[]):number{
    let suma = 0;
    for (let i=0; i<myWords.length; i++){
        suma = suma + myWords[i].length;
    }
    return suma
}
console.log(add(['gato','perro','mono']))

module.exports = {
    add
}


