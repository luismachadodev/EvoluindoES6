

// Desafio 1

function verificaNumero(num) {
  if (num < 0) {
    return "Negativo!"
  } else if (num > 0 ) {
    return "Positivo!"
  } else {
    return "Igual a zero!"
  }
}

console.log(verificaNumero(-3))
console.log(verificaNumero(20))
console.log(verificaNumero(0))

// ============================

// Desafio 2

function verificaElemento(array, num) {
  return array.includes(num)
}

const numeros = [1, 2, 5, 8, 10]

console.log(verificaElemento(numeros, 2)); 
console.log(verificaElemento(numeros, 6)); 

// ============================

// Desafio 3

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
]

const busca = products.find((product) => product.price === 20)

console.log(busca)

// ============================

// Desafio 4

const product = products.filter((product) => product.price < 8) 

console.log(product)