//1.Sumemos

let suma = 0;

for(let i = 1; i<=5; i++){
    let val = prompt("Ingrese valor " + i);
    suma = suma + parseInt(val);
}
alert("La suma es: " + suma);

/******************************************************************* */

// 2.promedio


let promedio = 0;
let valor = parseInt(prompt("Ingrese cantidad de numeros"));

if(!isNaN(valor)){
    for(let i = 1; i<=valor; i++){
        let val = parseInt(prompt("Ingrese valor " + i))
        promedio += val;
    }
    alert(promedio)
    alert("La Promedio es: " + promedio/2);   
}else{
    alert("No es un numero")
}


/************************************************************ */


//3. EDADES

let cont=0;
let edades = parseInt(prompt("Cuantas edades desea ingresar"))

for (let i=1; i<=edades; i++){
    let datoIngresado = prompt("Ingrese edad " + i);
    if(datoIngresado>=18){
        cont++;
    }
}
alert("Son mayores de edad " + cont + " personas");


/*********************************************************** */

//4.Pares e impares

let par=0;
let impar=0;
let cantidad = prompt("Ingrese cantidad");

for(let i = 0; i<cantidad ; i++){
    let datoIngresado = parseInt(prompt("Ingrese numero " + (i+1)))
    if(datoIngresado%2==0){
        par++;
    }else{
        impar++;
    }
}
alert("Hay " + par + " numeros pares");
alert("Hay " + impar + " numeros impares");

/************************************************************************* */

//5.De números a letras

function abecedario(numero){
    let result;
    switch(numero){
        case "1": 
            result = "a";
            break;
        case "2":
            result = "b";
            break;
        case "3":
            result = "c";
            break;
        case "4": 
            result = "d";
            break;
        case "5":
            result = "e";
            break;
        case "6":
            result = "f";
            break;
        case "7":
            result = "g";
            break;
        case "8":
            result = "h";
            break;
        case "9":
            result = "i";
            break;
        case "10": 
            result = "j";
            break;
        default:
            result = "El numero no Existe";
    }
    return result;
}

let num = prompt("Ingrese un numero: ");
let result = abecedario(num);
alert(result);