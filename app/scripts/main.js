var svg = d3.select("#viz")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000); 

var originX = 200;
var originY = 200;
var innerCircleRadius = 40;
var outerCircleRadius = 60;   

var centro =  svg.append("circle")
        .style("stroke", "black")
        .style("fill", "white")
        .attr("r", innerCircleRadius)
        .attr("cx", originX)
        .attr("cy", originY);

var fuera = svg.append("circle")
        .style("stroke", "black")
        .style("fill", "none")
        .attr("r", outerCircleRadius)
        .attr("cx", originX)
        .attr("cy", originY);

var circleOriginY = originX + ((outerCircleRadius) * Math.cos(0));
var circleOriginX = originY + ((outerCircleRadius) * Math.sin(0));

var chairWidth = 20;
var chair = svg.append("rect").attr({
    x: circleOriginX - (chairWidth / 2),
    y: circleOriginY - (chairWidth / 2),
    width: chairWidth,
    opacity: 1,
    height: 20,
    fill: "none",
    stroke: "red"
});


var r = 50
var a = Math.sin(0) 
var b = Math.cos(0) 
var c = Math.sin(90) 
var d = Math.cos(90) 
var e = Math.sin(180)
var f = Math.cos(180)
var g = Math.sin(270)
var h = Math.cos(270)

