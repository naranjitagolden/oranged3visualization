// espacio svg
var espacio = d3.select("#viz")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 500)    

var dataset = ["data visualization", "nuevo ruralismo", "diseño", "identidad"]

var cx1 = 700
var cx2 = 300


//circulo central
 var centro =  espacio.append("circle")
    	.attr("class", "middle-circle")
        .attr("r", 40)
        .attr("cx", cx1)
        .attr("cy", cx2);

var angle = [];
for (var i = 0; i < dataset.length; i++) {
    var radian = Math.PI * 2 / dataset.length;
    angle.push(radian * i)
} 

var cx2 = angle.map(Math.cos)
var cy2 = angle.map(Math.sin)

 var right =  espacio.append("circle")
        .attr("class", "right-circle")
        .attr("r", 40)
        .attr("cx1", cx1)
        .attr("cx2", cx2)
        .attr("cx", cx2[0])
        .attr("cy", cy2[0]);


//circunsferencia
var linea  = espacio.append("circle")
	.attr("class", "around")
	.attr("r", 200)
	.attr("cx", 700)
	.attr("cy", 300);






	
