var svg = d3.select('svg');

    var dataset = [ 25, 10, 14, 5, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
        //work space Width and height
        var w = 500;
        var h = 100;
        var barPadding = 1;

        //Creando SVG element canvas
        var svg = d3.select("body")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr({
                x: function(d, i) {return i * (w / dataset.length);},
                y: function(d) { return h - (d * 4); }, 
                width: w / dataset.length - barPadding,
                height: function(d){ return d * 4;},
                fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")";}
            });
