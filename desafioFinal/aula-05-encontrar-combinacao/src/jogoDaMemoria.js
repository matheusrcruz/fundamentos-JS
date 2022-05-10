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
                {img: './assets/batman.png', nome: 'batman'},
                {img: './assets/thor.png', nome: 'thor'},
                {img: './assets/miranha.png', nome: 'homemAranha'},
                {img: './assets/hellboy.png', nome: 'hellboy'},
                {img: './assets/flash.png', nome: 'flash'},
                {img: './assets/capitaoAleatorio.png', nome: 'capitaoAleatorio'},
        ]

        this.iconesPadrao = './assets/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []

    }
    //Para usar o this, não precisamos do static
    inicializar(){
        //vai pegar todos herois e colocar na tela
        this.Tela.atualizarImagem(this.heroisIniciais)
        //força a tela a usar o THIS do jogo da memoria
        this.Tela.configuraBotaoJogar(this.jogar.bind(this))
        this.Tela.configurarVerificarSelecao(this.verificarSelecao.bind(this))
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

    exibirHerois(nomeDoHeroi){
        // vamos procurar esse heroi pelo nome nos heroisIniciais
        // vamos obter somente as imagens dele
        const { img } = this.heroisIniciais.find(({nome}) =>nomeDoHeroi === nome)
        // vamos criar uma função na tela para exibir somente o heroi selecionado 
        this.Tela.exibirHerois(nomeDoHeroi, img)
    }

    verificarSelecao(id, nome){
        const item = {id, nome}
        //vamos pegar a aquantidade de herois selecionados 
        //e a ação se escolheu certo ou errado 
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                //adicionar dentro de uma lista, esperando pela proxima
                //clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                //se a quantidade for 1, significa
                //que o usario só pode escolher mais 1
                //vamos obter o primeiro da lista
                const [ opcao1 ] = this.heroisSelecionados
                //zerar itens para não selecionar mais de dois 
                this.heroisSelecionados = []
                //conferir se os nomes e ids batem conforme
                //o esperado 
                if(opcao1.nome === item.nome && 
                    //aqui verificamos se são ids diferentes para
                    // o usuario não clicar 2 vezes no mesmo card e hackear o game 
                    opcao1.id !== item.id
                    ){
                       this.exibirHerois(item.nome)
                       //como o padrão é true não precisa passar nada
                       this.Tela.exibirMensagem()
                        //para execução
                        return;
                    }
                    this.Tela.exibirMensagem(false)
                    //fm do case!!!
                    break;

        }

    }

    jogar(){
          this.embaralhar()
    }
    
}