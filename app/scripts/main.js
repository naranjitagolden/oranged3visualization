var width = 640,
    height = 300;

var x = d3.scale.linear()
    .domain([-1, 1])
    .range([-120, 120]);

var y = d3.scale.linear()
    .domain([1, -1])
    .range([120, -120]);

var d2r = Math.PI / 180;

var line = d3.svg.line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); })

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + 320 + "," + 150 + ")");

var circle = svg.append("circle")
    .attr('class', 'circ')
    .attr("r", 120);

var tri = svg.append("path")
    .attr('class', 'tri')
    .datum([
        [0, 0],
        [1, 0],
        [1, 0],
        [0, 0]])
    .attr('d', line);

svg.append("circle")
    .attr('class', 'center')
    .attr("r", 2);


d3.select('body').on('mousemove', function() {
    var a = Math.atan2(
        d3.event.y - 150,
        d3.event.x - 320)

    tri
        .datum([
            [0, 0],
            [Math.cos(a), 0],
            [Math.cos(a), Math.sin(a)],
            [0, 0]])
        .attr('d', line);
})


/*// espacio svg

var w = 1000;
var h = 500;

var x = d3.scale.linear()
        .domain([-1, 1])
        .range([-120, 120]);

var y = d3.scale.linear()
        .domain([1, -1])
        .range([120, -120]);

var d2r = Math.PI / 180;

var svg = d3.select(".svg")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", "translate(" + 320 - " , " + 150 + ")"); 

//base de datos

var dataset = [ 0, 1, 2, 3, 4, 5]   

//circulo central
 var centro =  espacio.append("circle")
    	.attr("class", "middle-circle")
        .attr("r", 40)
        .attr("cx", 700)
        .attr("cy", 300);

//circunsferencia
var linea  = svg.append("circle")
	.attr("class", "around")
	.attr("r", 200)
    attr("r", 120);

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
    return i * dataset.length;
})












	
*/