function zodiac (month:number,day:number){
    
    if (month === 12 && day >=22 || month === 1 && day <=19)
    {
        return 'Capricornio'
    }
    else if (month === 3 && day >=21 || month === 4 && day <=19)
    {
        return 'Aries'
    }
    else if (month === 4 && day >=20 || month === 5 && day <=20)
    {
        return 'Tauro'
    }
    else if (month === 5 && day >=21 || month === 6 && day <=20)
    {
        return 'Geminis'
    }
    else if (month === 6 && day >=21 || month === 7 && day <=22)
    {
        return 'Cáncer'
    }
    else if (month === 7 && day >=23 || month === 8 && day <=22)
    {
        return  'Leo'
    }
    else if (month === 8 && day >=23 || month === 9 && day <=22)
    {
        return  'Virgo'
    }
    else if (month === 9 && day >=23 || month === 10 && day <=22)
    {
        return 'Libra'
    }
    else if (month === 10 && day >=23 || month === 11 && day <=21)
    {
        return  'Escorpio'
    }
    else if (month === 11 && day >=22 || month === 12 && day <=21)
    {
        return  'Sagitario'
    }
    else if (month === 1 && day >=20 || month === 2 && day <=18)
    {
        return  'Acuario'
    }
    else if (month === 2 && day >=19 || month === 3 && day <=20)
    {
        return  'Piscis'
    }
}
function continent (country: string):void {
    if (country === 'Italia' || country === 'Francia' || country === 'Dinamarca')
    {
    console.log(`El país ${country} está en Europa`);    
    }
    if (country === 'Japón' || country === 'China' || country === 'India')
    {
    console.log (`El país ${country} está en Asia`);    
    }
    if (country === 'Colombia' || country === 'Brasil' || country === 'Ecuador')
    {
    console.log(`El país ${country} está en América del Sur`);    
    }
    if (country === 'Estados Unidos' || country === 'Canadá' || country === 'Mexico')
    {
    console.log(`El país ${country} está en América del Norte`);    
    }

    if (country === 'Nueva Zelanda' || country === 'Australia' || country === 'Samoa')
    {
    console.log(`El país ${country} está en Oceanía`);    
    }
}



function isEven (number:number):void{
    if (number %2 ===0)
    {
        console.log(`El número es par`); 
    }
    else 
    {
        console.log(`El numero es impar`);
    }
}


module.exports = {
    isEven
}

