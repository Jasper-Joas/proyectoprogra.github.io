function contrasena() {

    var password="jasper";


    var contrasena=document.getElementById('pass').value;

     var pass=contrasena.toLowerCase();

    


    if (pass==password) {
        

        document.getElementById('area').value= "La contrasena  es la corrreta";

    }else {
        document.getElementById('area').value="La contrasena No es corrreta ";
    }

}