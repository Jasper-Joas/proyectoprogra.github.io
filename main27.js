function validar(){
    var nombre=document.getElementById('nombre').value;

    if (nombre==""){
        document.getElementById('arae').value="campo en blanco";
        document.getElementById('nombre').style.borderColor= "red";

    } else if (!isNaN(nombre)){

        document.getElementById('area').value="No puedes introducir numeros";
        document.getElementById('nombre').style.borderColor= "yellow";
        document.getElementById('nombre').style.borderLeftColor= "gray";
    
    } else {
        procesar(nombre);
    }

}

function procesar(nombre) {

    //var cantidad=nombre.length;
    //var nombre_mayusculas=nombre.toUpperCase();
    //var mensaje=nombre_mayusculas + 'contiene' + cantidad + 'caracteres.';
    document.getElementById('area').value='La palabra '   + nombre +   ' contiene numero '    +   nombre.length;
}