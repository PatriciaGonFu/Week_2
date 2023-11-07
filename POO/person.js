class Person
{
    constructor(nombre,apellidos,altura,peso,yearOfBirth,hobbies)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }
    calculoImc()
    {
        return this.peso / (this.altura**2);
    }

    calculoEdad()
    {
        const currentDate    = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.yearOfBirth;

    }

    printAll()
    {
        console.log(`${this.nombre} - ${nombre}
            ${this.apellidos} - ${apellidos}
            ${this.altura} - ${this.altura}
            ${this.peso} - ${peso}
            ${this.yearOfBirth} - ${this.yearOfBirth}
            `);
    }

    printHobbies ()
    {
        for (let i = 0; i<=this.hobbies.length; i++)
        console.log(this.hobbies[i]);           
                
    }
}
module.exports = {
    Person
}

