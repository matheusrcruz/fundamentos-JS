class Heroi{
    constructor(){
    }

    correr(){
        console.log(`Corre`)
    }
    defendeu(){
        console.log(`defendeu`)
    }
    gas(){
        console.log(`ooooh o gás`)
    }
}

const heroi = new Heroi();

heroi.correr();
heroi.defendeu();
heroi.gas();

//USANDO CONSTRUCTOR 

class Heroi2{
    //Metodo construtor vai ser envocado com NEW 
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    atacar(){
        console.log(`${this.nome} Folha`)
    }
    defendeu(){
        console.log(`${this.idade} PÉEEEEEEE`)
    }
}

const heroi2 = new Heroi2(
    'SINGED',90
)
heroi2.atacar();
//Valores que não se alteram valores pertecente a classe globais :) .
class Heroi3 {
    static obterAno(idade){
        return 2020 - idade
    }
}

const anoNascimento = Heroi3.obterAno(20);  

console.log(
    `O ano de nascimento, ${anoNascimento}`
)