

// Operador Spread

// let primeiros = [1, 2, 3]

// let numeros = [...primeiros, 4, 5, 10]

// console.log(numeros)

// let pessoa = {
//   nome: "Luis",
//   idade: 45,
//   cargo: "RH"
// }

// let novaPessoa = {
//   ...pessoa,
//   status: "ATIVO",
//   cidade: "Campo Grande / MS",
//   telefone: "6799999999"
// }
// console.log(novaPessoa)

function novoUsuario(info){
  let data = {
    ...info,
    status: "ATIVO",
    inicio: "20/03/2023",
    codigo: "123123"
  }
  console.log(data)
}

novoUsuario({nome: "Jose", sobrenome: "Silva", cargo: "DEV"})