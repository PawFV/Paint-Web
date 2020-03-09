// EVENTOS
document.addEventListener("mousedown", dibujarOn);
document.addEventListener("mousemove", dibujando);
document.addEventListener("mouseup", dibujarOff);
var color = document.getElementById("colorPicker")
// CANVAS
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext('2d');
var pen = document.getElementById("pen")
var goma = document.getElementById("gomaIco")
cuadrito.addEventListener("pointermove", pincelOn)
cuadrito.addEventListener("pointerout", pincelOff)

var x, y
var lastColor = color.value
var quiereDibujo = false
var quiereBorrar = false



function dibujar(col = 'red', x, y, lienzo, lw = 2, lj = 'round', lc = 'round') {
    lienzo.strokeStyle = col
    lienzo.lineWidth = lw
    lienzo.lineJoin = lj
    lienzo.lineCap = lc
    lienzo.lineTo(x, y)
    lienzo.stroke()
}

function dibujarOn()
{
    quiereDibujo = true
    papel.beginPath()
}

// PINCEL/GOMA
function pincelOff()
{
    document.body.style.cursor = 'auto'
    if (!quiereBorrar) {
        pen.style.visibility = 'hidden'
    } else {
        goma.style.visibility = 'hidden'
    }
}
function pincelOn() {
    document.body.style.cursor = 'none'
    
    if (!quiereBorrar) {
        pen.style.top = `${x + 130}` + 'px'
        pen.style.left = `${y + 204}` + 'px'
        pen.style.visibility = 'visible'
        
    } else {
        goma.style.top = `${x + 130}` + 'px'
        goma.style.left = `${y + 204}` + 'px'
        goma.style.visibility = 'visible'
    }
}

function borrar(condicion) {
    quiereBorrar = condicion
    color.value = lastColor
    if (quiereBorrar)
    {
        lastColor = color.value;
        color.value = '#ffffff'    
    }
    else {
        color.value = lastColor
    }
}


function dibujando(dibu)
{
    x = dibu.clientY - 140;
    y = dibu.clientX - 208;
   
    if (quiereDibujo == true)
    {   
        if (color.value == "#ffffff") {
            // GOMA DE BORRAR
            dibujar(color.value, y-1 , x, papel, 8,'square','square'); 
        }
        else
        {
            dibujar(color.value, y, x, papel);    
        }
    }
}
function dibujarOff()
{
    quiereDibujo = false 
}

function fill() {
    papel.fillStyle = color.value
    papel.fillRect(0, 0, cuadrito.width, cuadrito.height)
}




