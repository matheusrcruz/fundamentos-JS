const readLine = require('readline');
const terminal = readLine.Interface({
    //definir entrada no modo cli 
    input: process.stdin,
    //todo texto que saira do cli
    out: process.stdout 
});

// texto menu 

const textoMenu = `
Olá, seja bem vindo ao sistema de midia
Digite 1 para acessar o menu inicial,
Digite 2 para acessar menu de herois,
Digite 3 para acessar menu de guerreiros,
Digite 0 para sair
`

// const opcao = 1;

// switch (opcao) {
//     case 1:
//         console.log('pressionou 1')
//         break;

//     case 2:
//         console.log('pressionou 2')
//     default:
//         console.log('opção inválida ')
//         break;
// }

// terminal.question(`Qual é seu nome`,(msg) => {
//     console.log('voce escreveu', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    }
}

function menuInicial(msg){
    console.log('Chamou lá o menu inicial ', msg);
}
terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)