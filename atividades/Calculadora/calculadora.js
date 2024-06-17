/*Botões*/
const adicao = document.getElementById('adicao')
const subtracao = document.getElementById('subtracao')
const multiplicacao = document.getElementById('multiplicacao')
const divisao = document.getElementById('divisao')

adicao.addEventListener('click', function(){
    let numero01 = Number(document.getElementById('numero1').value)
    let numero02 = Number(document.getElementById('numero2').value)
    let operacao = numero01 + numero02
    document.getElementById('resultado').textContent = `Resultado: ${operacao}`;
})
subtracao.addEventListener('click', function(){
    let numero01 = Number(document.getElementById('numero1').value)
    let numero02 = Number(document.getElementById('numero2').value)
    let operacao = numero01 - numero02
    document.getElementById('resultado').textContent = `Resultado: ${operacao}`;
})
multiplicacao.addEventListener('click', function(){
    let numero01 = Number(document.getElementById('numero1').value)
    let numero02 = Number(document.getElementById('numero2').value)
    let operacao = numero01 * numero02
    document.getElementById('resultado').textContent = `Resultado: ${operacao}`;
})
divisao.addEventListener('click', function(){
    let numero01 = Number(document.getElementById('numero1').value)
    let numero02 = Number(document.getElementById('numero2').value)
    let operacao = numero01 / numero02
    document.getElementById('resultado').textContent = `Resultado: ${operacao}`;
})