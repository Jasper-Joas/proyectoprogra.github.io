function par(){
    var numero=document.getElementById('numero').value;
    var porcentaje=numero%2;

    if (numero%2==0){
        document.getElementById('area').value="El  numero es par";

    }else{
       document.getElementById('area').value="El numerones es inpar";
    }
    

}
