var sampleSVG = d3.select("#viz")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 500);    

 var circle =    sampleSVG.append("circle")
    	.attr("class", "middle-circle")
        .attr("r", 40)
        .attr("cx", 700)
        .attr("cy", 300);
