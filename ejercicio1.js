function calcular(){
    
    var peso = parseFloat(document.getElementById('peso').value);
    
    var altura =parseFloat(document.getElementById('altura').value);
    
    var resultado = 0;

    if(isNaN(peso)|| isNaN(altura)){
        alert ('por favor, ingrese todos los valores')
        return;
    }else{
        resultado = peso/(altura * altura)
        alert ('Su I M C es de: ' + resultado)
        return;
    }
}