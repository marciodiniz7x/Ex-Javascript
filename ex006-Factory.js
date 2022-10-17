// Factory simples: criar uma função e dentro dela retornar a criação de um objeto.

//Criar objetos normalmente
const prod1 = {
    nome: 'x',
    preço: 45
}

const prod2 = {
    nome: 'y',
    preço: 80
}

//criar objetos com factory simples
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade + ' anos'
    }
}
console.log(criarPessoa('Ana', 'Silva', 21));
console.log(criarPessoa('Paulo', 'Nunes', 32));
console.log(criarPessoa('Renato', 'Santos', 36));





