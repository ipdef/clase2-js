//Ciclo For

let numero1 = prompt("Ingrese un numero1: ");
let numero2 = prompt("Ingrese un numero2: ");
let numero3 = prompt("Ingrese un numero3: ");
let numero4 = prompt("Ingrese un numero4: ");
let suma = parseInt(numero1)+ parseInt(numero2) +
parseInt(numero3) + parseInt(numero4);
let promedio = suma/4;
alert("El promdeio es: "+ promedio);

let suma = 0;
for (let i=1; i<=4; i++){
    let datoIngresado = prompt("Ingrese número " + i);
    suma = suma + parseInt(datoIngresado);
}
alert("El promedio es: " + suma/4);

//WHILE
let counter = 1;
let suma = 0;
while(counter <=4){
    let datoIngresado=prompt("Ingrese número" + counter);
    suma = suma + parseInt(datoIngresado);
    counter ++;
}
alert("El promedio es: " + suma /4);


// //DO - WHILE
let counter = 1;
let suma = 0;
do{
    let datoIngresado=prompt("Ingrese número" + counter);
    suma = suma + parseInt(datoIngresado);
    counter ++;
}while(counter <= 4 );

alert("El promedio es: " + suma /4);


//FUNCIONES

function saludar(nombre){
    let saludo="Hola " + nombre.toUpperCase();
    return saludo;
}

let nombreUsuario = prompt("Ingrese su nombre: ");
let saludo = saludar(nombreUsuario);
alert(saludo);

// //FUNCION

function saludar(nombre){
    // let saludo="Hola " + nombre.toUpperCase();
    // return saludo;
    let saludo;
    switch(nombre){
        case "Angel":
            saludo = "Hola señor" + nombre;
            break;
        case "Debra":
            saludo = "Hola señorita " + nombre;
            break;
        default:
            saludo = "Ingresaste otro nombre";
    }
    return saludo;
}

let nombreUsuario = prompt("Ingrese su nombre: ");
let saludo = saludar(nombreUsuario);
alert(saludo);

/*Crea un ciclo del tipo do-while, solicita al visitante un usuario
y contraseña. Crea una function para validar que los datos ingresados
son correctos.
Si son correctos corta la ejecucion del ciclo
si son incorrectos vuelve a solicitar al visiatnte usuario y contraseña */

//definir usuario y pass correctos
const USER = 'root';
const PASSWORD = '1234';

function validateUser(user, password){
    // if(USER === user && PASSWORD === password){
    //     return true;
    // }
    // return false;
    return USER === user && PASSWORD === password;
}

let condition = false;
while(!condition){
    let user = prompt("Ingrese su usuario");
    let password = prompt("Ingrese su contraseña");

    condition = validateUser(user, password);
}

alert("Usted se ha logeado exitosamente");
