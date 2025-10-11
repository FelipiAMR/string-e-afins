let idade = 26;

let texto = "Idade: " + idade; // Resultado: "Idade: 26"
console.log(texto);

let calculoErrado = "Idade: "  + idade + 5; //Resultado: "Idade: 265"
console.log(calculoErrado);

// Outras formas de Concatenação, a mais atualizada;

let nome = "Felipi";
let Idade = 17;
let apresentacao = `Meu nome é ${nome} e tenho ${Idade} anos.`; //Uso da Concatenação atualizada em Template Literals, com ($)
console.log(apresentacao);

let chamada = "Arthur";
let casa = 165;
let acao = "caíu"
let pais = "Alessandro e Andréia"
let total = `${chamada} estava brincanco perto de sua casa, que tinha o número ${casa}, e derrepente ele escorregou e ${acao}, logo chamaram seus pais, ${pais} e tudo foi resolvido.`;
console.log(total); // teste para ver se entendi

// toUpperCase

let teste = "Felipi" // Resultado da String será 'Felipi'
let nomeMaiusculo = teste.toUpperCase(); // Depois de passar pelo 'teste.toUpperCase' ela fica maiúscula: 'FELIPI'
console.log(nomeMaiusculo); // Resultado final, impresso: 'FELIPI'

let test2 = "OLÁ, MUNDO!" // Resultado da String será 'OLÁ, MUNDO!'
let mostrarTest2 = test2.toLowerCase(); // Depois de passar pelo 'teste.toLowerCase' ela fica minúscula: 'olá, mundo!'
console.log(mostrarTest2); // Resultado final, impresso: 'olá, mundo!'

let nome2 = "Jesus"
let verdade = "Caminho, a Verdade e a Vida!"
let prop = "ÚNICO QUE SALVA"
let propMinusculo = prop.toLowerCase();
let palavras = `${nome2} é o ${propMinusculo}, pois Ele é o ${verdade} Ninguém vai ao Pai se não por intermédio dEle!`
console.log(palavras);

// Atividades dada pelo Chat
let nome3 = "Felipi";
let idade2 = 17;
let sonho = "usado por Deus!"
let tudo = `Meu nome é ${nome3}, tenho ${idade2} anos e meu maior sonho é ser um monistro de louvor ${sonho}`
let tudoMaiúsculo = tudo.toUpperCase();
let tudoMinúsculo = tudoMaiúsculo.toLowerCase();

console.log(tudo); // Normal
console.log(tudoMaiúsculo); // Maiúsculo
console.log(tudoMinúsculo); //Minúsculo

// Atividade nível intermediário do Chat

let nomePessoa = "Felipi";
let idadePessoa = 17;
let versiculoFavorito = "Êxodo 33:15- Se o Senhor não for conosco, não nos deixe sair daqui!"
let templit = `Olá, meu nome é ${nomePessoa}, tenho ${idadePessoa} anos e meu versículo favorito está em "${versiculoFavorito}"`
let templitMUL = templit.toUpperCase();

console.log(templit);
console.log(templitMUL);
console.log(templit.length);