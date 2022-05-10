const { rejects } = require('assert');
const { resolve } = require('path');
const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function questionAsync(text){
    return new Promise((resolve, reject)=>{
        terminal.question(`${text}\n`, msg =>{
            !!msg ? resolve(msg): reject(new Error('O Campo não pode ser vazio'))
        })
    })
}
async function main(){
    try {
        const nome = await questionAsync('Qual é seu nome? ');
        const telefone = await questionAsync('Qual é seu telefone?');
        console.log(`Seu nome é ${nome}\ne seu telefone ${telefone}`);
    } catch (error) {
        console.log('Deu ruim', error.stack)
        
    }finally{
        terminal.close()
    }
}
main()
