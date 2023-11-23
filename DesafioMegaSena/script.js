function recebeNumero(numero) {
  if(numero < 6 || numero > 9) {
    console.log("Apenas números de 6 até 9")
    return []
  }

  const numeros = []

  while(numeros.length < numero) {
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1
    
    if(!numeros.includes(numeroAleatorio)){
      numeros.push(numeroAleatorio)
    }
  }

  return numeros
}

const numeroSort = recebeNumero(9)
console.log(numeroSort)

