let {Person} = require ("./person.js")
let {Contacts} = require (".contacts.js")

let patricia = new Person ('Patricia','Gonzalez Fuertes', 165, 55, 1979, ['leer','cocinar','viajar'])
let jacobo = new Person ('Jacobo','Arguelles Baquero',175,69,1981,['correr','jugar al fútbol','comer']);
let contacts = new Contacts();
contacts.printPersons(patricia);
contacts.printPersons(jacobo);

