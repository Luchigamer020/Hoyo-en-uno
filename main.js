// Crea la variable de canvas 
var canvas=new fabric.Canvas('myCanvas');

//Establece las posiciónes para la pelota y el agujero.
ball_x=0;
ball_y=0;
golfhole_x=800;
golfhole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// escribe el código para subir la imagen de golf al canvas
    fabric.Image.fromURL("golf-h.png",function(Img) {
        hole_obj=Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:golfhole_y,
            left:golfhole_x
        });
        canvas.add(hole_obj);
    })
	new_image();
}

function new_image()
{
	// escribe el código para subir la imagen de la pelota al canvas
    fabric.Image.fromURL("ball.png",function(Img) {
        ball_obj=Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/

    if ((ball_x==golfhole_x)&&(ball_y==golfhole_y)) {
        canvas.remove(ball_obj);
        console.log("Lo lograste");
        document.getElementById("hd3").innerHTML="Lo lograste";
        document.getElementById("myCanvas").style.borderColor="red";
    }
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escribe el código para mover la pelota hacia arriba.
        if (ball_y>=5) {
            ball_y=ball_y-block_image_height;
            console.log(block_image_height);
            console.log("Cuando Arriba es presionada, X= "+ball_x+" Y= "+ball_y);
            canvas.remove(ball_obj);
            new_image();
        }
	}

	function down()
	{
		 // Escribe el código para mover la pelota hacia abajo.
         if (ball_y<=450) {
            ball_y=ball_y+block_image_height;
            console.log(block_image_height);
            console.log("Cuando Abajo es presionada, X= "+ball_x+" Y= "+ball_y);
            canvas.remove(ball_obj);
            new_image();
        }
	}

	function left()
	{
		if(ball_x >5)
		{
			// Escribe el código para mover la pelota hacia la izquierda.
            ball_x=ball_x-block_image_height;
            console.log(block_image_height);
            console.log("Cuando Izquierda es presionada, X= "+ball_x+" Y= "+ball_y);
            canvas.remove(ball_obj);
            new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Escribe el código para mover la pelota hacia la derecha.
            ball_x=ball_x+block_image_height;
            console.log(block_image_height);
            console.log("Cuando Derecha es presionada, X= "+ball_x+" Y= "+ball_y);
            canvas.remove(ball_obj);
            new_image();
		}
	}
	
}

