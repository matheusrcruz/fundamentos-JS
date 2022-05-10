const minhaLista = [];

const minhaListaDeTarefas = ['ivern', 'rengar', 'singed','soraka'];

// TODOS console.log(minhaListaDeTarefas);
//indice zero aonde começa console.log(minhaListaDeTarefas[0]);
// Indefinido porque não existe console.log(minhaListaDeTarefas[7]);

/*======Quantidade de itens no array*=======*/
// console.log(minhaListaDeTarefas.length);

/*============Adicionar item=============*/
// minhaListaDeTarefas.push('Pyke')
// console.log(minhaListaDeTarefas);

/* =========== Remove e guarda pra tomar uma decisão, POP ==== */
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo, minhaListaDeTarefas);


/*==========Remove o primeiro item=====*/
// const ultimoItem = minhaListaDeTarefas.shift();

// console.log(ultimoItem, minhaListaDeTarefas);

/* =======remove um item a partir de um indice=======*/
// console.log(minhaListaDeTarefas[2])

//Qul item de inicio quantos remover
// minhaListaDeTarefas.splice(2, 1);
// console.log(minhaListaDeTarefas);

const itens = [
    1, 'caneta', 0.2
] 
/*====VERIFICAR SE É DO TIPO ARRAY */
// console.log(typeof(itens));

/*====VERIFICAR SE È DO TIPO ARRAY CERTO*/
// console.log(Array.isArray(itens));

/*====ORDENA OS NUMEROS====  conseguimos ordena uma lista de objetos, pelo nome*/
// const numeros = ['z', 'x', 'y', 'a'];
// console.log(numeros.sort());

/*===JUNTAR 2 ARRAYS ===*/

//Item existente, itens que vc quer colocando na nova variavel
// const nova =itens.concat([1, 2, 3]);

// console.log(nova)

/*=== JUNTAR array em uma string*/
// const umaString = itens.join(',')
// console.log(umaString)

/* === VERIFICAR O INDICE DE UM ITEM EM UM ARRAY */
const Indice = itens.indexOf('caneta');
//NOTAS SE retorna -1, esse valor não existe e não compare com true ou false, vai ser false .
console.log(itens[Indice])