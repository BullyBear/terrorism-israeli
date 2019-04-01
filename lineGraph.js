////////////////////////////////////   LINE GRAPH JS    

totalIncidentsLineGraph();
totalFatalitiesLineGraph();
totalInjuriesLineGraph(); 

//totalIncidents 
function totalIncidentsLineGraph() {

modus = "incidents"; 


var margin = {top: 80, right: 80, bottom: 80, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom; 

/*
var svg = d3.select("#svg").append("svg")
              .attr("width", width)
              .attr("height", height);
*/

var svg = d3.select("#svg").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var incidentsData = svg.append("g"); 

incidentsData.selectAll(".incidentsData")
                .data(incidentData)
                .enter()
                .append('incidentsData')
                .attr('class', 'incidentsData')
                .attr('id', function(d) { return d.country, d.date, d.incidents});
                //.on("mouseover", showOne)
                //.on("mouseout", showAll); 
                //.attr('id', function (d) { return "id_2010_" + d.rank_pop; })

//var legend = svg.append("g");

d3.select(".legendLine").style("visibility", "visible"); 

 

//var parse = d3.time.format("%b %Y").parse;
var parse = d3.time.format("%Y").parse; 

// Scales and axes. Note the inverted domain for the y-scale: bigger is up!
var x = d3.time.scale().range([0, width]),
    y = d3.scale.linear().range([height, 0]),
    xAxis = d3.svg.axis().scale(x).tickSize(-height).tickSubdivide(true),
    yAxis = d3.svg.axis().scale(y).ticks(4).orient("right");

// An area generator, for the light fill.
var area = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.incidents); }); 

// A line generator, for the dark stroke.
var line = d3.svg.line()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.incidents); });


// Parse dates and numbers. We assume israel are sorted by date.
function type(d) {
  d.country = d.country;
  d.date = parse(d.date);
  d.incidents = +d.incidents
  return d;
};



var data = d3.csv("static/data/israel/incidents_linechart.csv", type, function(error, data) {
    console.log(data);

  var israel = data.filter(function(d) {
    return d.country == "Israel";
  });

  var unitedStates = data.filter(function(d) {
    return d.country == "United States";
  });

  var iran = data.filter(function(d) {
    return d.country == "Iran";
  });

  var saudiArabia = data.filter(function(d) {
    return d.country == "Saudi Arabia";
  });

  var turkey = data.filter(function(d) {
    return d.country == "Turkey";
  });

  var egypt = data.filter(function(d) {
    return d.country == "Egypt";
  });

  var syria = data.filter(function(d) {
    return d.country == "Syria";
  });

  var lebanon = data.filter(function(d) {
    return d.country == "Lebanon";
  });

  var jordan = data.filter(function(d) {
    return d.country == "Jordan";
  });

  var palestine = data.filter(function(d) {
    return d.country == "Palestine";
  });

  x.domain([unitedStates[0].date, unitedStates[unitedStates.length - 1].date]);
  y.domain([0, d3.max(egypt, function(d) { return d.incidents; })]).nice();

  //x.domain([israel[0].date, israel[israel.length - 1].date]);
  //y.domain([0, d3.max(israel, function(d) { return d.incidents; })]).nice();

  // Add an SVG element with the desired dimensions and margin.
  /*
  var svg = d3.select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  */ 

  // Add the clip path.
  svg.append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

  // Add the x-axis.
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

  // Title
  svg.append("text")
          .attr("id", "titleLine")
          .attr("y", -50)
          .attr("x", 275)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .text("Total Incidents Amongst Countries: 1970 - 2017"); 

  svg.append("text")
          .attr("id", "legendIsrael")
          .attr("y", 5)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Israel");

  svg.append("text")
          .attr("id", "legendUnitedStates")
          .attr("y", 20)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("United States");

  svg.append("text")
          .attr("id", "legendIran")
          .attr("y", 35)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Iran");

  svg.append("text")
          .attr("id", "legendSaudiArabia")
          .attr("y", 50)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Saudi Arabia");

  svg.append("text")
          .attr("id", "legendTurkey")
          .attr("y", 65)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Turkey");

  svg.append("text")
          .attr("id", "legendEgypt")
          .attr("y", 80)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Egypt");

  svg.append("text")
          .attr("id", "legendSyria")
          .attr("y", 95)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Syria");

  svg.append("text")
          .attr("id", "legendLebanon")
          .attr("y", 110)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Lebanon");

  svg.append("text")
          .attr("id", "legendJordan")
          .attr("y", 125)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Jordan");

  svg.append("text")
          .attr("id", "legendPalestine")
          .attr("y", 140)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Palestine");

  svg.append("rect")
          .attr("x", 600)
          .attr("y", 0)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(31, 119, 180)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 15)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(255, 127, 14)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 30)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(44, 160, 44)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 45)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(214, 39, 40)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 60)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(148, 103, 189)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 75)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(140, 86, 75)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 90)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(227, 119, 194)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 105)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(127, 127, 127)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 120)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(188, 189, 34)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 135)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(23, 190, 207)" );


var colors = d3.scale.category10();

  svg.selectAll('.line')
    .data([israel, unitedStates, iran, saudiArabia, turkey, egypt, syria, lebanon, jordan, palestine]) 
    .enter()
      .append('path')
        .attr('class', 'line')
        .style('stroke', function(d) {
          return colors(Math.random() * 50);
        })
        .attr('clip-path', 'url(#clip)')
        .attr('d', function(d) {
          return line(d);
        })
      .on("mouseover", showOne)
      .on("mouseout", showAll); 



  var curtain = svg.append('rect')
    .attr('x', -1 * width)
    .attr('y', -1 * height)
    .attr('height', height)
    .attr('width', width)
    .attr('class', 'curtain')
    .attr('transform', 'rotate(180)')
    .style('fill', '#ffffff')


  var guideline = svg.append('line')
    .attr('stroke', '#333')
    .attr('stroke-width', 0)
    .attr('class', 'guide')
    .attr('x1', 1)
    .attr('y1', 1)
    .attr('x2', 1)
    .attr('y2', height)


  var t = svg.transition()
    .delay(750)
    .duration(6000)
    .ease('linear')
    .each('end', function() {
      d3.select('line.guide')
        .transition()
        .style('opacity', 0)
        .remove()
    });

  t.select('rect.curtain')
    .attr('width', 0);
  t.select('line.guide')
    .attr('transform', 'translate(' + width + ', 0)')

  d3.select("#show_guideline").on("change", function(e) {
    guideline.attr('stroke-width', this.checked ? 1 : 0);
    curtain.attr("opacity", this.checked ? 0.75 : 1);
  })



});

}; 




//totalFatalities
function totalFatalitiesLineGraph() {

modus = "fatalities";


var margin = {top: 80, right: 80, bottom: 80, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


/*
var svg = d3.select("#svg2").append("svg2")
              .attr("width", width)
              .attr("height", height);
*/

var svg = d3.select("#svg2").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



var fatalitiesData = svg.append("g");

fatalitiesData.selectAll(".fatalitiesData")
                .data(fatalityData)
                .enter()
                .append('fatalitiesData')
                .attr('class', 'fatalitiesData');
                //.on("mouseover", showOne)
                //.on("mouseout", showAll); 
                //.attr('id', function (d) { return "id_2010_" + d.rank_pop; })

d3.select(".legendLine").style("visibility", "visible"); 

//var parse = d3.time.format("%b %Y").parse;
var parse = d3.time.format("%Y").parse; 

// Scales and axes. Note the inverted domain for the y-scale: bigger is up!
var x = d3.time.scale().range([0, width]),
    y = d3.scale.linear().range([height, 0]),
    xAxis = d3.svg.axis().scale(x).tickSize(-height).tickSubdivide(true),
    yAxis = d3.svg.axis().scale(y).ticks(4).orient("right");

// An area generator, for the light fill.
var area = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.fatalities); }); 

// A line generator, for the dark stroke.
var line = d3.svg.line()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.fatalities); });


// Parse dates and numbers. We assume israel are sorted by date.
function type(d) {
  d.country = d.country;
  d.date = parse(d.date);
  d.fatalities = +d.fatalities
  return d;
};



var data = d3.csv("static/data/israel/fatalities_linechart.csv", type, function(error, data) {
    console.log(data);

  var israel = data.filter(function(d) {
    return d.country == "Israel";
  });

  var unitedStates = data.filter(function(d) {
    return d.country == "United States";
  });

  var iran = data.filter(function(d) {
    return d.country == "Iran";
  });

  var saudiArabia = data.filter(function(d) {
    return d.country == "Saudi Arabia";
  });

  var turkey = data.filter(function(d) {
    return d.country == "Turkey";
  });

  var egypt = data.filter(function(d) {
    return d.country == "Egypt";
  });

  var syria = data.filter(function(d) {
    return d.country == "Syria";
  });

  var lebanon = data.filter(function(d) {
    return d.country == "Lebanon";
  });

  var jordan = data.filter(function(d) {
    return d.country == "Jordan";
  });

  var palestine = data.filter(function(d) {
    return d.country == "Palestine";
  });

  x.domain([unitedStates[0].date, unitedStates[unitedStates.length - 1].date]);
  y.domain([0, d3.max(syria, function(d) { return d.fatalities; })]).nice(); 

  //x.domain([israel[0].date, israel[israel.length - 1].date]);
  //y.domain([0, d3.max(israel, function(d) { return d.incidents; })]).nice();

  // Add an SVG element with the desired dimensions and margin.
  /*
  var svg = d3.select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  */

  // Add the clip path.
  svg.append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

  // Add the x-axis.
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

   // Title
  svg.append("text")
          .attr("id", "titleLine")
          .attr("y", -50)
          .attr("x", 250)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .text("Total Fatalities Amongst Countries: 1970 - 2017");

  svg.append("text")
          .attr("id", "legendIsrael")
          .attr("y", 5)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Israel");

  svg.append("text")
          .attr("id", "legendUnitedStates")
          .attr("y", 20)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("United States");

  svg.append("text")
          .attr("id", "legendIran")
          .attr("y", 35)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Iran");

  svg.append("text")
          .attr("id", "legendSaudiArabia")
          .attr("y", 50)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Saudi Arabia");

  svg.append("text")
          .attr("id", "legendTurkey")
          .attr("y", 65)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Turkey");

  svg.append("text")
          .attr("id", "legendEgypt")
          .attr("y", 80)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Egypt");

  svg.append("text")
          .attr("id", "legendSyria")
          .attr("y", 95)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Syria");

  svg.append("text")
          .attr("id", "legendLebanon")
          .attr("y", 110)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Lebanon");

  svg.append("text")
          .attr("id", "legendJordan")
          .attr("y", 125)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Jordan");

  svg.append("text")
          .attr("id", "legendPalestine")
          .attr("y", 140)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Palestine");

  svg.append("rect")
          .attr("x", 600)
          .attr("y", 0)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(31, 119, 180)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 15)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(255, 127, 14)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 30)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(44, 160, 44)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 45)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(214, 39, 40)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 60)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(148, 103, 189)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 75)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(140, 86, 75)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 90)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(227, 119, 194)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 105)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(127, 127, 127)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 120)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(188, 189, 34)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 135)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(23, 190, 207)" );



  var colors = d3.scale.category10();

  svg.selectAll('.line')
    .data([israel, unitedStates, iran, saudiArabia, turkey, egypt, syria, lebanon, jordan, palestine]) /// can add however many i want here 
    .enter()
      .append('path')
        .attr('class', 'line')
        .style('stroke', function(d) {
          return colors(Math.random() * 50);
        })
        .attr('clip-path', 'url(#clip)')
        .attr('d', function(d) {
          return line(d);
        })
      .on("mouseover", showOne)
      .on("mouseout", showAll); 


  var curtain = svg.append('rect')
    .attr('x', -1 * width)
    .attr('y', -1 * height)
    .attr('height', height)
    .attr('width', width)
    .attr('class', 'curtain')
    .attr('transform', 'rotate(180)')
    .style('fill', '#ffffff')


  var guideline = svg.append('line')
    .attr('stroke', '#333')
    .attr('stroke-width', 0)
    .attr('class', 'guide')
    .attr('x1', 1)
    .attr('y1', 1)
    .attr('x2', 1)
    .attr('y2', height)


  var t = svg.transition()
    .delay(750)
    .duration(6000)
    .ease('linear')
    .each('end', function() {
      d3.select('line.guide')
        .transition()
        .style('opacity', 0)
        .remove()
    });

  t.select('rect.curtain')
    .attr('width', 0);
  t.select('line.guide')
    .attr('transform', 'translate(' + width + ', 0)')

  d3.select("#show_guideline").on("change", function(e) {
    guideline.attr('stroke-width', this.checked ? 1 : 0);
    curtain.attr("opacity", this.checked ? 0.75 : 1);
  })



});

}; 



//totalInjures
function totalInjuriesLineGraph() {

modus = "injuries"; 


var margin = {top: 80, right: 80, bottom: 80, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/*
var svg = d3.select("#svg3").append("svg3")
              .attr("width", width)
              .attr("height", height); 
*/

var svg = d3.select("#svg3").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")") 


var injuriesData = svg.append("g"); 

injuriesData.selectAll(".injuriesData")
                .data(injuryData) 
                .enter()
                .append('injuriesData')
                .attr('class', 'injuriesData');
                //.on("mouseover", showOne)
                //.on("mouseout", showAll); 
                //.attr('id', function (d) { return "id_2010_" + d.rank_pop; })

d3.select(".legendLine").style("visibility", "visible"); 


//var parse = d3.time.format("%b %Y").parse;
var parse = d3.time.format("%Y").parse; 

// Scales and axes. Note the inverted domain for the y-scale: bigger is up!
var x = d3.time.scale().range([0, width]),
    y = d3.scale.linear().range([height, 0]),
    xAxis = d3.svg.axis().scale(x).tickSize(-height).tickSubdivide(true),
    yAxis = d3.svg.axis().scale(y).ticks(4).orient("right");

// An area generator, for the light fill.
var area = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.injuries); }); 

// A line generator, for the dark stroke.

var line = d3.svg.line()
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.injuries); });


// Parse dates and numbers. We assume israel are sorted by date.
function type(d) {
  d.country = d.country;
  d.date = parse(d.date);
  d.injuries = +d.injuries
  return d;
};



var data = d3.csv("static/data/israel/injuries_linechart.csv", type, function(error, data) {
    console.log(data);

  var israel = data.filter(function(d) {
    return d.country == "Israel";
  });

  var unitedStates = data.filter(function(d) {
    return d.country == "United States";
  });

  var iran = data.filter(function(d) {
    return d.country == "Iran";
  });

  var saudiArabia = data.filter(function(d) {
    return d.country == "Saudi Arabia";
  });

  var turkey = data.filter(function(d) {
    return d.country == "Turkey";
  });

  var egypt = data.filter(function(d) {
    return d.country == "Egypt";
  });

  var syria = data.filter(function(d) {
    return d.country == "Syria";
  });

  var lebanon = data.filter(function(d) {
    return d.country == "Lebanon";
  });

  var jordan = data.filter(function(d) {
    return d.country == "Jordan";
  });

  var palestine = data.filter(function(d) {
    return d.country == "Palestine";
  });

  x.domain([unitedStates[0].date, unitedStates[unitedStates.length - 1].date]);
  y.domain([0, d3.max(unitedStates, function(d) { return d.injuries; })]).nice(); 

  //x.domain([israel[0].date, israel[israel.length - 1].date]);
  //y.domain([0, d3.max(israel, function(d) { return d.incidents; })]).nice();


  // Add an SVG element with the desired dimensions and margin.
  /*
  var svg = d3.select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  */ 
 

  // Add the clip path.
  svg.append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

  // Add the x-axis.
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);

   // Title
  svg.append("text")
          .attr("id", "titleLine")
          .attr("y", -50)
          .attr("x", 250)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .text("Total Injuries Amongst Countries: 1970 - 2017"); 

  svg.append("text")
          .attr("id", "legendIsrael")
          .attr("y", 5)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Israel");

  svg.append("text")
          .attr("id", "legendUnitedStates")
          .attr("y", 20)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("United States");

  svg.append("text")
          .attr("id", "legendIran")
          .attr("y", 35)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Iran");

  svg.append("text")
          .attr("id", "legendSaudiArabia")
          .attr("y", 50)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Saudi Arabia");

  svg.append("text")
          .attr("id", "legendTurkey")
          .attr("y", 65)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Turkey");

  svg.append("text")
          .attr("id", "legendEgypt")
          .attr("y", 80)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Egypt");

  svg.append("text")
          .attr("id", "legendSyria")
          .attr("y", 95)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Syria");

  svg.append("text")
          .attr("id", "legendLebanon")
          .attr("y", 110)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Lebanon");

  svg.append("text")
          .attr("id", "legendJordan")
          .attr("y", 125)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Jordan");

  svg.append("text")
          .attr("id", "legendPalestine")
          .attr("y", 140)
          .attr("x", 615)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .text("Palestine");

  svg.append("rect")
          .attr("x", 600)
          .attr("y", 0)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(31, 119, 180)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 15)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(255, 127, 14)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 30)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(44, 160, 44)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 45)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(214, 39, 40)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 60)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(148, 103, 189)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 75)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(140, 86, 75)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 90)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(227, 119, 194)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 105)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(127, 127, 127)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 120)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(188, 189, 34)" );

    svg.append("rect")
          .attr("x", 600)
          .attr("y", 135)
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", "rgb(23, 190, 207)" );






  var colors = d3.scale.category10();

  svg.selectAll('.line')
    .data([israel, unitedStates, iran, saudiArabia, turkey, egypt, syria, lebanon, jordan, palestine]) /// can add however many i want here 
    .enter()
      .append('path')
        .attr('class', 'line')
        .style('stroke', function(d) {
          return colors(Math.random() * 50);
        })
        .attr('clip-path', 'url(#clip)')
        .attr('d', function(d) {
          return line(d);
        })
      .on("mouseover", showOne)
      .on("mouseout", showAll); 



  var curtain = svg.append('rect')
    .attr('x', -1 * width)
    .attr('y', -1 * height)
    .attr('height', height)
    .attr('width', width)
    .attr('class', 'curtain')
    .attr('transform', 'rotate(180)')
    .style('fill', '#ffffff')


  var guideline = svg.append('line')
    .attr('stroke', '#333')
    .attr('stroke-width', 0)
    .attr('class', 'guide')
    .attr('x1', 1)
    .attr('y1', 1)
    .attr('x2', 1)
    .attr('y2', height)


  var t = svg.transition()
    .delay(750)
    .duration(6000)
    .ease('linear')
    .each('end', function() {
      d3.select('line.guide')
        .transition()
        .style('opacity', 0)
        .remove()
    });

  t.select('rect.curtain')
    .attr('width', 0);
  t.select('line.guide')
    .attr('transform', 'translate(' + width + ', 0)')

  d3.select("#show_guideline").on("change", function(e) {
    guideline.attr('stroke-width', this.checked ? 1 : 0);
    curtain.attr("opacity", this.checked ? 0.75 : 1);
  })



});

}; 


function clear() {

  //d3.selectAll("svg > *").remove();
  //d3.selectAll("#svg > *").remove();

  //d3.select("#svg > *").remove();
  //d3.select("#svg2 > *").remove();
  //d3.select("#svg3 > *").remove();

  d3.select("#svg > *").style("visibility", "hidden");
  d3.select("#svg2 > *").style("visibility", "hidden");
  d3.select("#svg3 > *").style("visibility", "hidden");

  //d3.selectAll("#callOut > *").remove();
  //d3.select("#callOut1.5").style("visibility", "hidden");
  //d3.select("#callOut2").style("visibility", "hidden");
  //d3.select("#callOut3").style("visibility", "hidden");
  //d3.select(".legendLine").style("visibility", "hidden");

};


function clear1() {


  //d3.select("#svg > *").style("visibility", "hidden");
  d3.select("#svg2").style('display', 'none');
  d3.select("#svg3").style('display', 'none');
  d3.select("#svg").style('display', 'block');


};

function clear2() {
  d3.select("#svg").style('display', 'none');
  d3.select("#svg3").style('display', 'none');
  d3.select("#svg2").style('display', 'block');
};

function clear3() {

 d3.select("#svg").style('display', 'none');
  d3.select("#svg2").style('display', 'none');
  d3.select("#svg3").style('display', 'block');

};




function circleHover(chosen) {

  if (modus == "incidents") {

    d3.select("#callOut1.5")
      .style("top", "570px")
      .style("left", "30px"); 
   
   
    d3.select("#divCountry1.5").html('Country: ' + chosen.country);
    d3.select("#divDate1.5").html('Date: ' + chosen.date);
    d3.select("#divIncidents1.5").html('Incidents: ' + chosen.incidents);

    
    d3.select("#callOut1.5")
    .style("visibility","visible");

  }

  if (modus == "fatalities") {

    d3.select("#callOut2")
      .style("top", "570px")
      .style("left", "30px");  

    d3.select("#divCountry2").html('Country: ' + chosen.country);
    d3.select("#divDate2").html('Date: ' + chosen.date);
    d3.select("#divFatalities2").html('Fatalities: ' + chosen.fatalities);

    d3.select("#callOut2")
    .style("visibility","visible");

  }

  if (modus == "injuries") {

    d3.select("#callOut3")
      .style("top", "570px")
      .style("left", "30px"); 

    d3.select("#divCountry3").html('Country: ' + chosen.country);
    d3.select("#divDate3").html('Date: ' + chosen.date);
    d3.select("#divInjuries3").html('Injuries: ' + chosen.injuries);

    d3.select("#callOut3")
    .style("visibility","visible");

  }

}; 




function showOne(d) {

  var chosen = d;
  var setOpacity = 0;


  var margin = {top: 80, right: 80, bottom: 80, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


  var svg = d3.select("#svg").append("svg")
              .attr("width", width)
              .attr("height", height);



  if (modus == "incidents") {
      circleHover(chosen);
      setOpacity = 0.1;
  

  var incidentsData = svg.append("g"); 

  incidentsData.selectAll(".incidentsData")
                .data(incidentData)
                .enter()
                //.data([israel, unitedStates, iran, saudiArabia, turkey, egypt, syria, lebanon, jordan, palestine]) 
                //.enter()
                .append('incidentsData')
                .attr('class', 'incidentsData')

  incidentsData.selectAll(".incidentsData")
    .filter(function (d) { return eval("d.country") != eval("chosen.country");})
    .style("fill-opacity", setOpacity);

}

  if (modus == "fatalities") {
      circleHover(chosen);
      setOpacity = 0.1;


  var fatalitiesData = svg.append("g");

  fatalitiesData.selectAll(".fatalitiesData")
                .data(fatalityData)
                .enter()
                .append('fatalitiesData')
                .attr('class', 'fatalitiesData');

  fatalitiesData.selectAll(".fatalitiesData")
    .filter(function (d) { return eval("d.country") != eval("chosen.country");})
    .style("fill-opacity", setOpacity);
}

  if (modus == "injuries") {
      circleHover(chosen);
      setOpacity = 0.1;



  var injuriesData = svg.append("g"); 

  injuriesData.selectAll(".injuriesData")
                .data(injuryData) 
                .enter()
                .append('injuriesData')
                .attr('class', 'injuriesData'); 

  injuriesData.selectAll(".injuriesData")
    .filter(function (d) { return eval("d.country") != eval("chosen.country");})
    .style("fill-opacity", setOpacity);
}

}; 



function showAll() {


  var margin = {top: 80, right: 80, bottom: 80, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


  var svg = d3.select("#svg").append("svg")
              .attr("width", width)
              .attr("height", height);

  var incidentsData = svg.append("g"); 

  incidentsData.selectAll(".incidentsData")
                .data(incidentData)
                .enter()
                .append('incidentsData')
                .attr('class', 'incidentsData');

  var fatalitiesData = svg.append("g");

  fatalitiesData.selectAll(".fatalitiesData")
                .data(fatalityData)
                .enter()
                .append('fatalitiesData')
                .attr('class', 'fatalitiesData');

  var injuriesData = svg.append("g"); 

  injuriesData.selectAll(".injuriesData")
                .data(injuryData) 
                .enter()
                .append('injuriesData')
                .attr('class', 'injuriesData');
  
  if (modus == "incidents") {
    
  incidentsData.selectAll(".incidentsData")
    .style("fill-opacity", 0.5);

  d3.select("#callOut1.5").style("visibility","hidden");

  }

  if (modus == "fatalities") {
    
  fatalitiesData.selectAll(".fatalitiesData")
    .style("fill-opacity", 0.5);

  d3.select("#callOut2").style("visibility","hidden");


  }

  if (modus == "injuries") {
    
  injuriesData.selectAll(".injuriesData")
    .style("fill-opacity", 0.5);

  d3.select("#callOut3").style("visibility","hidden");


  }
  

}; 




d3.select("#incidentsButton1")      
  .on("click", function(e){
  //order();
  clear1();

  });

d3.select("#fatalitiesButton1")      
  .on("click", function(e){
  //order();
  clear2();

  });

d3.select("#injuriesButton1")      
  .on("click", function(e){
  //order();
  clear3();

  });

 
