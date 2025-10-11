var idade = 25;
console.log(idade)

let nome = "Felipi"
console.log(nome)

const pais = "Brasil"
console.log(pais)

function mostrarNome() {
   let sobrenome = "Amorim"
}
console.log(sobrenome)

var cidade = "Brusque"
function mostrarCidade() {
   console.log(cidade)
}

if (true) {
   let bairro = "Dj"
}
console.log(bairro)

function exemploHoisting() {
   let iniciar = "exemplo"
   console.log(iniciar)
}
exemploHoisting();

function testeHoisting() {
   let escola = "Escola"
}
testeHoisting();

function testeHoisting() {
   console.log(curso)
   var curso = "Refatorando"
}
testeHoisting();

