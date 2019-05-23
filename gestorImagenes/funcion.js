var num=1;
var imagenVisible=0;
var imagenVisibleA=10;
var which=10;

var foto = new Array();
foto[0] = "images/foto1.jpg";
foto[1] = "images/foto2.jpg";
foto[2] = "images/foto3.jpg";
foto[3] = "images/foto4.jpg";
foto[4] = "images/foto5.jpg";
foto[5] = "images/foto6.jpg";
foto[6] = "images/foto7.jpg";
foto[7] = "images/foto8.jpg";
foto[8] = "images/foto9.jpg";
foto[9] = "images/foto10.jpg";

function rand(n){
     return(Math.floor(Math.random() * n + 1 ));
    }

	function cambiar(){
            document.getElementById("ia").src = foto[rand(10)-1];
    }

	function aleatorio() {
        var azar = Math.floor(Math.random() * foto.length);
        document.getElementById("ia").src = foto[azar];
    }

	function adelanta(img)
	{
		imagenVisible++;
		if(imagenVisible>=foto.length)
		{
			imagenVisible=-1;
		}
		document.getElementById("ia").src=foto[imagenVisible];
		cargarSiguienteImagen();
	}

	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<foto.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			document.getElementById("ia").src=foto[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
    }
	
	function atras(img)
	{
		imagenVisibleA--;
		if(imagenVisibleA>=foto.length)
		{
			imagenVisibleA=-1;
		}
		document.getElementById("ia").src=foto[imagenVisibleA];
		cargarAnteriorImagen();
	}
 
	function cargarAnteriorImagen()
	{
		if((imagenVisibleA+1)<foto.length)
		{
			
			var imgTmp=new Image();
			document.getElementById("ia").src=foto[imagenVisibleA-1];
		}
	}
 
	window.onload=function() {
		cargarAnteriorImagen();
    }
		
    function prev() {
		if(which>0 ){
			which--;
        document.getElementById("ia").src=foto[which];
		}
		if (document.imagenVisibleA == 1){
			document.getElementById("anterior").disabled;
		}
	}