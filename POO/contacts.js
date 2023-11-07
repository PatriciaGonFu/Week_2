let {Person} = require ("./person.js")

class Contacts
{
    constructor (Person){
        this.persons = [];
    }
    printPersons(person)
    {
           this.persons.push(person);
           console.log(this.persons);
    }   
}

module.exports = {
    Contacts
}


