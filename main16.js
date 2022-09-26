function suma(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultado= (base * altura) / 2;

    document.getElementById('Resultado').value  = resultado;
}

