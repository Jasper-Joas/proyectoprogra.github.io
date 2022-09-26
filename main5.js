
function mayor_edad() {
    var edad=document.getElementById('edad').value;

    if (edad < 18){

        document.getElementById('area').value="Eres menor de edad, tiene " +edad+ "anos";
    }else if (edad<60){

        document.getElementById('area').value="Eres  mayor de edad,  y menor de 60 anos";

    
    }else {
        document.getElementById('area').value="Tienes mas de  60 anos";
    }

}