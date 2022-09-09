let numero = parseInt(prompt(`Digiite um número`))
let divisores = []
let contador = 0
let resultado = 0

CalcularDivisores(numero)

console.log("Número escolhido -", numero, "é perfeito? - ", CalcularNumeroPerfeito())


function CalcularDivisores(numeroParametro) {
    for (let index = numeroParametro - 1; index >= 1; index--) {
        if (numeroParametro % index == 0) {
            divisores[contador] = index
            contador++
        }
    }
    console.log(divisores)
}

function CalcularNumeroPerfeito() {

    for (let i = 0; i < contador; i++) {
        resultado = resultado + divisores[i]
    }

    if (resultado == numero) {
        return true
    }
    else {
        return false
    }
}