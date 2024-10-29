export { numeroSorteado }

const menorValor = 1
const maiorValor = 100
const numeroSorteado = sortearNumero()

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor


function sortearNumero(){
    return parseInt(Math.random() * maiorValor + 1)
}



console.log(numeroSorteado)

