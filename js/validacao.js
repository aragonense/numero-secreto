function verificaSeChuteValorValido(chute){
    
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class=titulo-acertou>Você acertou!</h2>
            <h3>O número secreto era<span class="numero-secreto"> ${numeroSecreto}</span></h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `
        recognition.end()
    } else if (numero > numeroSecreto) {
       
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
      
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
} )

