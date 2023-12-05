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
const idadeComprador = 20
let estaAcompanhada = false
const tempassagemComprada = false

const mensagemSucesso = `Boa Viagem ${nomeComprador} !`
const mensagemInsucesso = `Comprador ${nomeComprador} menor de idade: ${idadeComprador} Não posso vender`
const mensagemAcompanhado = `Comprador está acompanhado`

if(idadeComprador >= 18 || estaAcompanhada == true){
    listaDeDestinos.splice(2,1) 
    console.log(mensagemSucesso)
}else{
        console.log(mensagemInsucesso)
    }
  

 console.log("Embarque: \n\n")

    if(idadeComprador >= 18 && tempassagemComprada){
        console.log("Ok, boa viagem !")
    }else{
        console.log("Você não poderá embarcar")
    }



