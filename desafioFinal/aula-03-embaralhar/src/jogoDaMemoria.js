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
    }

    jogar(){
          this.embaralhar()
    }
    
}