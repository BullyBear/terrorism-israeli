/////////////////////////////////////////////////////     STREAM GRAPH JS   



chart("static/data/israel/streamGraphDataNew.csv", "orange"); 

var datearray = [];
var colorrange = [];


function chart(csvpath, color) {


if (color == "blue") {
  colorrange = ["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB", "#D0D1E6", "#F1EEF6"];
}
else if (color == "pink") {
  colorrange = ["#980043", "#DD1C77", "#DF65B0", "#C994C7", "#D4B9DA", "#F1EEF6"];
}
else if (color == "orange") {
  colorrange = ["#B30000", "#E34A33", "#FC8D59", "#FDBB84", "#FDD49E", "#FEF0D9"];
}
strokecolor = colorrange[0]; 

var format = d3.time.format("%Y");

//var width = document.body.clientWidth - margin.left - margin.right;
//var height = 400 - margin.top - margin.bottom;
var margin = {top: 20, right: 40, bottom: 30, left: 30};
var width = 960;
var height = 400;


var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height-10, 0]);

var z = d3.scale.ordinal()
    .range(colorrange);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(d3.time.weeks);

var yAxis = d3.svg.axis()
    .scale(y);

var yAxisr = d3.svg.axis()
    .scale(y);

var stack = d3.layout.stack()
    .offset("silhouette")
    .values(function(d) { return d.values; })
    .x(function(d) { return d.DATE; })
    .y(function(d) { return d.INCIDENTS; });

var nest = d3.nest()
    .key(function(d) { return d.TERRORIST; });

var area = d3.svg.area()
    .interpolate("cardinal")
    .x(function(d) { return x(d.DATE); })
    .y0(function(d) { return y(d.y0); })
    .y1(function(d) { return y(d.y0 + d.y); });

var svg = d3.select(".chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var graph = d3.csv(csvpath, function(data) {
  data.forEach(function(d) {
    d.DATE = format.parse(d.DATE);
    //d.DATE = d.DATE; 
    d.INCIDENTS = +d.INCIDENTS;
  });

  var layers = stack(nest.entries(data));

  x.domain(d3.extent(data, function(d) { return d.DATE; }));
  y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);

  svg.selectAll(".layer")
      .data(layers)
      .enter().append("path")
      .attr("class", "layer")
      .attr("d", function(d) { return area(d.values); })
      .style("fill", function(d, i) { return z(i); });

   
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ", 0)")
      .call(yAxis.orient("right")); 



    svg.append("text")
          .attr("id", "label")
          .attr("y", 200)
          .attr("x", -30)
          .attr("dy", ".35em")
          .text("2000");

    svg.append("line")
          .attr("id", "line")
          .attr("x1", -5)
          .attr("y1", 185)
          .attr("x2", -5)
          .attr("y2", 210)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("text")
          .attr("id", "label2")
          .attr("y", 150)
          .attr("x", 500)
          .attr("dy", ".35em")
          .text("2009");

    svg.append("line")
          .attr("id", "line2")
          .attr("x1", 510)
          .attr("y1", 160)
          .attr("x2", 510)
          .attr("y2", 190)
          .attr("stroke-width", 1)
          .attr("stroke", "black");
    
    svg.append("text")
          .attr("id", "label3")
          .attr("y", 150)
          .attr("x", 600)
          .attr("dy", ".35em")
          .text("2011");

    svg.append("line")
          .attr("id", "line3")
          .attr("x1", 610)
          .attr("y1", 160)
          .attr("x2", 610)
          .attr("y2", 190)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    // Title
    svg.append("text")
          .attr("id", "title")
          .attr("y", 0)
          .attr("x", 400)
          .attr("dy", ".35em")
          .style("font-size", "12px")
          .text("Total Terrorist Incidents: 2000 - 2017");

    // Legend
    svg.append("text")
          .attr("id", "legend1")
          .attr("y", 420)
          .attr("x", 30)
          .attr("dy", ".35em")
          .text("Al-Aqsa Martyrs Brigade");

    svg.append("text")
          .attr("id", "legend2")
          .attr("y", 420)
          .attr("x", 210)
          .attr("dy", ".35em")
          .text("Hamas");

    svg.append("text")
          .attr("id", "legend3")
          .attr("y", 420)
          .attr("x", 355)
          .attr("dy", ".35em")
          .text("Hezbollah");

    svg.append("text")
          .attr("id", "legend4")
          .attr("y", 420)
          .attr("x", 480)
          .attr("dy", ".35em")
          .text("Palestinian Extremists");

    svg.append("text")
          .attr("id", "legend5")
          .attr("y", 420)
          .attr("x", 625)
          .attr("dy", ".35em")
          .text("Palestinian Islamic Jihad");

    svg.append("text")
          .attr("id", "legend6")
          .attr("y", 420)
          .attr("x", 750)
          .attr("dy", ".35em")
          .text("Popular Front for the Liberation of Palestine");

    svg.append("rect")
          .attr("x", 75)
          .attr("y", 400)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(179, 0, 0)" );

    svg.append("rect")
          .attr("x", 220)
          .attr("y", 400)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(227, 74, 51)" );

    svg.append("rect")
          .attr("x", 370)
          .attr("y", 400)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(252, 141, 89)" );

    svg.append("rect")
          .attr("x", 525)
          .attr("y", 400)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(253, 187, 132)" );

    svg.append("rect")
          .attr("x", 670)
          .attr("y", 400)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(253, 212, 158)" );

    svg.append("rect")
          .attr("x", 825)
          .attr("y", 400)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(254, 240, 217)" );




});
}



