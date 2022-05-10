const podeDirigir = "";

if(podeDirigir){
    console.log("ela pode dirigir")
}

const saldoEmConta = 0;
if(!saldoEmConta){
    console.log("Não tem saldo!!!!");
}

const bolComString = "Ae Hackerzão!!"
//Força valor pra true ou false
//De acordo com a tabela 
console.log('bolComString', !!bolComString)


//Negação 
console.log('Negação', !bolComString)

//Negação força bol
console.log(
    'foça bol',
    !(!!bolComString)
)