const { rejects } = require('assert');
const { resolve } = require('path');
const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual é seu nome \n', nome => {
//     terminal.question('Qual é seu telefone\n', telefone =>{
//         console.log(
//             `
//                 Nome: ${nome}
//                 Telefone: ${telefone}
            
//             `
//         )
//         terminal.close();
//     })
// })

function questionAsync(text){
    return new Promise((resolve, reject)=>{
        terminal.question(`${text}\n`, resolve)
    })
}

let nome = ""
let telefone = ""
Promise.resolve()
    .then(()=> questionAsync('Qual é seu nome? '))
    .then( respostaNome =>{nome= respostaNome
        if(!respostaNome){
            throw new Error('Campo Nome vazio!!!');
        }
    })
    .then(()=> questionAsync('Qual seu telefone? '))
    .then(respostaTelefone =>{telefone= respostaTelefone
        if(!respostaTelefone){
            throw new Error('Campo Telefone vazio!!!');
        }
    })
    .then(()=>{
        console.log(`
            Nome: ${nome}
            Telefone: ${telefone}
        `)
    })
    .catch(error=>{
        console.error('Deu ruim!!!', error.stack)
    })
    .finally(() => {
        terminal.close()
    })