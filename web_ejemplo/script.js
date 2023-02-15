/*let firstName = 'Enrique';
firstName.toUpperCase()
console.log(firstName);*/

const list = []
//list.push(157)
const anotherList = list.concat(157)
//console.log(anotherList)

const persona = {
    name: 'Miguel',
    twitter: '@midudev',
    age: 18,
    isDeveloper: true,
    links: ['https://midu.tube', 'https://midu.live']
}
//Function Expresion  a una constante se le asigna una funcion
const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b
}

function restar (a, b){
    return a - b
}

const op1 = 8
const op2 = 2

console.log(sumar(op1,op2))

//console.log(persona.name);
//console.log(persona.links[0]);
//console.log(persona.twitter)
//const field = 'twitter' #variable twitter de persona
//console.log(persona[field]); #concatena la variable

