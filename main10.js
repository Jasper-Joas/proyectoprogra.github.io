function obtener(){

    var pantalones=document.getElementById('pantalones').value;
    var camisas=document.getElementById('camisas').value;
    calcular_peso(pantalones,camisas);



}

function calcular_peso(pantalones,camisas) {

    var peso_pantalones=pantalones * 115 / 1000;

    var peso_camisas=camisas * 75 / 1000;

      total(peso_pantalones,peso_camisas);


}

function total(peso_pantalones,peso_camisas) {

    peso_total=peso_pantalones + peso_camisas;

    document.getElementById('area').value="El peso del paquete es de k  " + peso_total ;
}