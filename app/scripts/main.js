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

for (var i = 0; i < dataset.length; i++) {
    var angle = (Math.PI * 2 / dataset.length) * i;
}; 

var cx = angle.map(Math.cos)
var cy = angle.map(Math.sin)
var rx = 200
var ry = -200



 // var circles =  svg.selectAll("circle")
 //        .dataset(dataset)
 //        .enter()
 //        .append("circle");
 //        .attr("cx", function(d, i) {
 //            return ()
 //        })
 //        .attr("r", 40)
 //        .attr("cx", (cx[0] * rx))
 //        .attr("cy", (cy[0] * ry));











	
