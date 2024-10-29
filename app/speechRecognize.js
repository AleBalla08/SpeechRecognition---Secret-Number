import { validaONumero } from "./validations.js";

window.SpeechRecognition =
    window.SpeechRecognition || webkitSpeechRecognition;

const falarBtn = document.getElementById('botao-falar')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()
recognition.addEventListener('result', onSpeech)

function onSpeech(e){
resultadoFala = e.results[0][0].transcript
    
exibeNaTela(resultadoFala)
validaONumero(resultadoFala)
   
console.log(resultadoFala)
    
}



function exibeNaTela(resultadoFala){
    const numeroFalado = document.getElementById('#chute')
    numeroFalado.innerHTML = `<div>Você disse:</div>
    <span class="box">${resultadoFala}</span>`
    verificaOChute(resultadoFala)

}

recognition.addEventListener('end', recognition,start())


  

