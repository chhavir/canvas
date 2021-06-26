canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color= "navy";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 4 ;
ctx.arc(100,100, 30 , 0, 2*Math.PI);
ctx.stroke();

color= "black";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 4 ;
ctx.arc(190,100, 30 , 0, 2*Math.PI);
ctx.stroke();

color= "crimson";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 4 ;
ctx.arc(280,100, 30 , 0, 2*Math.PI);
ctx.stroke();

color= "yellow";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 4 ;
ctx.arc(145,126, 30 , 0, 2*Math.PI);
ctx.stroke();

color= "olivedrab";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 4 ;
ctx.arc(235,126, 30 , 0, 2*Math.PI);
ctx.stroke();

