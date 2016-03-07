// Definir espacio de trabajo
var w = 1000
var h = 500

var svg = d3.select("body")
        .append("svg")
        .attr("height", h)
        .attr("width", w);

var dataset = [1, 5, 7, 9, 14];

var circles = svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle");

var angle = 0; 
angle = for (angle < dataset.length; i++)

var increase = Math.PI * 2 / dataset.length
var cx = Math.PI / 5
var cy = Math.sin(angle) * Math.PI * 5

circles.attr("cx", function(d) {
    return Math.PI / 
        .attr("cy", function(d, i){
            return (i * cy) 
        })
        .attr("r", function(d) {
            return d
        })

