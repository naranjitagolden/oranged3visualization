// espacio svg


var espacio = d3.select('body');
var width = 960,
    height = 500,
    radius = 50;

var espacio = d3.select("body")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 500)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")") ;   

var dataset = ["data visualization", "naturaleza", "creación estratégica", "identidad"]

var cx1 = 700
var cx2 = 300


//circulo central
 var centro =  espacio.append("circle")
    	.attr("class", "middle-circle")
        .attr("r", 40)
        .attr("cx", 0)
        .attr("cy", 0);

var angle = [];
for (var i = 0; i < dataset.length; i++) {
    var radian = Math.PI * 2 / dataset.length;
    angle.push(radian * i)
} 

var cx = angle.map(Math.cos)
var cy = angle.map(Math.sin)

 var right =  espacio.append("circle")
        .attr("class", "right-circle")
        .attr("r", 40)
        .attr("transform", "translate(" + cx[0] + "," + cy[0] + ")") ;

 var up =  espacio.append("circle")
        .attr("class", "top-circle")
        .attr("r", 40)
        .attr("transform", "translate(" + cx[1] + "," + cy[1] + ")") ;


//circunsferencia
var linea  = espacio.append("circle")
	.attr("class", "around")
	.attr("r", 200)
	.attr("cx", 0)
	.attr("cy", 0);






	
