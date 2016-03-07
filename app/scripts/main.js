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

var cx = Math.PI / 4

circles.attr("cx", function(d, i) {
    return (i * cx) + 25;
})
        .attr("cy", h/2)
        .attr("r", function(d) {
            return d
        })

