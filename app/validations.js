import { numeroSorteado } from "./numeroSecreto.js"

function validaONumero(resultadoFala){
    const numeroFalado = document.getElementById('#chute')
    const numero = +resultadoFala
    if (Number.isNaN(numero)){
        numeroFalado.innerHTML += `<div>O seu chute deve ser um número</div>`
        return
    }

    if (numero > maiorValor || numero < menorValor){
        numeroFalado.innerHTML += `<div>O seu chute deve estar entre ${menorValor} e ${maiorValor}</div>`
        return

    }

    if (numero === numeroSorteado){
        document.body.innerHTML = `
        <h2>Parabéns, vocẽ acertou!</h2>
        <h3>O numero secreto era ${numeroSorteado}</h3> 
        <button id='btn-jogar' class='jogar-novamente' >Jogar Novamente </button>
        `
    } else if (numero>numeroSorteado){
        numeroFalado.innerHTML += `<div>O número secreto é menor!<i class="fa-solid fa-down-long"></i></div>`

    }

    else if (numero<numeroSorteado){
        numeroFalado.innerHTML += `<div>O número secreto é maior!<i class="fa-solid fa-up-long"></i></div>`
    }

};

document.body.addEventListener('click', e =>{
    if(e.target.id == '#btn-jogar'){
        window.location.reload()
    }

})

export { validaONumero }