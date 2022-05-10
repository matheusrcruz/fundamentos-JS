let salarioDoAmigo = 1000
let meuSalario = '2000.14'

let salarioCorrigido = Number(meuSalario);

console.log(salarioCorrigido + salarioDoAmigo)

console.log(
    typeof(salarioDoAmigo),
    salarioDoAmigo
)

console.log(
    typeof(meuSalario),
    meuSalario
)

console.log(
    isNaN(meuSalario)
)

let minhaStrg = 'ola mundo'
let outraString = "helo wordi"

let minhaStringJunta =  `${minhaStrg} + ${outraString} aaa
`
console.log(minhaStringJunta)