
//SUMAR

//crear una variable y constante, se lee el id del boton del html
const boton1 = document.getElementById("btnsumar");
//el boton estara al pendiente cuando el usuario de click y despues realice la funcion
boton1.addEventListener("click", sumar);

function sumar()
//leer variable de los imputs
{
    const varnumero1 = Number(document.getElementById("num1").value);
    const varnumero2 = Number(document.getElementById("num2").value);

    //crear variable para guardar resultarlo
    const varresultado = varnumero1 + varnumero2;
    const imprimirsumresultado = document.getElementById("resultado1");
   //Imprimir resultado
    
    imprimirsumresultado.innerText = varresultado;

}


//RESTAR


const boton2 = document.getElementById("btnrestar");
boton2.addEventListener("click",restar);

function restar()
{
    const varnumero3 = Number(document.getElementById("num3").value);
    const varnumero4 = Number(document.getElementById("num4").value);
    const imprimirresresultado2 = document.getElementById("resultado2");

    const varresultado2 = varnumero3 - varnumero4;
    
    imprimirresresultado2.innerText = varresultado2;

}


//MULTIPLICAR

const boton3 = document.getElementById("btnmult");
boton3.addEventListener("click", multiplicar);

function multiplicar()
{
    const varnumero5 = Number(document.getElementById("num5").value);
    const varnumero6 = Number(document.getElementById("num6").value);
    const imprimirmulresultado3 = document.getElementById("resultado3");

    const varresultado3 = varnumero5 * varnumero6;
    
    imprimirmulresultado3.innerText = varresultado3;

}


//DIV
const boton4 = document.getElementById("btndiv");
boton4.addEventListener("click", dividir);

function dividir()
{
    const varnumero7 = Number(document.getElementById("num7").value);
    const varnumero8 = Number(document.getElementById("num8").value);
    const imprimirdivresultado4 = document.getElementById("resultado4");

    const varresultado4 = varnumero7 / varnumero8;
    
    imprimirdivresultado4.innerText = varresultado4;

}


//MOSTRAR NUMEROS DEL 0 AL 100

const boton5 = document.getElementById("btnmostar");
boton5.addEventListener("click", mostrar);

function mostrar(){

 const listas = document.getElementById("listado");

 //evitar que al presionar varias veces el boton se repita la lista, el " " sirve para imprimir vacio
listas.innerText = " ";

    for(let x=1; x<=100; x=x+1)

    {
    //alert("Numero" + x);
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item mt-1");

    li.innerText = x;
    listas.appendChild(li);
    
 }
}


//FOR 
//valor inicial, valor final, incremento
//for(x=1; x<=3; x=x+1)   (X++ -es igual- x=x+1)
//{}


//VERIFICAR CAL
const boton6 = document.getElementById("btncal");
boton6.addEventListener("click", comparar);

function comparar(){
    const calificacion = Number(document.getElementById("numcal").value);
    const resultado5 = document.getElementById("divimprimir");
    if(calificacion >=8)
    {

      
        resultado5.innerText = "Aprobado";

    }

    else 
    {
        resultado5.innerText = "Reprobado";
        const audio = document.getElementById("au1");
        audio.play();
    }

}


//AREA CUADRADO

const boton7 = document.getElementById("btncuadro");
boton7.addEventListener("click", cuadrado);

function cuadrado()
{
    const varnumero9 = Number(document.getElementById("num9").value);
    const imprimirdivresultado6 = document.getElementById("resultado6");

    const varresultado6 = varnumero9 * varnumero9;
    
    imprimirdivresultado6.innerText = varresultado6;

}


//AREA RECTANGULO

const boton8 = document.getElementById("btnrectangulo");
boton8.addEventListener("click", rectangulo);

function rectangulo()
{
    const varnumero11 = Number(document.getElementById("num11").value);
    const varnumero12 = Number(document.getElementById("num12").value);
    const imprimirdivresultado7 = document.getElementById("resultado7");

    const varresultado7 = varnumero11 * varnumero12;
    
    imprimirdivresultado7.innerText = varresultado7;

}

//DESCUENTO
const boton9 = document.getElementById("btndescuento");
boton9.addEventListener("click", descuento);

function descuento(){
const descprecio = Number(document.getElementById("num13").value);
const resultado8 = document.getElementById("resultado8");

if(descprecio >=1000)
{
    const prec = descprecio * .30;
    const varresultado8 = descprecio - prec;
    resultado8.innerText = "Descuento de 30%: " + varresultado8;

}
else
 {
    if(descprecio <=500)
    {
        const prec = descprecio *.10;
        const varresultado8 = descprecio - prec;
        resultado8.innerText = "Descuento de 10%:" + varresultado8;

    }

 
 }

}


// PAR O IMPAR

const boton11 = document.getElementById("btnpar");
boton11.addEventListener("click", par);

function par()
{
    const nump = Number(document.getElementById("num14").value);
    const resultado9 = document.getElementById("resultado9");
    if(nump % 2 == 0)
    {
        const varnumero9  = nump;
        resultado9.innerText = varnumero9 +":  es un número Par" ;

    }
    else
    {
        const varnumero9  = nump;
        resultado9.innerText = varnumero9 + ":  es un número Impar";
    }
    
   



}

   

//DESCENDENTES

const boton10 = document.getElementById("btndes");
boton10.addEventListener("click", des);

function des(){

 const listas1 = document.getElementById("listado2");

 //evitar que al presionar varias veces el boton se repita la lista, el " " sirve para imprimir vacio
listas1.innerText = " ";

    for(let x=100; x>=0; x=x-1)

    {
    //alert("Numero" + x);
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item mt-1");

    li.innerText = x;
    listas1.appendChild(li);
    
 }
}


