document.addEventListener("mousedown", dibujarOn);
document.addEventListener("mousemove", dibujando);
document.addEventListener("mouseup", dibujarOff);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext('2d');

var x, y, color;
var quiereDibujo = false;

function colorin(col)
{
    color = col;
}

function goma(col)
{
    color = col;
}

function dibujarOn()
{
    quiereDibujo = true;
}

function dibujando(dibu)
{
    x = dibu.clientY - 113;
    y = dibu.clientX - 10;
    if (quiereDibujo == true)
    {
        if (color == "white") {
            dibujar(color, y-1, x-1, y+1, x+1, papel, 25);  
        }
        else
        {
            dibujar(color, y-1, x-1, y+1, x+1, papel);
        }
    }
}

function dibujarOff()
{
    quiereDibujo = false;
}

dibujar("black", 2, 2, 2, 300, papel);
dibujar("black", 2, 300, 300, 300, papel);
dibujar("black", 300, 300, 300, 2, papel);
dibujar("black", 300, 2, 2, 2, papel);


function dibujar(col = "red", i1, i2, l1, l2, lienzo, wd = 2) {
    lienzo.beginPath();
    lienzo.strokeStyle = col;
    lienzo.lineWidth = wd;
    lienzo.moveTo(i1, i2);
    lienzo.lineTo(l1, l2);
    lienzo.stroke();
    lienzo.closePath();
}


/*
function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.DOWN:
            y = y + 5;
            dibujar("red", x, y - 5, x, y, papel);
            console.log(x, y);
            break;
        case teclas.UP:
            y = y - 5;
            dibujar("red", x, y + 5, x, y, papel);
            console.log(x, y);
            break;
        case teclas.LEFT:
            x = x - 5;
            dibujar("red", x + 5, y, x, y, papel);
            console.log(x, y);
            break;
        case teclas.RIGHT:
            x = x + 5;
            dibujar("red", x - 5, y, x, y, papel);
            console.log(x, y);
            break;
    }
}*/