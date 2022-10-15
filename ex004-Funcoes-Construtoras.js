function carro(velMax = 200, delta = 5) {
    // atributo privado (apenas da função carro)
    let velAtual = 0;

    // método público
    this.acelerar = function () {
        if (velAtual + delta <= velMax) {
            velAtual += delta;
        } else {
            velAtual = velMax;
        }
    }

    // método público
    this.getVelAtual = function () {
        return velAtual;
    }
}

const uno = new carro;
uno.acelerar();
console.log(uno.getVelAtual());

const ferrari = new carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelAtual());

console.log('carro é ' + typeof carro);
console.log('ferrari é ' + typeof ferrari)
