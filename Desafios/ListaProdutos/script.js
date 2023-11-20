// Crie uma lista de produtos

//  A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.

//  Mostre no console quantos produtos tem nessa lista.

//  Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

//  Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.

//  Remova o segundo item da sua lista.

//  ==========================================================



// Criando lista
const produtos = ["Computador", "Telefone", "Mouse", "Teclado"]

// Exibindo lista
console.log("Listando todos Produtos: " + produtos)

// Quantidade de produtos na lista
console.log("Quantidade Produtos: "+ produtos.length)

// Retirando produto mouse e retornando os que sobraram
console.log("Tirando produto Mouse: "+ produtos.filter(p => p !== "Mouse"));

const findProdutos = produtos.find( p => p === "Computador")

if (findProdutos) {
  console.log(`Foi encontrado ${findProdutos} na sua lista!`)
} else {
  console.log("Parece que esse produto não existe");
}

produtos.splice(1, 1)
console.log('Meus Produtos: ' + produtos)
