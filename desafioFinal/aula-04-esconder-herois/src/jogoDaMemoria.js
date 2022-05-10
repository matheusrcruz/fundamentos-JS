class JogoDaMemoria 
{   
    //depêndencias o que essa classe precisa para existir
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pega somente 
    //Tela
    constructor({tela}){
        this.Tela = tela
        //
        this.heroisIniciais = [
                {img: './assets/batman.png', name: 'batman'},
                {img: './assets/thor.png', name: 'thor'},
                {img: './assets/miranha.png', name: 'homemAranha'},
                {img: './assets/hellboy.png', name: 'hellboy'},
                {img: './assets/flash.png', name: 'flash'},
                {img: './assets/capitaoAleatorio.png', name: 'capitaoAleatorio'},
        ]

        this.iconesPadrao = './assets/padrao.png'
        this.heroisEscondidos = []

    }
    //Para usar o this, não precisamos do static
    inicializar(){
        //vai pegar todos herois e colocar na tela
        this.Tela.atualizarImagem(this.heroisIniciais)
        //força a tela a usar o THIS do jogo da memoria
        this.Tela.configuraBotaoJogar(this.jogar.bind(this))
    }


    embaralhar(){
        const copias = this.heroisIniciais
        //duplicar  os itens 
        .concat(this.heroisIniciais)
        //entrar em cada identificador e criar um id aleatorio
        .map(item =>{
            return Object.assign({}, item, {id: Math.random()/0.6})
        })
        // Ordenar nossos Herois de forma aleatoria
        .sort(()=>Math.random() - 0.6)
        this.Tela.atualizarImagem(copias)
        //vamos esperar um segundo para atualizar a tela 
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);

    }

    esconderHerois(herois){
        //vamos trocar a imagem de todos herois existentes
        //pelo icone padrao
        //como fizemos no construtor, vamos extrair somente o que é necessario
        //usando a sintaxe dos paranteses({chave: 1}) estamos falando que quermos retornar
        //o quer estiver nos parenteses
        //quando não usamos : (exemplo do id), o JS entende que o nome
        //é o mesmo do valor . Ex: id: id, vira id ,     
        const heroisOcutos = herois.map(({nome, id}) =>({
            id,
            nome, 
            img: this.iconesPadrao
        }))
        //atualizar a tela com os herois ocultos 
        this.Tela.atualizarImagem(heroisOcutos)
        //guardamos os herois ocutos para trabalhar com eles depois 
        this.heroisOcutos = heroisOcutos
    }

    jogar(){
          this.embaralhar()
    }
    
}