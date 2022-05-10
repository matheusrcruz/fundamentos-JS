// metodos estatico não pode acessar o this
// por isso não vamos injetar o util no constructor 

const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BOTAO_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = 'carregando'
const ID_CONTADOR = 'contador'
const BTN_MOSTRAR_TUDO = 'mostrarTudo'
const MENSAGENS = {
    sucesso: {
        texto: "Combinação correta!",
        classe: "alert-success"
    },
    erro: {
        texto: "Combinação incorreta!",
        classe: "alert-danger"
    }
}
class Tela {
    static obterCodigoHtml(item) {
       return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
            <br />
        </div> 
        `
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(data) {
        return data.map(Tela.obterCodigoHtml).join('')
    }
    static async exibirMensagem(sucesso = true) {
        
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }

        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(3000)
        elemento.classList.add(CLASSE_INVISIVEL)
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static exibirHerois(nome, img) {
        const elements = document.getElementsByName(nome)
        elements.forEach(item => (item.src = img))
    }
    static configurarBotaoJogar(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BOTAO_JOGAR)
        btnJogar.onclick = funcaoOnclick
    }
    static configurarClickVerificarSelecao(funcaoOnclick) {
        window.verificarSelecao = funcaoOnclick
    }

 
    static exibirCarregando(mostrar = true){
        const carregando = document.getElementById(ID_CARREGANDO)

        if(mostrar){
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }
        carregando.classList.add(CLASSE_INVISIVEL)
    }

    static iniciarContador(){
        let contarAte = 3
        const elementoContador = document.getElementById(ID_CONTADOR)
        //vamos subistituir apartir do contador 
        //onde está $$contador adicionaremos um valor 
        const indentificadorNoTexto = '$$contador'
        const textoPadrao = `começando em ${indentificadorNoTexto} segundos ...`
        // vamos criar uma funcao em linha para atualizar o texto
        // a cada segundo
        const atualizarTexto = () => 
        (elementoContador.innerHTML = textoPadrao.replace(indentificadorNoTexto, contarAte--)) 
        
        atualizarTexto()
        //a cada segundo vai chamar essa funcao atualizar o texto 
        // e essa função vai substituir o $$contador pelo contarAte diminuindo o timer
        //e retornarmos o idDoIntervalo pra trabalhar depois com ele 
        const idDoIntervalo = setInterval(atualizarTexto, 1000)
        return idDoIntervalo
    }

    static limparContador(idDoIntervalo){
        clearInterval(idDoIntervalo)
        
        document.getElementById(ID_CONTADOR).innerHTML = ""

    }

    static configurarBotaoMostrarTudo(funcaoClick){
        const btnMostarTudo = document.getElementById(BTN_MOSTRAR_TUDO)
        btnMostarTudo.onclick = funcaoClick
    }


}

