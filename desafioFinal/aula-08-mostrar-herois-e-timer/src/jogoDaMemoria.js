class JogoDaMemoria {
    
    
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util
        this.iconePadrao = './assets/default.png'
        this.heroisIniciais = [
            { img: './assets/batman.png', nome: 'batman'},
            { img: './assets/ciclop.png', nome: 'ciclop'},
            { img: './assets/deadpool.png', nome: 'deadpool'},
            { img: './assets/mulhermaravilha.png', nome: 'mulhermaravilha'},
        ]
        
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
        // quando essa função executar, vai ignorar o this de window 
        // ela vai usar o this dessa tela
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarClickVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }
    esconderHerois (herois) {
        const heroisOcultos = herois.map(({ nome, id}) => ({
            id, 
            nome,
            img: this.iconePadrao
        }))

        this.tela.atualizarImagens(heroisOcultos)
        this.heroisEscondidos = heroisOcultos
    }

    exibirHerois(nomeHeroi) {
        const { img } = this.heroisIniciais.find(({ nome }) => nomeHeroi === nome) 
        this.tela.exibirHerois(nomeHeroi, img)
    }

    verificarSelecao(id, nome) {
        const item = { id, nome}
        // alert(`Olá: ${nome}, id: ${id}`)
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0: 
                this.heroisSelecionados.push(item)
                break;
            case 1: 
                const [ opcao1 ] = this.heroisSelecionados
                // zerar itens, para nao selecionar mais de dois
                this.heroisSelecionados = []
                let deveMostrarMensagem = false
                if(opcao1.nome === item.nome && opcao1.id !== id) {
                    deveMostrarMensagem = true 
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem(true)
                return;
                }
                this.tela.exibirMensagem(false)
                break;
        }
    }

   async embaralhar() {
        const copias = this.heroisIniciais

        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada um dos itens e gerar um id para cada
        .map((item) => {
            return Object.assign({}, item, { id: (Math.random() / 0.5 )})
        })
        // ordenar
        .sort(() => Math.random() - 0.5 )

        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()
        const idDoIntervalo = this.tela.iniciarContador()
       //vamos esperar  3 segs para atualizar a tela 
        await this.util.timeout(3000)            
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
     
    }

    mostrarHeroisEscondidos(){
        //pegar herois da tela
        //e colocar os valores corretos nele 
        const heroisEscondidos = this.heroisEscondidos

        for (const heroi of heroisEscondidos){
            const {img} = this.heroisIniciais.find(item =>item.nome ==heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }

    jogar() {
        this.embaralhar()
    }

}