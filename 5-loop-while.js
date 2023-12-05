console.log(`\nTrabalhando com loop while`)

/**em javascript listas são Arrays */
const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`,
    `Santa Catarina`,
    `Maceió`,
    `Ouro Preto`
)

console.log("\nDestinos possíveis:")
console.log(listaDeDestinos)

/* Informações do usuário */
const nomeComprador = "João de Lima"
const idadeComprador = 20
const destino = "Ouro Preto"

/* valores default */
let estaAcompanhada = false 
let tempassagemComprada = false
let contador = 0
let destinoExiste = false

/* Mensagens utilizadas */
const mensagemSucesso = `Boa Viagem ${nomeComprador} !`
const mensagemInsucesso = `Comprador ${nomeComprador} menor de idade: ${idadeComprador} Não posso vender`
const mensagemAcompanhado = `Comprador está acompanhado`
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

/* Condicional para verificar o destino */
while(contador < listaDeDestinos.length){

    if(listaDeDestinos[contador] == destino){
        
        console.log(`O seu destino está Disponivel: ${destino}`)
        destinoExiste = true
        break
    }
    contador += 1
    
}

/* Condicional para destino não encontrado */
if(destinoExiste == false){
    console.log("Destino escolhido não disponível")
}

  

 



