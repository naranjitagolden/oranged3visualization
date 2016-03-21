var w = 700,
    h = 600;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

var dataset = [ "tecnología", "identidad", "humanismo", "naturaleza", "creación Audiovisual", "hola", "estoy perdido"];

//circulo central
var centro = svg.append("circle")
    .attr("class", "middle-circle")
    .attr("r", 50)
    .attr("cx", 0)
    .attr("cy", 0)
    .on("mouseover", function() { // when I use .style("fill", "red") here, it works 
        d3.select(this)
            .style("fill", "url(#image)");
    })
    .on("mouseout", function() {
        d3.select(this)
            .style("fill", "red");
    });

// //circunsferencia
// var linea = svg.append("circle")
//     .attr("class", "around")
//     .attr("r", 200)
//     .attr("cx", 0)
//     .attr("cy", 0);

var rar = Math.PI * 2 / dataset.length;

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
    var angle = i * rar;
    return Math.cos(angle) * 200;
    })

    .attr("cy", function(d, i) {
        var angle = i * rar;
        return Math.sin(angle) * -200;
    })
    .attr("r", 50)
    .attr("fill", "orange")
    .attr("stroke", "white")
    .attr("stroke-width", "5px");

    svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")

    .text(function(d) {
        return d;
    })
    .attr("class", "text")
    .attr("x", function(d, i) {
    var angle = i * rar;
    return (Math.cos(angle) * 200) - 60;
    })
    .attr("y", function(d, i) {
        var angle = i * rar;
        return (Math.sin(angle) * -200) + 70;
    });










