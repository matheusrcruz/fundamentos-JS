const pessoa = {
    _nome: '',
    _idade: 20,
    get nome(){
        return this._nome;
    },
    set nome(valor){
        this._nome = valor.toUpperCase();
    },
    get idadeDirigir(){
        return this._idade > 19;
    },
    set idade(any){
        this._idade = any
    }

}
pessoa.nome = 'singas'

console.log(pessoa.nome);
pessoa.idade = 16
console.log(pessoa.idadeDirigir);