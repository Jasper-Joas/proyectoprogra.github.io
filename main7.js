function muestraOpcion(){

    var opciones = document.getElementsByName("eleccion");
    console.log(opciones);
    for(let i=0;i<opciones.length;i++){


        if(opciones[i].cheked){
        alert(opciones[i].value);
    }
    }
}