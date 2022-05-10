//Para pegar de arquivo ponto barra ./
const Matematica = require('./matematica.js');
// console.log(Matematica.somar(2,8));

const readline = require('readline')

const terminal = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('insira o primeiro valor\n', valor1 =>{
    terminal.question('insira o segundo valor\n', valor2 =>{
        terminal.question('insira a operação\n', tipoOperacao =>{
            //Colchetes obtemos a operação parenteses invocamos a operação 
            const resultado = Matematica[tipoOperacao](
                Number(valor1), Number(valor2)
            )
            console.log(`
                A operação ${tipoOperacao} de ${valor1} e ${valor2} é${resultado}
            `)
            terminal.console()
        })   
    })   
})