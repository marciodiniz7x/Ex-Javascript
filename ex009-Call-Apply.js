function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;

console.log(getPreco());
console.log(`Preço com desconto: ${produto.getPreco()}`);

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro));

const moto = {preco: 19990, desc: 0.20}

console.log(getPreco.apply(moto));