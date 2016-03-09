// espacio svg
var espacio = d3.select("#viz")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 500)    

var dataset = ["data visualization", "nuevo ruralismo", "diseño", "identidad"]

var cx = 700
var cy = 300
//circulo central
 var centro =  espacio.append("circle")
    	.attr("class", "middle-circle")
        .attr("r", 40)
        .attr("cx", cx)
        .attr("cy", cy);

var angle = [];
for (var i = 0; i < dataset.length; i++) {
    var radian = Math.PI * 2 / dataset.length;
    angle.push(radian * i)
} 



//circunsferencia
var linea  = espacio.append("circle")
	.attr("class", "around")
	.attr("r", 200)
	.attr("cx", 700)
	.attr("cy", 300);



	
