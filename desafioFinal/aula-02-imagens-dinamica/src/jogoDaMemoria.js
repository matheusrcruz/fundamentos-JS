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
    }
    
}