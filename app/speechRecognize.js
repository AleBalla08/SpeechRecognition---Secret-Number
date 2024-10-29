import { validaONumero } from "./validations.js";
const numeroFalado = document.getElementById('#chute')

window.SpeechRecognition =
    window.SpeechRecognition || webkitSpeechRecognition;



const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeech)

function onSpeech(e){
    const resultadoFala = e.results[0][0].transcript
    exibeNaTela(resultadoFala)
    validaONumero(resultadoFala)
    console.log(resultadoFala)
    
}



function exibeNaTela(resultadoFala){
    
    numeroFalado.innerHTML = `<div>Você disse:</div>
    <span class="box">${resultadoFala}</span>`
    verificaOChute(resultadoFala)

}

recognition.addEventListener('end', () => recognition.start())


  

