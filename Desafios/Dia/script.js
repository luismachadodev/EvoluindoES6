
// Crie uma string que contenha o dia de hoje, exemplo: 

// let hoje = '20/07/2019';

//  Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

let hoje = "20/11/2023"

const [dia, mes, ano] = hoje.split("/")

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);