
// Crie uma lista de apenas numeros 1,3,5,7,0,9​

//  Ordene essa lista do menor para o maior.
//  Retire o primeiro numero desta lista.
//  Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

const numeros = [1, 3, 5, 7, 0, 9]

console.log("Numeros em ordem: " + numeros.sort())

console.log('Item removido: '+ numeros.shift());

console.log('Nova ordem: ' + numeros.reverse())

numeros.push(66)
console.log(numeros)