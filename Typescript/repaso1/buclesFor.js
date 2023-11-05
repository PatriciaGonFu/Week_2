// function evenNumbers(num:number):void{
//     for (let i:number = 1;i<=num;i +=2);
//     {
//         console.log(i);
//     }
// }
// evenNumbers(15);
// no se por qué no reconoce i al pedir el console.log
// Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
// no sé cómo se hace
// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
function isRainbow(colors) {
    var rainbow = ['rojo', 'naranja', 'amarillo', 'verde', 'añil', 'azul', 'violeta'];
    for (var i = 0; i < colors.length; i++) {
        if (rainbow.includes(colors[i])) {
            console.log("El color ".concat(colors[i], ", est\u00E1 en el arcoiris"));
        }
        else {
            console.log("El color ".concat(colors[i], " no est\u00E1 incluido en el arcoiris"));
        }
    }
}
isRainbow(['verde', 'rosa', 'amarillo', 'morado']);
