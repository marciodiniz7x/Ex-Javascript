// Criação de funções

// 1) Forma literal
function acao() {

}

// 2) Armazenr em uma variável
const acao2 = function() {

}

// 3) Armazenar em Array
const array1 =  [function(a, b) {
    return a + b;
}, acao, acao2]
console.log(array1[0](2, 3))

// 4) Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa';
}
console.log(obj.falar())

// 5) Passar funcção como parâmetro de outra função
function acao3(acao) {
    acao()
}
acao3( function() {
    console.log('Oláaaa')
})