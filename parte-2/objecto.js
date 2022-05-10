const singas ={
    nome: 'SINGED',
    idade: '90',
    habilidade: 'corredor',
    genero: 'masc',
    'poder': 'gás'

}

// console.log('poder é: ', singas.poder);
// console.log('o queres del singas: ', singas['habilidade']);
// console.log('Genero', singas.genero)
// console.log('not exist', singas.valor)

//Estamos alterando uma [instacia existente] === referencia, e não assinando um novo valor(memoria) na const
// singas.id = 007
// console.log(singas)

/* === saber as keys ===*/
// console.log(Object.keys(singas));

/* ===SABER OS valores ===*/
//console.log(Object.values(singas));

/*==== JUNTAR 2 OBJECTOS ====*/ 

const fracos = {
    fraqueza: 'slow'
}
/*==== JUNTAR 2 fucks OBJETOS ==== */
//NOTA POR boa pratica tentaremos sempre evitar mudar um objeto existente e sim criaremos um novo com base no existente 
const juntarOBJ = Object.assign(singas, fracos);
/*
    DELETAR DENTRO DO OBJETO
*/
delete juntarOBJ.nome;
console.log(juntarOBJ);
