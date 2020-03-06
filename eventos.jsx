// EVENTOS
document.addEventListener("mousedown", dibujarOn);
document.addEventListener("mousemove", dibujando);
document.addEventListener("mouseup", dibujarOff);
document.getElementById("colorPicker");
// CANVAS
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext('2d');


papel.lineWidth = 3;
papel.lineJoin = 'round';
papel.lineCap = 'round';
papel.fillStyle = 'white';
// CUADRADO DIBUJADO EN CANVAS

function dibujar(col = "red", i1, i2, l1, l2, lienzo) {
    // lienzo.beginPath();
    lienzo.strokeStyle = document.getElementById("colorPicker").value;
    lienzo.lineTo(l1, l2);
    lienzo.stroke();
}


var x, y, color;
var quiereDibujo = false;


function dibujarOn(dibu)
{
    quiereDibujo = true;
    papel.beginPath();
    cuadrito.style.cursor = 'wait'
}

function dibujando(dibu)
{
    
    x = dibu.clientY - 189;
    y = dibu.clientX - 208;
    if (quiereDibujo == true)
    {
        if (color == "white") {
            // GOMA DE BORRAR
            dibujar(color, y, x , y , x, papel, 25);  
            
        }
        else
        {
            dibujar(color, y, x, y, x, papel);     
        }
    }
}

function fill() {
    papel.fillRect(0, 0, cuadrito.width, cuadrito.height);
}


function dibujarOff()
{
    quiereDibujo = false;
    cuadrito.style.cursor = 'auto'
}


function colorin(col)
{
    color = col
    papel.strokeStyle = col
}

