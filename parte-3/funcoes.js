function nomeFuncao(parametro1){
    //bloco de codigo

}
//VOID function, são as que vai direto 
function queDiaEhj(){
    const data = new Date()

    console.log(`Que dia é hj ${data.getDate()}`)
}


function soma(valor1, valor2){
    console.log(`A soma de ${valor1} + ${valor2} é: `, valor1 + valor2);
}
queDiaEhj()
soma(1, 2)
soma(3, 7);
// AS functions tbm podem retorna valores 
function adicionar(valor1, valor2){
    return valor1 + valor2;
}
const idade = 20;
const tamanho = 10;
const resultado = adicionar(idade, tamanho);

console.log(`O resultado é : `,resultado);

function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2
    return resultado;
}

console.log(`Resultado da multiplicação é : `, multiplicar(10, 10))

///////////

const funcionario1 = {
    nome: 'José Maria',
    desconto: 0.3,
    salarioBruto: 7500,
    salarioLiquido: 0
}
const funcionario2 = {
    nome: 'Maria José',
    desconto: 0.2,
    salarioBruto: 8000,
    salarioLiquido: 0
}
//Maneira não tão inteligente 
// const descontoFuncionario1 = 
//     funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto);

// const descontoFuncionario2 = 
//     funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto);

// console.log(
//     `
//     Funcionario 1: ${descontoFuncionario1} 
//     Funcionario 2: ${descontoFuncionario2}

//     `);

//Maneira de criar com uma funcão

function calculadorDesconto(salarioBruto, desconto){
    return salarioBruto - (salarioBruto * desconto)
}
funcionario1.salarioLiquido = calculadorDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calculadorDesconto(
    funcionario1.salarioBruto,
    funcionario2.desconto
)

console.log(`
    Funcionario 1: ${funcionario1.salarioLiquido}
    Funcionario 2: ${funcionario2.salarioLiquido}
`)