// // Criação de funções

// // 1) Forma literal
// function acao() {

// }

// // 2) Armazenr em uma variável
// const acao2 = function() {

// }

// // 3) Armazenar em Array
// const array1 =  [function(a, b) {
//     return a + b;
// }, acao, acao2]
// console.log(array1[0](2, 3))

// // 4) Armazenar em um atributo de objeto
// const obj = {}
// obj.falar = function () {
//     return 'Opa';
// }
// console.log(obj.falar())

// // 5) Passar funcção como parâmetro de outra função
// function acao3(acao) {
//     acao()
// }
// acao3( function() {
//     console.log('Oláaaa')
// })

// // 6) Adicionando parâmetros à função
// function soma() {
//     let soma = 0
//     for (i in arguments) {
//         soma += arguments[i]
//     }
//     return soma
// }
// console.log(soma(1))
// console.log(soma(1, 2))
// console.log(soma(1, 2, 3))
// console.log(soma(1, 2, 3, 4))

const soma = (x, y) => {
    return x + y;
}

const resultado = (a, b, operacao = soma) => {
    console.log(operacao (a, b));
}

resultado(3, 1);
resultado(3, 1, soma);
resultado(3, 1, (x, y) => {return x - y});
resultado(3, 1, function(x, y, parametro = 2) {
    return x - y + parametro
})
