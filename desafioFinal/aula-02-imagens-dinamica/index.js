function onLoad(){
  const dependencias = {
      tela: Tela //a class tela é global 
  }
  const jogoDaMemoria = new JogoDaMemoria(dependencias);
  jogoDaMemoria.inicializar()
}
window.onload = onLoad