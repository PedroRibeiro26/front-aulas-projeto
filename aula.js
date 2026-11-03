// entrada -> pela web através de formulário ou eventos de DOM
// saida -> console do navegador ou pra página através de tag

// entrada de dados -> acontece pelo terminal
// saida dos dados -> acontece pelo terminal

/***************************************************************
 * VARIAVEIS
    é uma caixa que armazena um tipo de valor na memoria do computador
    no javascript podemos criar uma variavel de 3 formas
*/

let idade = 10; // sintaxe mais moderna
var idade2 = 11; // sintaxe mais antiga
const_idade3 = 12; // isto é variavel que não pode ter seu valor alterado

console.log(idade); // demonstra saida de dados no terminal

/****************************************************************
 * TIPOS DE DADOS
 * cada caixa tem um tipo de dado
 */

// string - sequencias de caracteres
let nome = "João";


// number - numeros decimais ou inteiros
let idade4 = 40; // numero inteiro
let Altura = 1.75; // numero fracionado(com virgula)


// boolean - verdadeiro ou falso
let aprovado = true;
let dinheiro = false;


// undefined - a variavel não foi atribuida
let cidade;


// null - ausência intencional de valor
let telefone = null;




// retorno dos dados
console.log(nome);
console.log(idade);
console.log(idade2);
console.log(const_idade3);
console.log(Altura);
console.log(aprovado);
console.log(dinheiro);
console.log(idade4);
console.log(cidade);
console.log(telefone);



// retorno dos tipos de variaveis

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof idade2);
console.log(typeof cont_idade3);
console.log(typeof Altura);
console.log(typeof aprovado);
console.log(typeof dinheiro);
console.log(typeof idade4);
console.log(typeof cidade);
console.log(typeof telefone);




/************************************************
 * operadores aritméticos
 * são usados para realizar cálculos matemáticos
 */

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2); // soma
console.log(numero1 - numero2); // subtração
console.log(numero1 * numero2); // multiplicação
console.log(numero1 / numero2); // divisão
console.log(numero1 % numero2); // resto da divisão
console.log(numero1 ** 2);      // exponenciação




/****************************************************
 * operadores condicionais
 * são usados quando queremos que o código tome uma decisão
 */

let idade5 = 18;

console.log(idade5 == 18); // variavel idade5 igual a 18?
console.log(idade5 === 18); // variavel idade5 igual a 18 no valor e tipo?
console.log(idade5 > 18); // variavel idade5 maior que 18?
console.log(idade5 < 18); // variavel idade5 menor que 18?
console.log(idade5 >= 18); // variavel idade5 maior ou igual que 18?
console.log(idade5 <= 18); // variavel idade5 menor ou igual que 18?



/****************************************************************************
 * operadores lógicos
 * são usados quando queremos juntar operadores condicionais
 */

let idade6 = 20;
let possuiCarteira = true;
let Gasolina = true;
// && - AND
// || - OR
// !  - NOT
console.log(idade6 > 18 && possuiCarteira);
console.log(idade6 > 18 || possuiCarteira);
console.log(!Gasolina);




/**********************************************************
 * conversão de tipos - cast
 * converte texto para numero
 */
let numero3 = "18"; // string
let numero4 = "20"; // string

console.log(typeof numero3)
console.log(typeof numero4)

numero3 = Number(numero3);

console.log(typeof numero3)
console.log(numero3)



