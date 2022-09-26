function suma (){
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero2 * 0.10;
    var aumento = numero2 + resultado;

    document.getElementById('Resultado').value = aumento;
}