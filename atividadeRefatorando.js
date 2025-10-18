// Atividade de String

let nome = "Felipi";
let sobrenome = "Amorim"
let nomeSobre = `Meu nome e sobre nome é ${nome} ${sobrenome}`;
console.log(nome.toUpperCase());
console.log(nomeSobre);

// Atividade de Números
let numero = 20 + 2 + 100 / 3;
console.log(numero);

// Atividade de Booleanos
let tempo = "Sol"
let tempofeio = "Nublado"

if (tempo) {
    console.log("Dá para ir caminhar na praia")
} else {
    console.log("Vou ficar em acasa assistindo filme")
}

let quebrei = "engessar";
let nãoq = "cuidar";

if (nãoq) {
    console.log("Ir para casa e descansar")
} else {
    console.log("atestado")
}

// Atividade de Arrays

let frutas = ['Banana', 'Melão', 'Maçã'];
frutas.push('Uva Italiana');
console.log(frutas);

// Atividades de Objetos

let cadastro = {
    nome: 'Felipi',
    idade: 17,
    curso: 'Sistemas de Informação',
};

console.log(cadastro.nome);
console.log(cadastro.idade);
console.log(cadastro.curso);

let nomeM = "Emily de Souza Ávila";
console.log(nomeM.toUpperCase());
console.log(nomeM.length);
console.log(nomeM.split(" ")[0]);


let notaPrimeiroTri = 9.5;
let notaSegundoTri = 4;
let notaTerceiroTri = 5;
let media = (notaPrimeiroTri + notaSegundoTri + notaTerceiroTri) / 3;
console.log(media.toFixed(0));

if (media >= 7) {
    console.log("Aprovado! Parabéns, Felipi.");
} else {
    console.log("Reprovado! Você consegue ser melhor, acreditamos em você Felipi.");
}

// Booleanos

// Arrays
let listaCompras = [];
listaCompras.push('Uva Italiana', 'Tapioca', 'Arroz');
listaCompras.pop();
listaCompras.length
console.log(listaCompras[1]);

// Objetos

let filme = {
    titulo: 'Remanescentes. esquecidos por Deus',
    ano: 2025,
    genero: 'Cristão',
    avaliação: '5 estrelas',
}
filme.assistido = false

if (filme.avaliação === '5 estrelas') {
    filme.assistido = true;
    console.log("Vale a pena assistir!");
} else {
    console.log("Não vale a pena");
}
