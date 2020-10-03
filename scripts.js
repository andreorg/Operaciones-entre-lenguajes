
/*Funciones con alfabetos*/
function alfabetoInterseccion() {
    var alf = document.getElementById("alfabeto1").value.split(",");
    var alf2 = document.getElementById("alfabeto2").value.split(",");
    var salida = [];
    for(var i = 0; i < alf2.length;i++){
        var a = buscar(alf2[i],alf);
        if(a == true){
       salida.push(alf2[i]);
       }
    }
    document.getElementById("alfabetoR").innerHTML = salida;
}

function alfabetoUnion(){
    var alf = document.getElementById("alfabeto1").value.split(",");
    var alf2 = document.getElementById("alfabeto2").value.split(",");
    var salida =alf;
    for(i=0;i<alf2.length;i++){
        if(!buscar(alf2[i],salida)){
            salida.push(alf2[i]);
        }
    }
    document.getElementById("alfabetoR").innerHTML = salida;
}

function alfabetoDiferencia() {
    var alf1 = document.getElementById("alfabeto1").value.split(",");
    var alf2 = document.getElementById("alfabeto2").value.split(",");
    var salida = [];
    for(var i = 0; i < alf1.length;i++){
        var a = buscar(alf1[i],alf2);
        if(a == false){
       salida.push(alf1[i]);
       }
    }
    document.getElementById("alfabetoR").innerHTML = salida;
}


/*Funciones con lenguajes*/

function lenguajeInterseccion(){
    var len = document.getElementById("lenguaje1").value.split(",");
    var len2 = document.getElementById("lenguaje2").value.split(",");
    var salida = ["&"];
    for(var i = 0; i< len2.length;i++){
        var a = buscar(len2[i],len);
        if (a==true && len2[i] != "&"){
            salida.push(len2[i]);
        }
    }
    document.getElementById("lenguajeR").innerHTML = salida;
}

function lenguajeUnion(){
    var len = document.getElementById("lenguaje1").value.split(",");
    var len2 = document.getElementById("lenguaje2").value.split(",");
    var salida =len;
    for(i=0;i<len2.length;i++){
        if(!buscar(len2[i],salida)){
            salida.push(len2[i]);
        }
    }
    document.getElementById("lenguajeR").innerHTML = salida;
}
function lenguajeDiferencia(){
    var len = document.getElementById("lenguaje1").value.split(",");
    var len2 = document.getElementById("lenguaje2").value.split(",");
    var salida = ["&"];
    for(var i = 0; i< len2.length;i++){
        var a = buscar(len2[i],len);
        if (a==false && len2[i] != "&"){
            salida.push(len2[i]);
        }
    }
    document.getElementById("lenguajeR").innerHTML = salida;
}

function lenguajePotencia(leng){
    var poten=document.getElementById("potencia").value;
    var salida=[];
     if(poten>1){ 
        var aux=leng;
        var aux2=[];
        for(i=0;i<poten-1;i++){
            for(j=0;j<leng.length;j++){
                for(k=0;k<aux.length;k++){
                  if(leng[j]=="&"){
                      if(!buscar(aux[k],aux2)){
                          aux2.push(aux[k]);
                      }
                  }else if(aux[k]=="&"){
                      if(!buscar(leng[j],aux2)){
                        aux2.push(leng[j]);
                      }
                  }else{
                      if(!buscar(leng[j].concat(aux[k]),aux2)){
                        aux2.push(leng[j].concat(aux[k]));
                      }
                  }
                }
            }
            salida=aux2;
            aux=aux2;
            aux2=[];
        }
    }else if(poten==1){
        salida=leng;
    }
   document.getElementById("lenguajeR").innerHTML = salida;
}

function lenguajeConcatenacion(leng1,leng2) {
   
    var salida=[];
    if(leng1 == "" || leng2 == ""){
        salida=[];
    }else{
        for(var x=0;x<leng1.length;x++){
            for(var y=0;y<leng2.length;y++){
                if(leng1[x]=="&"){
                    salida.push(leng2[y]);
                }else if(leng2[y]=="&"){
                    salida.push(leng1[x]);
                }else{
                    salida.push(leng1[x].concat(leng2[y]));
                }
                
            }
        }
    }
    
    document.getElementById("lenguajeR").innerHTML =salida;
} 
function lenguajeCardinalidad(lenguaje){
    if(lenguaje == ""){
        document.getElementById("lenguajeR").innerHTML = 0;
    }
    else{
        document.getElementById("lenguajeR").innerHTML = lenguaje.length;
    }
}


function lenguajeInvertido(lenguaje){
    var resultado = [];
    for(var i = 0; i < lenguaje.length; i++){
        palabraInvertida = invertirPalabra(lenguaje[i]);
        resultado.push(palabraInvertida);
    }
    document.getElementById("lenguajeR").innerHTML = resultado;
}

/*Funciones con palabras*/
function palabraCardinalidad(){
    var palabra = document.getElementById("palabra1").value;
    document.getElementById("palabraR").innerHTML = palabra.length;
}


function palabraInversa(palabra){
    var inversa = "";
    for(var i = palabra.length; i >= 0;i--){
        inversa = inversa + palabra.charAt(i);
    }
   document.getElementById("palabraR").innerHTML = inversa;
}

/*Adicionales*/
function buscar(a,vector){
    
    for(var i = 0; i < vector.length;i++){
        if(a == vector[i]){
            return true;
        }
    }
    return false;
}
function invertirPalabra(palabra){
    var inversa = "";
    for(var i = palabra.length; i >= 0;i--){
        inversa = inversa + palabra.charAt(i);
    }
   return inversa;
}