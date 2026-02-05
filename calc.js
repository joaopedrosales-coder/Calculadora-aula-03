let visor = document.getElementById("visor");

function adicionar(valor) {
    visor.value = visor.value + valor;
}

function limpar() {
    visor.value = "";

}
function calcular() {
    visor.value = eval(visor.value);
}
