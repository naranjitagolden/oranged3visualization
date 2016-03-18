
var w = 700,
    h = 600;

var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");   

var dataset = [5, 10, 15, 20, 25];

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

var circles =  svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle");

circles.attr("cx", function(d, i){
        return (i * 50) + 10;
       })
       .attr("cy", h/3)
       .attr("r", function(d) {
        return d; 

       });











	
