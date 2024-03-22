// Muestra un mensaje de bienvenida
alert("Hola, bienvenido y bienvenida a la calculadora");

//Solicita al usuario que ingrese el primer número y lo convienrte en numero punto flotante
var numero1 = parseFloat(prompt("Por favor ingresa un número del 0 al infinito"));

// Muestra el número ingresado por el usuario
alert("Elegiste el número " + numero1);

// Solicita al usuario que ingrese el segundo número y lo convierte en número punto flotante
var numero2 = parseFloat(prompt("Por favor ingresa un segundo número del 0 al infinito"));

// Muestra el segundo número ingresado por el usuario
alert("Tu segundo número es " + numero2);

// Solicita al usuario que elija una operación
alert("Elige la operación que deseas hacer con los número " + numero1 + " y " + numero2);

// Solicita al usuario que elija una operación y la convierte a un número entero
var operacion = parseInt(prompt("Elige una opción.\n1 es suma.\n2 es resta.\n3 es multiplicación.\n4 es división."));

// variable para almacenar el resultado de la operación
var resultado;

// variable para almacenar el nombre de la operación realizada
var nombre="";

// verifica que operación ha elegido el usuario y realiza la operación correspondiente
if(operacion == 1){
    resultado = numero1 + numero2;
    nombre = " la suma es " + resultado;
}else if(operacion == 2){
    resultado = numero1 - numero2;
    nombre = " la resta es " + resultado;
}else if(operacion == 3){
    resultado = numero1 * numero2;
    nombre = " la multiplicación es " + resultado;
}else if(operacion == 4){
    if(numero2 !== 0){
        resultado = numero1 / numero2;
        nombre = " la división es " + resultado;
    }else{
        nombre="no se puede dividir por cero";
    }
} else{
    nombre="operación no valida";
}
// Muestra el resultado de la operación
alert(nombre);

// Muestra los números ingresados por el usuario y el resultado de la operación
document.write("Los numeros que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operación de " + nombre);