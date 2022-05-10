const ID_CONTEUDO = 'conteudo'
class Tela
{
    static obterHtml(item) {
        return`
        <div class="col-md-2">
            <div class="card" style="width: 50%">
             <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
          <br>    
        </div>
        `
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
    }
    
}