// espacio svg
var espacio = d3.select("#viz")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 500)    

//circulo central
 var centro =  espacio.append("circle")
    	.attr("class", "middle-circle")
        .attr("r", 40)
        .attr("cx", 700)
        .attr("cy", 300);

//circunsferencia
var linea  = espacio.append("circle")
	.attr("class", "around")
	.attr("r", 200)
	.attr("cx", 700)
	.attr("cy", 300);
	
