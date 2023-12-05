console.log(`Trabalhando com condicionais`)

/**em javascript listas são Arrays */
const listaDeDestinos = new Array(
    `Salvador`,
    `Rio De Janeiro`,
    `São Paulo`,
    `Santa Catarina`,
    `Maceió`,
    `Ouro Preto`
)

console.log("Destinos possíveis:")
console.log(listaDeDestinos)

const nomeComprador = "João de Lima"
const idadeComprador = 17
let estaAcompanhada = false

const mensagemSucesso = `Comprador ${nomeComprador} maior de idade: ${idadeComprador}`
const mensagemInsucesso = `Comprador ${nomeComprador} menor de idade: ${idadeComprador} Não posso vender`
const mensagemAcompanhado = `Comprador está acompanhado`

if(idadeComprador >= 18){
    listaDeDestinos.splice(2,1) 
    console.log(mensagemSucesso)
}else{
    if(estaAcompanhada){
        console.log(mensagemAcompanhado)
        listaDeDestinos.splice(2,1) 
    }else{
        console.log(mensagemInsucesso)
    }
    
}
 console.log(listaDeDestinos)


