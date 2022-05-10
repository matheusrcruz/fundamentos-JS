const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = 'mensagem'
const CLASSE_INVISIVEL = 'invisible'
const MENSAGEM = {
    sucesso:{
        texto: 'Combinação correta!',
        classe: 'alert-success'
    },
    error: {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }
}
class Tela
{
    static obterHtml(item) {
        return`
        <div class="col-md-2">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}','${item.nome}')">
             <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
          <br>    
        </div>
        `
    }
    static configurarVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick

    }
    static alterarConteudoHtml(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml;
    }

    static gerarStringHtmlPelaImagem(itens){
        //Para cada item da lista, vai executar a função desenharCards
        //E ao final vai concatenar tudo a uma string   
        //Mudar de array para string 
        return itens.map(Tela.obterHtml).join('')
    }

    static atualizarImagem(itens){
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
         console.log("Entrou aqui ")
    }
    
    static configuraBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
        console.log('Entrou aqui configurar')

    }

    static exibirHerois(nomeDoHeroi, img){
        const elementoHtml = document.getElementsByName(nomeDoHeroi)
        // para cada elemento encontrado na tela, vamos alterar a imagem
        // para a imagem inicial dele 
        // com forEach, para cada item, dentro dos () setamos o valor
        // de imagem 
        elementoHtml.forEach(item => (item.src = img))
    }
    static exibirMensagem(sucesso = true ){
        const elemento = document.getElementById(ID_MENSAGEM);

        //retirar um elemento da classe html
        if(sucesso){
            elemento.classList.remove(MENSAGEM.error.classe)
            elemento.classList.add(MENSAGEM.sucesso.classe)
            elemento.innerText = MENSAGEM.sucesso.texto
        }else{
            elemento.classList.remove(MENSAGEM.sucesso.classe)
            elemento.classList.add(MENSAGEM.error.classe)
            elemento.innerText = MENSAGEM.error.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)

    }
}