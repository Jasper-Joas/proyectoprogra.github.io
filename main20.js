function materias(){
    var materias = parseFloat(document.getElementById('materia').value);

    switch(materias){
        case 1: 
            document.getElementById('Resultado').value = 'Biblia'
            break;
        case 2:
            document.getElementById('Resultado').value = 'Math'
            break;
        case 3:
            document.getElementById('Resultado').value = 'Physics'
            break;
        case 4:
            document.getElementById('Resultado').value = 'Quimica'
            break;
        case 5:
            document.getElementById('Resultado').value = 'Laboratorio'
            break;
        case 6:
            document.getElementById('Resultado').value = 'Taller'
            break;
        case 7:
            document.getElementById('Resultado').value = 'DiseÑo web'
            break;
        case 8: 
            document.getElementById('Resultado').value = 'Programacion'
            break;
        case 9:
            document.getElementById('Resultado').value = 'Redes'
            break;
        case 10:
            document.getElementById('Resultado').value = 'Contabilidad'
            break;
        case 11:
            document.getElementById('Resultado').value = 'Biologia'
            break;
        default:
            document.write('no tenemos especificada la materia');
            break;
    }
}