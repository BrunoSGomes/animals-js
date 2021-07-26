export class Carro {
    constructor(marca, precoInicial) {
        const taxa = 1.2
        const precoFinal = precoInicial * taxa
        this.marca = marca
        this.preco = precoFinal
    }

    taxa() {

    }
}

const rx7 = new Carro('Mazda', 10000)
console.log(rx7)