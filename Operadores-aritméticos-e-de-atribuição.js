// -----------------------------------------
// 🧠 AULA: Operadores Aritméticos e de Atribuição
// -----------------------------------------

// Criando duas variáveis com valores iniciais
let f = 17;
let e = 16;

// -----------------------------------------
// ➕ OPERADORES ARITMÉTICOS BÁSICOS
// -----------------------------------------

// Soma
let soma = f + e; 
console.log("Soma:", soma); // 17 + 16 = 33

// Subtração
let subtracao = f - e;
console.log("Subtração:", subtracao); // 17 - 16 = 1

// Multiplicação
let multiplicacao = f * e;
console.log("Multiplicação:", multiplicacao); // 17 * 16 = 272

// Divisão
let divisao = f / e;
console.log("Divisão:", divisao); // 17 / 16 = 1.0625

// Resto da divisão
let resto = f % e;
console.log("Resto da divisão:", resto); // 17 % 16 = 1

// Potência (f elevado a e)
let potencia = f ** 2;
console.log("Potência:", potencia); // 17² = 289


// -----------------------------------------
// 🔁 OPERADORES DE ATRIBUIÇÃO
// -----------------------------------------

let x = 10;

// Atribui +5 → equivale a x = x + 5
x += 5;
console.log("x após x += 5 →", x); // 15

// Atribui -3 → equivale a x = x - 3
x -= 3;
console.log("x após x -= 3 →", x); // 12

// Atribui *2 → equivale a x = x * 2
x *= 2;
console.log("x após x *= 2 →", x); // 24

// Atribui /4 → equivale a x = x / 4
x /= 4;
console.log("x após x /= 4 →", x); // 6

// -----------------------------------------
// ⚙️ INCREMENTO E DECREMENTO
// -----------------------------------------

let numero = 5;

// Incrementa 1
numero++;
console.log("Incremento (++):", numero); // 6

// Decrementa 1
numero--;
console.log("Decremento (--):", numero); // 5 novamente


// -----------------------------------------
// 🧩 EXEMPLO FINAL: USANDO TUDO JUNTO
// -----------------------------------------

let a = 8;
let b = 4;

// Primeiro, multiplicamos b por 2 e somamos com a
let resultado1 = a + (b * 2); // 8 + 8 = 16

// Agora, atualizamos o valor de a e b com operadores de atribuição
a += 5;  // a = 13
b *= 3;  // b = 12

let resultado2 = a + b; // 13 + 12 = 25

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
