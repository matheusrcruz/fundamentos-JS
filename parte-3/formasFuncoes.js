//ElJeito normale 
function soyElfuncione(parametro1){
    return `aeeee`
}
//Função anônima

const anonima = function(paramentro1) {
    return  `vai blazeeeeee ${paramentro1}`;
}
// console.log(anonima('small time'))

//ARROW FUNCTION, passo a quantodade de parametros no parenteses, quando é um parametro só não precisa da chave e nem do return
// const funcaoEmFlecha = (parametro)=> `its small, time go next calllll ${parametro}`
const funcaoEmFlecha = (parametro)=> {
    return `its small, time go next calllll ${parametro}`
}
// console.log(funcaoEmFlecha('call me a dog'));

//Dentro de objetos podemos passar nossa ARROW FUNCTION

const objeto1 =  {
    minhaFuncao: paramentro1 => `iae ${paramentro1}`
}
objeto1.minhaFuncao('test')

// console.log(objeto1.minhaFuncao)

//sem palavra function

const objeto2 = {
        minhaFuncao(paramentro){
            return `aeeeee${paramentro}`
        }
}