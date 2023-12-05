console.log(`\nTrabalhando com loop for`)

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
const idadeComprador = 15
const destino = "Ouro Preto"

// valores default:
let estaAcompanhada = false 
let tempassagemComprada = false
let podeComprar = false
let destinoExiste = false
let tamanhoLista = listaDeDestinos.length

/* Mensagens utilizadas */
const mensagemCompradorAprovado = "Comprador aprovado"
const mensagemSucesso = `Boa Viagem ${nomeComprador} !`
const mensagemInsucesso = `Comprador ${nomeComprador} menor de idade: ${idadeComprador} Não posso vender`
const mensagemAcompanhado = `Comprador está acompanhado`

/* Verifica a maioridade do usuário e se há acompanhante no caso de menor de idade*/
if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log(mensagemCompradorAprovado)
    podeComprar = true
}else{
    console.log(`Desculpe ${nomeComprador} sua compra não foi aprovada`)
    }

/* Verifica se o destino existe na lista */
for(let cont = 0; cont < tamanhoLista; cont ++ ){
    if(listaDeDestinos[cont] == destino){
        console.log(`O seu destino está Disponivel: ${destino}`)
        destinoExiste = true
        break
    }
}

/* Verifica se a compra da passagem será aprovada */
if(podeComprar && destinoExiste){
    console.log(mensagemSucesso)
}else{
    console.log(`${nomeComprador} entre em contato com a agência para maiores informações`)
    }



