// svg

var width = 700,
    height = 600,
    radius = 50;

var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");   

var dataset = ["data visualization", "naturaleza", "creación estratégica", "identidad", "humanismo", "tecnología"]

var cx1 = 700
var cx2 = 300


//circulo central
 var centro =  svg.append("circle")
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

//circunsferencia
var linea  = svg.append("circle")
    .attr("class", "around")
    .attr("r", 200)
    .attr("cx", 0)
    .attr("cy", 0);


var rad = Math.PI * 2 / dataset.length
angle = rad * i
cx = rad * Math.cos(angle)
cy = rad * Math.sin(angle)
a = d.map()



var rx = 200
var ry = -200

var circles =  svg.selectAll("circle")
        .dataset(dataset)
        .enter()
        .append("circle")

circles.attr("r", 40)
       .attr("cx", function(d, i) {
            return 
       })











	
