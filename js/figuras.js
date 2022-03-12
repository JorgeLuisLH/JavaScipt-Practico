console.log("Hola mundo")

//Este es el codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrada(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
} 
//console.log("El area del cuadrado mide: " + areaCuadrada + "cm^2")
//console.groupEnd();


//Este es el codigo del triangulo
console.group("Triangulos");
/*const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTrianguloa= 4;


console.log(
    "Los lados del triangulo miden: "
     + ladoTriangulo1 + "cm, " 
     + ladoTriangulo2 + "cm, "
     + baseTrianguloa + "cm ");
const alturaTriangulo= 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");
*/
function perimetroTriangulo(ladoTriangulo1,baseTriangulo){
    return (ladoTriangulo1 * 2) + baseTriangulo*1;
} 
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo * alturaTriangulo)/2;
}  
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
//console.groupEnd();

//Codigo del circulo
//console.group("Circulos");
//Radio
//const radioCirculo =4;
//console.log("El radio del ciculo es: " + radioCirculo + "cm")
//Diametro
const PI =Math.PI;
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diametro del circulo es: " + diametro + "cm")
//PI

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro* PI
} 
//console.log("El perimetro del ciruclo es: " + perimetro +"cm")
//Area
function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;
}  
//console.log("El area del circulo es: " + areaCirculo + "cm^2")


//Aqui interactuamos con HTML

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function CalcularAreaCuadrada(){
    const input =document.getElementById("InputCuadrado")
    const value = input.value;
    const area= areaCuadrada(value);
    alert(area)
}

function CalcularPerimetroTriangulo(){
    const inputLado = document.getElementById("InputLadoTriangulo")
    const valuelado = inputLado.value;
    const inputBase = document.getElementById("InputBaseTriangulo")
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valuelado,valueBase)
    alert(perimetro)
}

function CalcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo")
    const valueBase = inputBase.value
    const inputAltura = document.getElementById("InputAlturaTriangulo")
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase,valueAltura)
    alert(area)
}

function CalcularPerimetroCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo")
    const valueRadio = inputRadio.value
    const perimetro = perimetroCirculo(valueRadio)
    alert(perimetro)
}

function CalcularAreaCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo")
    const valueRadio = inputRadio.value
    const area = areaCirculo(valueRadio)
    alert(area)
}