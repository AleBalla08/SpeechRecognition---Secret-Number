



const falarBtn = document.getElementById('botao-falar')
falarBtn.addEventListener('click', ()=>{
    window.SpeechRecognition =
    window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-br'
    recognition.start()
    recognition.addEventListener('result', onSpeech)
    function onSpeech(e){
    const resultadoFala = e.results[0][0].transcript
    const numeroFalado = document.querySelector('.box')
    numeroFalado.innerHTML = resultadoFala
    return numeroFalado
    
}

})

