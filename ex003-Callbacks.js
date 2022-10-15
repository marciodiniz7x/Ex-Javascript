// const fabricantes = ['Mercedes', 'Audi', 'BMW'];

// function imprimir(nome, indice) {
//     console.log(`${indice + 1}. ${nome}`);
// }
// fabricantes.forEach(imprimir);

// fabricantes.forEach(function(a) {
//     console.log(a);
// })

const notas = [7, 8, 9, 5, 6];

// Sem callback
const notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// Com callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7;
});

console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => nota < 7);

console.log(notasBaixas3);