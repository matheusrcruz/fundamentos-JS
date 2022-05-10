// Equanto não mudar, não apra!!
let termoDeParada = true;
let contador = 0;
while(termoDeParada ){
    termoDeParada = contador < 10;
    if(contador % 2 === 0 ){
        console.log(`Numero par`, contador)
    }
    contador +=1;
    //Contador = Contador + 1;
}

do{
    console.log('Roda uma vez', termoDeParada)
}while(termoDeParada);

while(termoDeParada){
    console.log(`nem vai rodar esse log`, termoDeParada)
}