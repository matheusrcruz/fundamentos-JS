const fs = require('fs')
// fs.readFile('./arq1.txt',(error, resp)=>{
//     if(error){
//         console.error('deu ruim', error.stack)
//         return;
//     }
//     console.log('resposta', resp.toString());

// })

fs.readFile('./arq1.txt', (errorArquivo1, respArquivo1)=>{
    if(errorArquivo1){
        console.error('Deu ruim no arquivo', errorArquivo1.stack);
        return;
    }
    fs.readFile('./arq2.txt', (errorArquivo2, respArquivo2)=>{
        if(errorArquivo1){
            console.error('Deu ruim no arquivo', errorArquivo2.stack)
         return;
        }
        fs.readFile('./arq3.txt', (errorArquivo3, respArquivo3)=>{
            if(errorArquivo3){
                console.error('Deu rum no arquivo', errorArquivo3.stack)
                return;
            }
            const conteudo = `${respArquivo1}\n${respArquivo2}\n${respArquivo3}`
            fs.writeFile('./resultado.txt', conteudo, (errorWrite, respWrite)=>{
                if(errorWrite){
                    console.error('Deu ruim na escrita', errorWrite.stack)
                    return;
                }
                console.log('Deu tudo certo arquivo gerado')
            })
        })
    })
 

   

})