const nome = 'Maia Jr.';
const sobrenome = 'Silva';
const idade = 25;
const nasc = '01/02/1600';

console.log('Nome: '+ nome);
console.log('Sobrenome ' + sobrenome);
console.log('idade: '+ idade);
console.log('nasc: '+ nasc);
console.log("********Concatenar variaveis************")
console.log('Nome: '+ nome + ' ' + sobrenome)

console.log("********conversão explicita************")
const x = "21";
const y = "45";
//obter o numero da soma mesmo que seja do tipo texto
//conversão explicita:
result1 = parseInt(x) + parseInt(y);
console.log('result1',result1);

//obetr a concatenação dos numeros pois são texto
console.log("********concatenação dos numeros em texto************")
console.log(x+y);

console.log("*********Not a number: NaN***********")
// operação de divisão com tipo text e numerico
const texto = 'abfde';
const num = 2;
result2 = texto / num;
console.log(result2);

console.log("********Conversão Implicita************")
console.log(x / y); 

console.log("********Comportamento de ponto e virgula************")

console.log(6.5);
console.log(6,5);

console.log('******************Concatenação********************')
const primeiroNome = "Mariana"
const segundoNome = "José"
const ultimoNome = "Galindo"
console.log(primeiroNome + segundoNome + ultimoNome)
console.log('******************Interpolação********************')
console.log(`Minha irmã mais nova se chama: ${primeiroNome} ${segundoNome} ${ultimoNome}`)
