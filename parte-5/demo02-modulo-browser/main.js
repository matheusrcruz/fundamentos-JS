window.onload = () =>{
    console.log('Passei pelo window', Matematica.subtrair(1, 2));
    const btn = document.getElementById('btnCalcular');
    //Toda vez que chamar o evento de click vai passar o argumento clicou .
    btn.onclick = click 

    function getValueInput(id){
        //Pegar o valor da opeção isso vai funcionar no select e input
        const item = document.getElementById(id)
        return item.value
    }

    function click(){
        const tipoOperacao = getValueInput('tipoOperacao');
        const valor1 = getValueInput('valor1');
        const valor2 = getValueInput('valor2');
        const resultado = Matematica[tipoOperacao](
            valor1,
            valor2
        )
        console.log('resultado', resultado);
        document.getElementById('resultado')
            .innerText= `
            A Operação de ${tipoOperacao}, ${valor1} por ${valor2} é:${resultado}
            `
    }


}