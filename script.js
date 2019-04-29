var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var boton = document.getElementById("cons");
var regresar = document.getElementById("indice");
boton.addEventListener("click",creaPiramide);

function creaPiramide(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var r,w,h,aux1,aux2,z,b;
    b = parseInt(document.getElementById("Nbase").value);
    w = canvas.width;
    h= canvas.height;
    r = w/(2*b);
    z = 0;
    aux1 = r;
    aux2 = h - r;
    
    for(var i=b;i>0;i--){
        
        for(var j=0;j<i;j++){
            ctx.beginPath();
            ctx.arc(aux1,aux2,r,0,2*Math.PI);
            ctx.stroke();
            aux1 = aux1 + (2*r);
        }

        z++;
        aux1 = r*(z+1);
        aux2 = aux2 - (Math.sqrt(3)*r);
    }
    
}

