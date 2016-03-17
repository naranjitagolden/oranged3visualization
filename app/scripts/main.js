// espacio svg

var espacio = d3.select('body');
var width = 700,
    height = 600,
    radius = 50;

var espacio = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");   

var dataset = ["data visualization", "naturaleza", "creación estratégica", "identidad", "humanismo", "tecnología"]

var cx1 = 700
var cx2 = 300


//circulo central
 var centro =  espacio.append("circle")
    	.attr("class", "middle-circle")
        .attr("r", 50)
        .attr("cx", 0)
        .attr("cy", 0)
        .on("mouseover", function(){ // when I use .style("fill", "red") here, it works 
               d3.select(this)
                   .style("fill", "url(#image)");
         })
          .on("mouseout", function(){ 
               d3.select(this)
                   .style("fill", "red");
         });

var angle = [];
for (var i = 0; i < dataset.length; i++) {
    var radian = Math.PI * 2 / dataset.length;
    angle.push(radian * i)
}; 

var cx = angle.map(Math.cos)
var cy = angle.map(Math.sin)
var rx = 200
var ry = -200

//circunsferencia
var linea  = espacio.append("circle")
    .attr("class", "around")
    .attr("r", 200)
    .attr("cx", 0)
    .attr("cy", 0);

 var right =  espacio.append("circle")
        .attr("class", "all-circles")
        .attr("r", 40)
        .attr("cx", (cx[0] * rx))
        .attr("cy", (cy[0] * ry));

var another =  espacio.append("circle")
        .attr("class", "all-circles")
        .attr("r", 40)
        .attr("cx" , (cx[1] * rx)) 
        .attr("cy" , (cy[1] * ry));

 var top =  espacio.append("circle")
        .attr("class", "all-circles")
        .attr("r", 40)
        .attr("cx" , (cx[2] * rx)) 
        .attr("cy" , (cy[2] * ry)) ;

var left =  espacio.append("circle")
        .attr("class", "all-circles")
        .attr("r", 40)
        .attr("cx" , (cx[3] * rx)) 
        .attr("cy" , (cy[3] * ry));

var bottom =  espacio.append("circle")
        .attr("class", "all-circles")
        .attr("r", 40)
        .attr("cx" , (cx[4] * rx)) 
        .attr("cy" , (cy[4] * ry));









	
