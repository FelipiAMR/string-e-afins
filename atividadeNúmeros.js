//Atividade 1
let soma = 25 + 25;
let subtracao = 180 - 130;
let multiplicacao = 100 * 0.5;
let divisao = 250 / 5;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

//Atividade 2
let preco = 89.567;
console.log(preco.toFixed(1));
console.log(preco.toFixed(2));

//Atividade 3
let numero = 7.9;
console.log(Math.round(numero)); //Arrendoda para para o mais próximo, no caso 8
console.log(Math.floor(numero)); //Força o número a arredondar para baixo, no caso 7
console.log(Math.ceil(numero)); //Força o número a arredondar para cima, no caso 8

//Atividade 4
let base = 5;
let expoente = 3;
console.log(Math.pow(base, expoente)); // À princípio o valor dará 125

//Atividade 5
let precoOriginal = 149.90;
let desconto = 15;
let precoDescontado = precoOriginal - (precoOriginal * desconto / 100);
console.log(`Preço Original: R$${precoDescontado}`)
console.log(`Desconto: ${desconto}%`);
console.log(`Preço com Desconto: ${precoDescontado.toFixed(2)}`);

// Outras atividades
