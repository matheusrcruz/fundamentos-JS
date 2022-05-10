//Meses começam do Zero!
const dataAniversario = new Date(2022, 0, 20);
// console.log(dataAniversario);

//PRIMEIRA data do JS
const primeiraDataJs = new Date(0);
// console.log(primeiraDataJs);

const hoje = new Date();
//console.log(hoje.toString());
//console.log(hoje.toLocaleDateString());

//RECOMENDADO GLOBALLL
// console.log(hoje.toISOString());

const dia = hoje.getDate()
hoje.setDate(dia + 5 ) //+5 dias depois
hoje.setHours(10, 50, 3)
console.log(hoje);

console.log(
    `
    Dia:${hoje.getDate()} 
    Mes:${hoje.getMonth()}
    Ano:${hoje.getFullYear()}
    Horas:${hoje.getHours()}
    Minutos:${hoje.getMinutes()}
    Segundos:${hoje.getSeconds()}
    `
)

console.log(
    hoje.getDate(1,2,3) > hoje.getDate(2, 2, 2)
)