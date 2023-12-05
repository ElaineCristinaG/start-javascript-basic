console.log('Working with variable')


const nome1 = 'John';
console.log(nome1);

let nome3 = 'Daniel';
console.log(nome3)

/**Neste exemplo a variavel assume um escopo global, porém não é boa prática */
nome2 = "Mary";  
console.log(nome2);

/**Atribuição de Variaveis */
let idade = 25;
const  nome  = 'Elaine';
const sobrenome = 'Galindo'
const numero = 4;
let idadeSoma = idade + 2;

/**Concatenação de Variáveis */
console.log(nome + sobrenome); //junta tudo sem espaço
console.log(nome, sobrenome);  //junta com um espaço entre as variáveis

/**Interpolação de variavés*/
console.log(`Meu nome é ${nome}`)
console.log(`Meu nome é ${nome} ${sobrenome}`)



