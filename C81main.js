canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "black"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "orange"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "green"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();









	
