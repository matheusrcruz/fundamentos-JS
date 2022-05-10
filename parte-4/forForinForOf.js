const textoPar = 'Par';
const textoImpar = 'Impar';

// for(let index = 0; index <= 10; index ++){
        
//         const decisao = index % 2 ===0 ? textoPar: textoImpar;
//         console.log(`Soy el numiero ${index} e soy  ${decisao}`);
//     }

const heroiSelecionado = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Ivern',
        superPoder: 'Pai do verde'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Singed',
        superPoder: 'Olha Gásssss'
    },
    
]
for(let index = 0; index < heroiSelecionado.length; index ++){
    const item = heroiSelecionado[index];
    console.log(
        `
        id: ${item.id}
        Nome: ${item.nome}
        Super Pode: ${item.superPoder}
        `
    )
}