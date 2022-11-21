let cont=1;
function sumar(){
    if(cont<=10){
    let numero1=parseFloat(document.getElementById('n1').value);
    let numero2=parseFloat(document.getElementById('n2').value);
    let total = numero1 + numero2;
 

    muestraResultado.innerHTML += '</br>' + numero1 + ' + ' + numero2 + ' = ' + total;
    cont+=1;
    }
    else{
        alert('Presione el boton "LIMPIAR PANTALLA" para seguir operando')
    }
}
function restar(){
    if(cont<=10){
        let numero1=parseFloat(document.getElementById('n1').value);
        let numero2=parseFloat(document.getElementById('n2').value);
        let total = numero1 - numero2;
     
    
        muestraResultado.innerHTML += '</br>' + numero1 + ' - ' + numero2 + ' = ' + total;
        cont+=1;
        }
        else{
            alert('Presione el boton "LIMPIAR PANTALLA" para seguir operando')
        }
}
function multiplicar(){
    if(cont<=10){
        let numero1=parseFloat(document.getElementById('n1').value);
        let numero2=parseFloat(document.getElementById('n2').value);
        let total = numero1 * numero2;
     
    
        muestraResultado.innerHTML += '</br>' + numero1 + ' x ' + numero2 + ' = ' + total;
        cont+=1;
        }
        else{
            alert('Presione el boton "LIMPIAR PANTALLA" para seguir operando')
        }
}
function dividir(){
    if(cont<=10){
    let numero1=parseFloat(document.getElementById('n1').value);
    let numero2=parseFloat(document.getElementById('n2').value);
        if(numero2!=0){

        let total  = numero1 / numero2;

        muestraResultado.innerHTML += '</br>' + numero1 + ' / ' + numero2 + ' = ' + total ;
        cont+=1;
        }
        else{
        alert('No se puede dividir por 0');
        }
    }
    else{
        alert('Presione el boton "LIMPIAR PANTALLA" para seguir operando')
    }
}

function limpiar(){
    muestraResultado.innerHTML ='';
    cont=1
}