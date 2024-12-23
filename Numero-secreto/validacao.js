function  verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuterForInvalido(numero)){
elementoChute.innerHTML += `<div>Valor inválido</div>`
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Fale um valor entre ${menorValor} e ${maiorValor}</div>`
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Voce acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }

}
function chuterForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
if (e.target.id == 'jogar-novamente') {
window.location.reload()
}

})