////////////////////////////////////////////////////////////// SlopeGraph & Bar Chart



////////////////////////////////////// Helper Functions 



/*
window.onerror = function() {
    location.reload();
}
*/ 





//Change the explanation text
function explanationText(varText, delay, delayStep) {
  d3.select(".expl-text")
  .transition().duration(1000).delay(delay*delayStep)
  .style("opacity",0)
  .call(endall, function() {
  d3.select(".expl-text")
  .html(varText); 
  })
  .transition().duration(1000)
  .style("opacity",1);  
}//explanationText

function runProgressBar(time) { 
  
  d3.selectAll("#progress")
  .style("visibility", "visible");
  
  d3.selectAll(".prgsFront")
  .transition().duration(time).ease("linear").delay(100)
  .attr("width", prgsWidth)
  .call(endall,  function() {
  d3.selectAll("#progress")
  .style("visibility", "hidden");
  d3.selectAll(".prgsFront")
  .attr("width", 0);
  });
  
};

function resetProgressBar() { 
  
  d3.selectAll("#progress")
  .style("visibility", "hidden");
  
  d3.selectAll(".prgsFront")
  .transition().duration(0)
  .attr("width", 0);
  
};

//Set the progress circles white/grey
function setCircleProgress(num) {
  for (i = 0; i <= 2; i++) {
  if (i <= num) d3.select(eval('"#circle_' + i + '"')).style("background","#D3D3D3");
  if (i > num) d3.select(eval('"#circle_' + i + '"')).style("background","white");
  }//for i  
}//setCircleProgress

//Calls a function only after the total transition ends
function endall(transition, callback) { 
  var n = 0; 
  transition 
  .each(function() { ++n; }) 
  .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
}

var hoverType; 


//Show stats when hovering over circle in map
function circleHover(chosen) {

  //var chosen = d;
  
  //Position of call out depends on view

  if (modus == "Dot") {
  d3.select("#callOut")
  .style("top", "70px")
  .style("left", "250px");
  } else {
  d3.select("#callOut")
  .style("top", "570px")
  .style("left", "30px");
  }//else
    d3.select("#divPerpetratorGroup").html('Perpetrator Group: '+ chosen.PerpetratorGroup);
    d3.select("#divCity").html('City: ' + chosen.CITY);
    d3.select("#divDate").html('Date: ' + chosen.DATE);
    d3.select("#divAttackType").html('Attack Type: ' + chosen.AttackType);
    d3.select("#divCountry").html('Country: ' + chosen.COUNTRY);
    d3.select("#divTargetType").html('Target Type: ' + chosen.TargetType);
    d3.select("#divInjuries").html('Injuries: ' + chosen.INJURED);
    d3.select("#divFatalities").html('Fatalities: ' + chosen.FATALITIES);
    //d3.select("#divImgurl").attr("src", chosen.Imgurl);


  
  //Make the callOut visible again
  d3.select("#callOut")
  .style("visibility","visible");

}//circleHover


 //Revert back to default when the mouse moves away from a city
function showAll() {

  //var chosen = d;
  
  if (modus == "Map") {

  cities2020.selectAll(".city_2020")
  .style("fill-opacity", 0.5);

  
  cities2010.selectAll(".city_2010")
  .style("fill-opacity", 0.7);
   

  }

  //Remove visibility of callout in lower left corner
  if (modus == "Map" | modus == "Dot") {
  d3.select("#callOut").style("visibility","hidden");
  }

  
  if (modus == "Slope") {

  //var chosen = d; 

  slopes.selectAll(".slopes")
  .style("opacity", 0.4);

  cities2000.selectAll(".city_2000")
  .style("fill-opacity", 0.5);

  cities1990.selectAll(".city_1990")
  .style("fill-opacity", 0.7);
  
  text2000.selectAll("text")
  .style("opacity", 0)
  .filter(function(d) { return eval("d.rank_pop") < 10;})
  .style("opacity", 0.7);
  
  text2010.selectAll("text")
  .style("opacity", 0)
  .filter(function(d) { return eval("d.rank_pop") < 10;})
  .style("opacity", 0.7);
  }//if
   
  
}//slopeAll 



 //Show only the circles and line for the hovered over city
 function showOne(d) {
  
  //Compare everything with the hovered over city
  var chosen = d;
  var setOpacity = 0;
  
  //Show information of city in small table in the lower left corner
  if (modus == "Map" | modus == "Dot") {

  hoverType = "CITY";
  circleHover(chosen);
  setOpacity = 0.1;
  }//if

  cities2020.selectAll(".city_2020")
        .filter(function (d) { return eval("d.rank_pop") != eval("chosen.rank_pop");})
  .style("fill-opacity", setOpacity);

  
  cities2010.selectAll(".city_2010")
        .filter(function (d) { return eval("d.rank_pop") != eval("chosen.rank_pop");})
  .style("fill-opacity", setOpacity);



  if (modus == "Slope") {

  slopes.selectAll(".slopes")
  .style("opacity", 0)
  //.filter(function(d) {return eval("d.rank_pop" + rVar) == eval("chosen.rank_pop" + rVar);})  // Do I want this?? 
  .filter(function(d) {return eval("d.rank_pop") == eval("chosen.rank_pop");})
  .style("opacity", 0.4);

  cities2000.selectAll(".city_2000")
  .style("fill-opacity", 0.5);

  cities1990.selectAll(".city_1990")
  .style("fill-opacity", 0.7);
  
  text2000.selectAll("text")
  .style("opacity", 0)
  //.filter(function(d) {return eval("d.rank_pop" + rVar) == eval("chosen.rank_pop" + rVar);})
  .filter(function(d) {return eval("d.rank_pop") == eval("chosen.rank_pop");})
  .style("opacity", 0.7);
  
  text2010.selectAll("text")
  .style("opacity", 0)
  //.filter(function(d) {return eval("d.rank_pop" + rVar) == eval("chosen.rank_pop" + rVar);})
  .filter(function(d) {return eval("d.rank_pop") == eval("chosen.rank_pop");})
  .style("opacity", 0.7); 
  }//if

}//showOne


//Mouseover event for the bar chart on the right
function highlight(d) {
  //Compare everything with the hovered over city
  var chosen = d,
  setOpacity = 0;

  //Show information of city in small table in the lower left corner
  if (modus == "Map" | modus == "Dot") {
  hoverType = "COUNTRY";
  circleHover(chosen);
  setOpacity = (modus == "Map" ? 0.1 : 0.2);
  }//if

  cities2020.selectAll(".city_2020")
  .filter(function(d) {return d.CITY != chosen.CITY;})
  .style("fill-opacity", setOpacity);
  
  
  cities2010.selectAll(".city_2010")
  .filter(function(d) {return d.region != chosen.region;})
  .style("fill-opacity", setOpacity);
   
  
  
  if (modus == "Slope") {
  slopes.selectAll(".slopes")
  .style("opacity", 0)
  .filter(function(d) {return d.terrorist == chosen.terrorist;})
  .style("opacity", 0.4);
  
  text2000.selectAll("text")
  .style("opacity", 0)
  .filter(function(d) {return d.terrorist == chosen.terrorist;})
  .style("opacity", 0.7);
  
  text2010.selectAll("text")
  .style("opacity", 0)
  .filter(function(d) {return d.terrorist == chosen.terrorist;})
  .style("opacity", 0.7); 
  };
   


}//highlight  
 


// Set Stepper 
function setStepper() {


// Lines

  
  var stepLines = svg.append("g").attr("class","lineWrapper");
  var boxWidth = 20,
  boxHeight = 38;
  var offsets_1 = document.getElementById('circle_1').getBoundingClientRect();  
  var offsets_2 = document.getElementById('circle_2').getBoundingClientRect();
  //var offsets_2 = document.getElementById('circle_3').getBoundingClientRect();
  //var offsets_2 = document.getElementById('circle_4').getBoundingClientRect();
}//setStepper 




// Order
function order() {
  console.log('order()');
  //Hack to remove all setTimeouts still in play
  //var highestTimeoutId = setTimeout(";");
  //for (var i = 0 ; i < highestTimeoutId ; i++) {
  //clearTimeout(i); 
  //}//for

  if(counter == 0) { introText(); }

  //if(counter == 1) { introduceCities(); }  //initateBarChart() ? 

  //if(counter == 2) { totalAreaMap(); }

  if(counter == 1) { introSlope(); }

  if(counter == 2) {
  rVar = "density"; 
  d3.select("#bombButton").classed("active",true);
  d3.select("#assaultButton").classed("active",false);  
  d3.select("#assassinationButton").classed("active",false);
  //d3.select("#fatalitiesButton").classed("active",false);
  //d3.select("#injuredButton").classed("active",false);  
  //d3.select("#incidentsButton").classed("active",true);
  callSlopeGraph(); }
}//order




d3.select("#clickerFront")      
  .on("click", function(e){
  order();  
  });


d3.select("#clickerBack")      
  .on("click", function(e){
  counter = counter - 1;
  if (counter < 0) counter = 0;
  order();
  });


//Go straight to intro
d3.select("#circle_1")      
  .on("click", function(e){
  counter = 1;
  order();  
  
  });

//Go straight to map view
d3.select("#circle_2")      
  .on("click", function(e){
  counter = 2;
  order();  
  
  });


//Go straight to slope
d3.select("#circle_3")      
  .on("click", function(e){
  counter = 3;
  order();  
  
  });

//Go straight to slopegraph view
d3.select("#circle_4")    
  .on("click", function(e){
  counter = 4;
  order();  
  });


//Buttons 
d3.select("#bombButton")      
  .on("click", function(e){
  //order();
  rVar = "pop";
  totalKilledBarGraph();
  
  if (modus == "Map") {totalKilledMap();};
  if (modus == "Slope") {totalPopulationSlopeGraph();}; 
  //if (modus == "Dot") {totalPopulationDotHisto();};
  });

d3.select("#assaultButton")      
  .on("click", function(e){
  //order();
  rVar = "land";
  totalInjuredBarGraph();

  if (modus == "Map") {totalInjuredMap();};
  if (modus == "Slope") {totalUrbanLandSlopeGraph();};  
  //if (modus == "Dot") {totalLandDotHisto();};
  });

  //When you click the population density button
d3.select("#assassinationButton")      
  .on("click", function(e){
  //order();
  rVar = "density";
  totalIncidentsBarGraph(); 
  
  if (modus == "Map") {totalIncidentsMap();};
  if (modus == "Slope") {totalDensitySlopeGraph();};  
  //if (modus == "Dot") {totalDensityDotHisto();};
  });



//Helper Functions 




///////////////////////////////////////////////////////////// Declare SVG Elements



var width = 1000, height = 710;

var numFormatThree = d3.format(".3f"),
  numFormatTwo = d3.format(".2f"),
  numFormatOne = d3.format(".1f"),
  numFormatSI = d3.format(".2s"),
  numFormatPercent = d3.format(".0%"),
  numFormatCurrency = d3.format("$,");

var progressColor = ["#D1D1D1","#949494"],
  progressClass = ["prgsBehind","prgsFront"],
  prgsWidth = 0.4*1000,
  prgsHeight = 3;

var progressBar = d3.select("#progress").append("svg")
  .attr("width", prgsWidth)
  .attr("height", 3*prgsHeight);

progressBar.selectAll("rect")
  .data([prgsWidth, 0])
  .enter()
  .append("rect")
  .attr("class", function(d,i) {return progressClass[i];})
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", function (d) {return d;})
  .attr("height", prgsHeight)
  .attr("fill", function(d,i) {return progressColor[i];});

var color = d3.scale.category10();

var graticule = d3.geo.graticule();

var counter = 0; 

//var modus = "Map";

//var modus = "Slope";

var projection = d3.geo.mercator()
  .center([31.0461, 34.8516])
  .scale(153)
  .translate([width / 2, height / 1.5]); 

             //.rotate([rotated, 0, 0]); //center on USA because 'murica

var path = d3.geo.path()
  .projection(projection);


//MAP SVG
var svg = d3.select("#chart4").append("svg")
  .attr("width", width)
  .attr("height", height);

//MAP VARIABLE
var cities2010 = svg.append("g");

//TERRORISM VARIABLE
var cities2020 = svg.append("g");

//MAP
var map = svg.append("g");


//Bar Chart ---> SVG2???

var startBarChart = svg.append("g");
var barChart = svg.append("g").attr("class", "barWrappingOuter");
var barWrappingOther = svg.append("g").attr("class", "barWrappingOther"); 



//SLOPE SVG
var svg2 = d3.select("#chart3").append("svg2")
  .attr("width", width)
  .attr("height", height);

//SLOPE VARIABLE
var cities2000 = svg2.append("g");

//SLOPE VARIABLE
var cities1990 = svg2.append("g"); 

//SLOPEGRAPH
var slopeGraph = svg2.append("g").attr("class","slopeGraph");

//SLOPES
var slopes = slopeGraph.append("g"),
  text2000 = slopeGraph.append("g"),
  text2010 = slopeGraph.append("g"),
  slopeTitles = slopeGraph.append("g");


/*
//WORLD MAP DATA SOURCE
d3.json("static/data/israel/world.json", function (world) { 
   map.selectAll('.geo-path')
    .data(topojson.feature(world, world.objects.countries).features)
  .enter().append('path')
  .attr('class', 'geo-path')
  .attr('d', path)
  .attr("visibility", "visible")
  .style("stroke-opacity", 1)
  .style("fill-opacity", 0.5);
  //.style("fill", function(d, i) { return color(d.color = d3.max(countries[i], function(n) { return countries[n].color; }) + 1 | 0); }); 
  });
*/

//CITY DATA
cities2010.selectAll(".city_2010")
    .data(cityData)
    .enter().append("circle")
  .attr("class", "city_2010")
    .attr('id', function (d) { return "id_2010_" + d.rank_pop; })
  .style("fill-opacity", 0)
  .style("fill", "#DA6761")
  .attr("r", 0); 
  //.attr("cx", function (d) { return projection([d.Longitude, d.Latitude])[0]; })
  //.attr("cy", function (d) { return projection([d.Longitude, d.Latitude])[1]; });


//MAP CALL OUT DATA SOURCE
cities2020.selectAll(".city_2020")
    .data(terrorism)
    .enter().append("circle")
  .attr("class", "city_2020")
    .attr('id', function (d) { return "id_2020_" + d.rank_pop; })
  .style("fill-opacity", 0)
  .style("fill", "#DA6761")
  .attr("r", 0)
  .attr("cx", function (d) { return projection([d.Longitude, d.Latitude])[0]; })
  .attr("cy", function (d) { return projection([d.Longitude, d.Latitude])[1]; });






///////////////////////////////////////////////////////////// Intro Text

//Start
introText();
setTimeout(setStepper,300);



function introText() {

  console.log('introText()')
  
  modus = "intro"; 
  
  //De-activate the back button
  d3.select("#clickerBack").classed("inactiveButton",true); 
  d3.select("#clickerBack").classed("activeButton",false);
  //Change text of front button
  d3.select("#clickerFront").html("Start");

  setTimeout(function() {counter = 1;}, 1000);             // Counter = 0 ? 

  //Set the progress circles
  setCircleProgress(0);

  //Reset the progress bar
  resetProgressBar();
  
  /*
  //Remove all elements of startBarChart (if present)
  startBarChart.selectAll("g").remove();
  */

  d3.select("#section")
  .style("opacity",0)
  .style("visibility","hidden");
  
  //Remove the bar chart to the right - if present
  //barChart.selectAll("g").remove();
  //barWrappingOther.selectAll("g").remove();
  
  //Hide call-out
  d3.select("#callOut").style("visibility","hidden");

  
  //Hide the cities - if present
  cities2010.selectAll(".city_2010")
  .on("mouseover", null)
  .on("mouseout", null)
  .transition().duration(1000)
  .attr("r", 0)
  .attr("cx", function(d) {return projection([d.Longitude, d.Latitude])[0];})
  .attr("cy", function(d) {return projection([d.Longitude, d.Latitude])[1];});
  
  cities2000.selectAll(".city_2000")
  .on("mouseover", null)
  .on("mouseout", null)
  .transition().duration(1000)
  .attr("r", 0)
  .attr("cx", function(d) {return projection([d.Longitude, d.Latitude])[0];})
  .attr("cy", function(d) {return projection([d.Longitude, d.Latitude])[1];});

  cities1990.selectAll(".city_1990")
  .on("mouseover", null)
  .on("mouseout", null)
  .transition().duration(1000)
  .attr("r", 0)
  .attr("cx", function(d) {return projection([d.Longitude, d.Latitude])[0];})
  .attr("cy", function(d) {return projection([d.Longitude, d.Latitude])[1];});


  cities2020.selectAll(".city_2020")
  .on("mouseover", null)
  .on("mouseout", null)
  .transition().duration(1000)
  .attr("r", 0)
  .attr("cx", function(d) {return projection([d.Longitude, d.Latitude])[0];})
  .attr("cy", function(d) {return projection([d.Longitude, d.Latitude])[1];});
 

  //Hide the buttons - if present
  d3.select(".btn-group")
  .style("visibility", "hidden");

  //Hide the buttons - if present
  d3.select(".btn-group2")
  .style("visibility", "hidden"); 
  
  /*
  //Increase opacity of the map
  map.selectAll(".geo-path")
  .attr("visibility", "visible")
  .transition().duration(2000)
  .style("stroke-opacity", 1)
  .style("fill-opacity", 0.5);
  */ 
  
  //Start explanation about Terrorist Attacks
  d3.select("#explanation")
  .style("visibility","visible")
  .style("top", 100 + "px")
  .style("left", 375 + "px")
  .style("width", 550 + "px")
  .html("How Terrorism Has Changed Through The Years")
  .transition().duration(1000)
  .style("opacity",1);
  
}//introText




///////////////////////////////////////////////////////////// Initiate Bar Chart 

var barScale = d3.scale.linear();
  
var xAxis = d3.svg.axis()
    .orient("bottom");
  
var yAxis = d3.svg.axis()
    .orient("left")
  .ticks(8);  //Set rough # of ticks
  
var barHeight = 17,
  barChartHeight = 330,
  barTitleText;

var rVar = "pop"; 
//var rVar;

function initiateBarChart() {

  console.log('initiateBarChart()')
 
  
  //Remove all previous elements of the bar chart
  barChart.selectAll("g").remove();
  barWrappingOther.selectAll("g").remove();

  /*
  //Show the buttons
  d3.select(".btn-group2")
  .style("visibility", "visible");
  */ 

  //Show the buttons
  d3.select(".btn-group")
  .style("visibility", "visible"); 
  
  
  //Set the bar chart dimension and location
  barChart.attr("width", 300)
  .attr("height", barChartHeight)
  //.attr("transform","translate(650,220)")
  .attr("transform","translate(-10,200)")
  .style("visibility","visible")
  .style("opacity",0)
  .transition().duration(2000)
  .style("opacity",1);
   
  
  
  barWrappingOther.attr("width", 300)
  .attr("height", 20)
  //.attr("transform","translate(650, " + (220 + barChartHeight) +")")
  .attr("transform","translate(-10, " + (100 + barChartHeight) +")")
  .style("visibility","visible")
  .style("opacity",0)
  .transition().duration(2000)
  .style("opacity",1);
  

  //Create the bar scale for population as the initialization
  barScale
  //.range([0, 200])
  .range([0, 100])
  .domain([0,d3.max(cityData, function(d) {return d.fatalities;})]);
  
  //Set up axes
  xAxis
  .ticks(5)
  .scale(barScale)
  .tickFormat(numFormatSI); 
  
  
  //Create a group for each bar
  var bar = barChart.selectAll("g")
  .data(cityData) 
  .enter().append("g")
  .attr("class", "barWrapper")
  .style("visibility","visible")
  .attr("transform", function(d, i) { return "translate(75," + (20 + (d.rank_pop-1) * (barHeight)) + ")"; })
  .on("mouseover", highlight)
  .on("mouseout", showAll);

  //Create a white bar to give better mousover and mouseout events
  bar.append("rect")
  .attr("class","background")
  .attr("x", -100)
  .attr("width", 300)
  .attr("height", barHeight)
  .style("fill", "white");

  //Already append a few lines for later
  bar.append("line")
  .attr("class", "line-connect")
  .style("stroke-width", 1)
  .attr("stroke", "#858483")
  .style("opacity", 0);
  
  //Create the 2010 reddish bars  

  bar.append("rect")
  .attr("class","city_2010")
  .style("fill","#DA6761")
  .style("fill-opacity", 0.8)
  .attr("width", 0)
  .attr("height", barHeight - 2);

  
  //Append country name 

  bar.append("text")
  .attr("class", "barLabels")
  .attr("x", -10)
  .attr("y", 11)
  .style("text-anchor", "end")
  .style("font-size", 10)
  .style("font-weight", 300)
  .style("fill","#292929")
  .style("font-family", "'Open Sans', sans-serif")
  .text(function(d) { return d.region; });

  
   

  var barTitle = barChart.append("g")
  .append("text")
  .attr("class","barTitle titleTop")
  .style("visibility","visible")
  .attr("transform", "translate(175,5)")
  .style("text-anchor", "middle");
  


//Create the slopegraph based on the dimension selected 
  if (rVar == "pop") {totalKilledBarGraph();};
  if (rVar == "land") {totalInjuredBarGraph();};
  if (rVar == "density") {totalIncidentsBarGraph();}; 
 

}//initiateBarChart



//Update the bar graph to population
function totalKilledBarGraph() {
  console.log('totalKilledBarGraph()')
  rVar = "pop";
  //barTitleText = "Total Fatalities";
  updateBar();  
}//totalPopulationBarGraph


//Update the bar graph to land
function totalInjuredBarGraph() {
  rVar = "land";
  //barTitleText = "Total Injuries";
  updateBar();
}//totalLandBarGraph

//Update the bar graph to density
function totalIncidentsBarGraph() {
  rVar = "density";
  //barTitleText = "Total Incidents";
  updateBar();
}//totalDensityBarGraph
 


//Update the bar graph to the chosen dimension in the buttons
function updateBar() {
  console.log('updateBar()') 

  //barScale.domain([0,d3.max(terrorism, function(d) {return eval("d." + rVar + "FATALITIES");})])
  if (rVar == "pop") {
  barScale.domain([0,d3.max(cityData, function(d) {return eval("d.fatalities");})])
  xAxis.scale(barScale);
  barChart.selectAll(".barWrapper")
  .style("visibility","visible")
  .transition().duration(1000); 
  //.attr("transform", function(d, i) { return "translate(75," + (20 + eval("d.rank_" + rVar + "-1") * barHeight) + ")"; }); 
  barChart.selectAll(".city_2010")
  .transition().duration(1000)
  .attr("width", function(d) {return barScale(eval("d.fatalities"));})
  }

  if (rVar == "land") {
  barScale.domain([0,d3.max(cityData, function(d) {return eval("d.injuries");})])
  xAxis.scale(barScale);
  barChart.selectAll(".barWrapper")
  .style("visibility","visible")
  .transition().duration(1000); 
  //.attr("transform", function(d, i) { return "translate(75," + (20 + eval("d.rank_" + rVar + "-1") * barHeight) + ")"; }); 
  barChart.selectAll(".city_2010")
  .transition().duration(1000)
  .attr("width", function(d) {return barScale(eval("d.injuries"));})
  }

  if (rVar == "density") {
  barScale.domain([0,d3.max(cityData, function(d) {return eval("d.incidents");})])
  xAxis.scale(barScale);
  barChart.selectAll(".barWrapper")
  .style("visibility","visible")
  .transition().duration(1000); 
  //.attr("transform", function(d, i) { return "translate(75," + (20 + eval("d.rank_" + rVar + "-1") * barHeight) + ")"; }); 
  barChart.selectAll(".city_2010")
  .transition().duration(1000)
  .attr("width", function(d) {return barScale(eval("d.incidents"));})
  }

  //Update the x axis

  barWrappingOther.select(".x.axis")
  .transition().duration(1000)
  .call(xAxis);
  
  barChart.selectAll(".barTitle")
  .text(barTitleText);

  
}//updateBar
 




//////////////////////////////////////////////////////////////// Map Viz


/////////////////////////////////////// Introduce Cities

function introduceCities() {

  console.log('introduceCities()')
  
  modus = "introduceCities";
  hoverType = "CITY";
  rVar == "pop";

  var delay = 5000;

  setTimeout(function() {counter = 2;}, 1000);             // Counter = 0 ? 

  //Set the progress circles
  setCircleProgress(1);

  //Reset the progress bar
  resetProgressBar();

  //Start the progress bar
  runProgressBar(delay*5.25);

  //Activate the back button
  d3.select("#clickerBack").classed("activeButton",true);
  d3.select("#clickerBack").classed("inactiveButton",false);
  //Change text of front button
  d3.select("#clickerFront").html("Continue");

  //Remove all elements of startBarChart (if present)
  startBarChart.selectAll("g").remove();

  //Hide call-out
  d3.select("#callOut").style("visibility","hidden");

  d3.select("#section")
  .style("opacity",0)
  .style("visibility","hidden");

  
  //Hide the buttons
  d3.select(".btn-group")
  .style("visibility", "hidden");

  //Hide the buttons
  d3.select(".btn-group2")
  .style("visibility", "hidden");
  
  barChart.selectAll("g").remove();
  barWrappingOther.selectAll("g").remove(); 

  //Remove the two bars - if present
  startBarChart.selectAll("g")
  .transition().duration(1000)
  .style("opacity",0)
  .call(endall, function() {
  startBarChart.selectAll("g")
  .remove();
  });
   


  //Initialize 
  
  rScale
  .domain([d3.min(terrorism, function(d) {return d.FATALITIES;}),d3.max(terrorism, function(d) {return d.FATALITIES;})])
  .range([1,20]);
  
  /*
  //Increase opacity of the map
  map.selectAll(".geo-path")
  .attr("visibility", "visible")
  .transition().duration(1000).delay(500)
  .style("stroke-opacity", 0.5)
  .style("fill-opacity", 0.5);
  */
  
  //5 & Less Fatalities 
  d3.select(".expl-text")
  .style("visibility","visible")
  .transition().duration(1000)
  .style("opacity",0)
  .call(endall, function() {
  d3.select(".expl-text")
  .style("top", 350 + "px")
  .style("left", 400 + "px")
  .style("width", 400 + "px")
  .html("5 & Less Fatalities"); 
  })
  .transition().duration(1000)
  .style("opacity",1);
  
  //Highlight the smallest fatalities
  cities2020.selectAll(".city_2020")
  .filter(function(d) { return d.FATALITIES <= 5;})
  .transition().duration(2000).delay(1000)
  .attr("r", function(d) {return rScale(d.FATALITIES);})
  .style("fill-opacity", 1)
  .transition().duration(1500)
  .style("fill-opacity", 0.25); 


  //Between 5 & 10 Fatalities
  explanationText(varText = "Between 5 & 10 Fatalities", delay = delay, delayStep = 1); 
  
  //Highlight the middle fatalities
  cities2020.selectAll(".city_2020")
  .filter(function(d) { return d.FATALITIES > 5 & d.FATALITIES <= 10;})
  .transition().duration(2000).delay(1*delay)
  .attr("r", function(d) {return rScale(d.FATALITIES);})
  .style("fill-opacity", 1)
  .transition().duration(1500)
  .style("fill-opacity", 0.5);


  //Over 10 Fatalities
  explanationText(varText = "Over 10 Fatalities", delay = delay, delayStep = 2);  
  
  //Highlight the largest fatalities 
  cities2020.selectAll(".city_2020")
  .filter(function(d) { return d.FATALITIES >= 11;})
  .transition().duration(2000).delay(2*delay)
  .attr("r", function(d) {return rScale(d.FATALITIES);})
  .style("fill-opacity", 1)
  .transition().duration(1500)
  .style("fill-opacity", 0.75);


  //Sample Call Out
  explanationText(varText = "Sample Call Out", delay = delay, delayStep = 3); 

  
  cities2020.selectAll(".city_2020")
  .transition().duration(2000).delay(3*delay)
  .style("fill-opacity", function(d) {
  if(d.rank_pop == 50) {return 1;}
  //else {return 0.05;}
  else {return 0.25;}
  });
   

  setTimeout(function() {circleHover($.grep(terrorism, function(d) {return d.rank_pop == 1;})[0])}, 3.25*delay);
  
  explanationText(varText = "Blah Blah Blah Example Number 1", delay = delay, delayStep = 4.25); 

  
  cities2020.selectAll(".city_2020")
  .transition().duration(2000).delay(5.75*delay)
  //.style("fill-opacity", 0.05); 
  .style("fill-opacity", 0.25);
  

  //Make text disappear
  d3.select(".expl-text")
  .transition().duration(1000).delay(delay*5.25)
  .style("opacity",0)
  .call(endall, function() {
  d3.select(".expl-text")
  .style("visibility","hidden");
  
  d3.select("#callOut").style("visibility","hidden");
  });
  

  setTimeout(totalAreaMap, delay*5.25);

}//introduceCities





/////////////////////////////////////// Map Functions


var rScale = d3.scale.sqrt();
var rVar = "pop"; 

function totalAreaMap() {

  console.log('totalAreaMap()')

  setTimeout(function() { counter = 3;}, 1000);

  setCircleProgress(2);

  //Reset the progress bar
  resetProgressBar();

  modus = "Map";

  //Activate the back button
  d3.select("#clickerBack").classed("activeButton",true);
  d3.select("#clickerBack").classed("inactiveButton",false);
  //Activate the front button
  d3.select("#clickerFront").classed("activeButton",true);  
  d3.select("#clickerFront").classed("inactiveButton",false); 
  //Change text of front button
  d3.select("#clickerFront").html("Continue");

  
  //Show the buttons
  //d3.select(".btn-group2")
  //.style("visibility", "visible");

  d3.select(".btn-group")
  .style("visibility", "visible");


  //Remove the two bars - if present
  startBarChart.selectAll("g").remove();

  //Make text & call-out disappear - if present
  d3.select(".expl-text")
  .transition().duration(1000)
  .style("opacity",0)
  .call(endall, function() {
  d3.select(".expl-text")
  .style("visibility","hidden");
  d3.select("#callOut").style("visibility","hidden");

  });
  
  

  //Show the text in the top right corner
  d3.select("#section")
  .style("visibility","visible")
  .transition().duration(1000)
  .style("opacity",1);

  

  /*
  map.selectAll(".geo-path") 
  .attr("visibility", "visible")
  .style("stroke-opacity", 1)
  .style("fill-opacity", 1);
  */

  d3.select("#callOut").style("visibility","visible"); 


  //setTimeout(initiateBarChart(), 1000); 



  if (rVar == "pop") {totalKilledMap();};
  if (rVar == "land") {totalInjuredMap();};
  if (rVar == "density") {totalIncidentsMap();}; 

}//totalAreaMap 


function totalKilledMap() {
  console.log('totalKilledMap()')
    rScale.domain([d3.min(cityData, function (d) { return d.fatalities; }), d3.max(cityData, function (d) { return d.fatalities;})]).range([1,20]);
    rVar = "pop";
  changeMap();
  //d3.select("svg").call(mapZoom);
}//totalPopulationMap



function totalInjuredMap() {
  console.log('totalInjuredMap()')
  rScale.domain([d3.min(cityData, function(d) {return d.injuries;}),d3.max(cityData, function(d) {return d.injuries;})])
    .range([1,20]);
  rVar = "land"
  changeMap();  
}//totalUrbanLandMap


function totalIncidentsMap() {
  console.log('totalIncidentsMap()')
  rScale.domain([d3.min(cityData, function(d) {return d.incidents;}),d3.max(cityData, function(d) {return d.incidents;})])
    .range([1,20]);
  rVar = "density"
  changeMap();  
}//totalUrbanLandMap



//Change the dots on the map
function changeMap() {
  console.log('changeMap()')
  //Plot the sizes of the cities in 2010 in reddish
  cities2010.selectAll(".city_2010")
  .on("mouseover", showOne)
  .on("mouseout", showAll)
  .transition().duration(1500)
        //.attr("r", function (d) {return eval("rScale(d." + rVar + "FATALITIES)");})
        .attr("r", function (d) {
          if (rVar == "pop") { return eval("rScale(d.fatalities)"); }
        if (rVar == "land") { return eval("rScale(d.injuries)"); }
        if (rVar == "density") { return eval("rScale(d.incidents)"); }
        })
      

  .style("fill-opacity", 0.5)
  .attr("cx", function(d) {return projection([d.Longitude, d.Latitude])[0];})    ////// Add these to cityData set? 
  .attr("cy", function(d) {return projection([d.Longitude, d.Latitude])[1];});


}//changeMap





///////////////////////////////////////////////////////////////////////// Slopegraph Viz


var svg = d3.select("#chart3").append("svg")
  .attr("width", width)
  .attr("height", height);

var cities2000 = svg.append("g");
var cities1990 = svg.append("g");

var slopeGraph = svg.append("g").attr("class","slopeGraph");

var slopes = slopeGraph.append("g"),
  text2000 = slopeGraph.append("g"),
  text2010 = slopeGraph.append("g"),
  slopeTitles = slopeGraph.append("g");

//SLOPE DATA
cities1990.selectAll(".city_1990")
  .data(slopeData)
  .enter().append("circle")
  .attr("class", "city_1990")
  .attr('id', function(d){ return "id_1990_" + d.rank_pop; })
  .style("fill-opacity", 0)
  .style("fill","#858483")
  .attr("r", 0);


//SLOPE DATA
cities2000.selectAll(".city_2000")
  .data(slopeData)
  .enter().append("circle")
  .attr("class", "city_2000")
  .attr('id', function(d){ return "id_2000_" + d.rank_pop; })
  .style("fill-opacity", 0)
  .style("fill","#858483")
  .attr("r", 0);


////////////////////////////////////////// SlopeGraph Chart Pt. I 

//introSlope();
//setTimeout(setStepper,300);

function introSlope() {
  console.log('introSlope()'); 
  
  setTimeout(function() {counter = 2;}, 1000);

  setCircleProgress(1);

  resetProgressBar();

  var delay = 5000;

  //Start the progress bar
  runProgressBar(delay*4.75);

  //Remove the text & button on the right
  d3.select("#section")
  .transition().duration(500)
  .style("opacity",0)
  .call(endall, function() {
  d3.select("#section")
  .style("visibility","hidden");
  });

  /*
  //Remove the bar chart to the right - if present
  barChart.selectAll("g")
  .transition().duration(500)
  .style("opacity",0)
  .call(endall, function() {
  barChart.selectAll("g")
  .remove();
  });
  */ 

  /*
  barWrappingOther.selectAll("g")
  .transition().duration(500)
  .style("opacity",0)
  .call(endall, function() {
  barWrappingOther.selectAll("g")
  .remove();
  });
  */ 

  /*
  map.selectAll("g").remove();
  */

  
  cities2020.selectAll(".city_2020").remove();
  cities2010.selectAll(".city_2010").remove(); 


  //Create slopegraph
  setTimeout(function () {rVar = "pop"; initiateSlopeGraph();}, delay*0.1);
  rVar = "pop"; 
  d3.select("#bombButton").classed("active",true);
  d3.select("#assaultButton").classed("active",false);
  d3.select("#assassinationButton").classed("active",false);
  //d3.select("#fatalitiesButton").classed("active",true);
  //d3.select("#injuredButton").classed("active",false);
  //d3.select("#incidentsButton").classed("active",false);

  d3.select(".expl-text")
  .style("visibility","visible")
  .transition().duration(1000)
  .style("opacity",0)
  .call(endall, function() {
  d3.select(".expl-text")
  //.style("top", 300 + "px")
  //.style("left", 600 + "px")
  .style("top", -100 + "px")
  .style("left", 650 + "px")
  .style("width", 350 + "px")
  .html("<p>The accompanying slope chart shows absolute changes in Bombings & Explosions between decades. </p>"); 
  })
  .transition().duration(1000)
  .style("opacity",1);
  
  //Deactivate the mouse over events
  setTimeout(function() {setMouseSlope("remove");}, (delay*0.25));

  explanationText(varText = "Each line represents a unique terrorist organization's pattern for destruction", delay = delay, delayStep = 1.5);

  explanationText(varText = "Now let's take a look at Armed Assault as a chosen attack type.", delay = delay, delayStep =2.3); 

  //Change name to ANOTHER TERRORIST ORGANIZATION 
  setTimeout(totalDensitySlopeGraph, delay*2.6);

  //Deactivate the mouse over events
  setTimeout(function() {
  setMouseSlope("remove"); 
  
  //totalIncidentsBarGraph();
  d3.select("#bombButton").classed("active",false);
  d3.select("#assaultButton").classed("active",true);
  d3.select("#assassinationButton").classed("active",false);
  //d3.select("#fatalitiesButton").classed("active",false);
  //d3.select("#injuredButton").classed("active",false);  
  //d3.select("#incidentsButton").classed("active",true);
  
  }, (delay*2.4));


  //setTimeout(function() {oneCountrySlope("Palestinians", delay)},(delay*3.25))
  setTimeout(function() {oneCountrySlope("Palestinians", delay)},(delay*2.9))
  explanationText(varText = "<p>Specifically amongst Palestinians Extremists, the trend for Armed Assault as a type of attack has dropped signifcantly. </p>", 
    delay = delay, delayStep = 3.2);

  //explanationText(varText = "Go ahead and play around.", delay = delay, delayStep =2.9); 



  //Make text disappear
  d3.select(".expl-text")
  .transition().duration(1000).delay(delay*4.75)
  .style("opacity",0)
  .call(endall, function() {
  d3.select(".expl-text")
  .style("visibility","hidden");
  });


  
  setTimeout(function() {
  counter = 2;
  //Show the buttons
  //d3.select(".btn-group2")
  //.style("visibility", "visible");
  d3.select(".btn-group")
  .style("visibility", "visible");
  //Set the progress circles
  setCircleProgress(1);
  //Set mouse over again
  setMouseSlope("initiate");
  //Draw full slopegraph again
  //totalDensitySlopeGraph();
  totalPopulationSlopeGraph()
  //Show bar chart again
  //initiateBarChart();
  }, delay*4.8);
  //}, delay*3.8);
   




}//introSlope




//Activate or deactivate the mouse events
function setMouseSlope(setting) {
  console.log('setMouseSlope()');
  
  var overSlope = (setting == "remove" ? null : showOne);
  var outSlope = (setting == "remove" ? null : showAll);
  
  cities2000.selectAll(".city_2000")
  .on("mouseover", overSlope)
  .on("mouseout", outSlope);
  
  
  cities1990.selectAll(".city_1990")
  .on("mouseover", overSlope)
  .on("mouseout", outSlope);
   
  
  slopes.selectAll(".slopes")
  .on("mouseover", overSlope)
  .on("mouseout", outSlope);
  
  text2000.selectAll("text")
  .on("mouseover", overSlope)
  .on("mouseout", outSlope);
  
  
  text2010.selectAll("text")
  .on("mouseover", overSlope)
  .on("mouseout", outSlope);
  

}//setMouseSlope


function oneCountrySlope(terrorist, delay) {
  //Show one specific country
  cities2000.selectAll(".city_2000")
  .transition().duration(1000)
  .style("fill-opacity", function(d) {
  if (d.terrorist != terrorist) return 0;});
  
  
  cities1990.selectAll(".city_1990")
  .transition().duration(1000)
  .style("fill-opacity", function(d) {
  if (d.terrorist != terrorist) return 0;});
   
  
  slopes.selectAll(".slopes")
  .transition().duration(1000)
  .style("opacity", function(d) {
  if (d.terrorist != terrorist) return 0;
  else return 0.4;});
  
  text2000.selectAll("text")
  .transition().duration(1000)
  .style("opacity", function(d) {
  if (d.terrorist != terrorist) return 0;
  else return 0.7;});
  
  
  text2010.selectAll("text")
  .transition().duration(1000)
  .style("opacity", function(d) {
  if (d.terrorist != terrorist) return 0;
  else return 0.7;});
  
  
}//oneCountrySlope



////////////// Slope Graph Pt. II


//Default initial
var slopeTitle, firstSlope;

//Initiate the scale for the vertical invisible lines of the slopegraph
var slopeScale = d3.scale.linear().range([620,120]);
//var slopeScale = d3.scale.linear().range([750,150]);

//Location of the 2000 and 2010 vertical "lines"
var xAxisLoc2000 = 200,
  xAxisLoc2010 = xAxisLoc2000 + 200;


function callSlopeGraph() {
  console.log('callSlopeGraph()');

  //Change visual modus to slope  
  modus = "Slope";
  
  setTimeout(function() {counter = 3;}, 1000);

  setCircleProgress(2);

  resetProgressBar();

  //Activate the back button
  d3.select("#clickerBack").classed("activeButton",true);
  d3.select("#clickerBack").classed("inactiveButton",false);
  //Activate the front button
  d3.select("#clickerFront").classed("activeButton",true);  
  d3.select("#clickerFront").classed("inactiveButton",false); 
  //Change text of front button
  d3.select("#clickerFront").html("Continue");

  /*
  //Remove the two bars - if present
  startBarChart.selectAll("g").remove();
  */

  //Show the buttons
  //d3.select(".btn-group2")
  //.style("visibility", "visible");

  //Show the buttons
  d3.select(".btn-group")
  .style("visibility", "visible");

  //Make text & call-out disappear - if present
  d3.select(".expl-text")
  .transition().duration(1000)
  .style("opacity",0)
  .call(endall, function() {
  d3.select(".expl-text")
  .style("visibility","hidden");
  });

  
  //Show the text & button on the right
  d3.select("#section")
  .transition().delay(100)
  .style("opacity",0)
  .call(endall, function() {
  d3.select("#section")
  .style("visibility","visible"); 
  //Change title in top right corner
  d3.select("#sectionTitle")
  .style("opacity",1)
  .html('');
  //Change text in top right corner
  d3.select("#sectionText")
  .html('');  
  })
  .transition().duration(1000)
  .style("opacity",1);
   

  /*
  //Remove map
  map.selectAll(".geo-path")
  .transition().duration(2000)
  .style("stroke-opacity", 0)
  .style("fill-opacity", 0)
  .call(endall,  function() {
  map.selectAll(".geo-path")
  .attr("visibility", "hidden");  
  });
  */

  //Show bar chart again
  initiateBarChart();

  //Show the buttons
  //d3.select(".btn-group2")
  //.style("visibility", "visible");

  d3.select(".btn-group")
  .style("visibility", "visible");

  //Call slopegraph
  setTimeout(initiateSlopeGraph, 1100);

  //Hide call-out
  d3.select("#callOut").style("visibility","hidden");

}//callSlopeGraph 


//Function to show the slopegraph 
function initiateSlopeGraph() {
  console.log('initiateSlopeGraph()');

  /*
  //Remove map
  map.selectAll(".geo-path")
  .transition().duration(2000)
  .style("stroke-opacity", 0)
  .style("fill-opacity", 0)
  .call(endall,  function() {
  map.selectAll(".geo-path")
  .attr("visibility", "hidden");  
  });
  */ 

  //Change visual modus to slope  
  modus = "Slope";

  //Adds a small delay of the slope lines when drawn from the map modus
  firstSlope = true;



  //setTimeout(initiateBarChart(), 1000); 

  //Show the buttons
  //d3.select(".btn-group2")
  //.style("visibility", "visible");

  d3.select(".btn-group")
  .style("visibility", "visible"); 


  //Make all elements visible again 
  d3.selectAll(".slopeGraph")
  .attr("visibility", "visible")
  .transition().duration(1000)
  .style("opacity", 1);

  //Remove previous slope elements
  slopes.selectAll(".slopes").remove();
  text2000.selectAll("text").remove();
  text2010.selectAll("text").remove();
  slopeTitles.selectAll("text").remove();

  //Initialize

  //Initiate the lines for the slopegraph
  slopes.selectAll(".slopes")
  .data(slopeData)
  .enter().append("line")
  .attr("class", "slopes")
  .style("stroke-width", 1)
  .attr("stroke", "#858483")
  .on("mouseover", showOne)
  .on("mouseout", showAll)
  .style("opacity", 0);

  //Initiate the text for 2000 datapoints
  text2000.selectAll("text")
  .data(slopeData)
  .enter().append("text")
  .attr("class", "text2000")
  .style("text-anchor","end")
  .attr("font-size", 10)
  .attr("dy", ".4em")
  .style("cursor","default")
  .on("mouseover", showOne)
  .on("mouseout", showAll)
  .style("opacity", 0);

  
  //Initiate the text for 2010 datapoints
  text2010.selectAll("text")
  .data(slopeData)
  .enter().append("text")
  .attr("class", "text2010")
  .style("text-anchor","start")
  .attr("font-size", 10)
  .attr("dy", ".3em")
  .style("cursor","default")
  .on("mouseover", showOne)
  .on("mouseout", showAll)
  .style("opacity", 0);


  //2000 above left axis  
  slopeTitles.append("text")
  .attr("class","title titleTop city_2010")
  .attr("x", xAxisLoc2000)
  //.attr("y", slopeScale.range()[1] - 40)
  .attr("y", slopeScale.range()[1] - 10)
  .style("text-anchor", "middle")
  .text("1978 - 1998")
  .style("opacity", 0)
  .attr("visibility", "visible")
  .transition().duration(1000)
  .style("opacity", 1);

  //2010 above right axis
  slopeTitles.append("text")
  .attr("class","title titleTop")
  .attr("x", xAxisLoc2010)
  //.attr("y", slopeScale.range()[1] - 40)
  .attr("y", slopeScale.range()[1] - 10) 
  .style("text-anchor", "middle")
  .style("fill", "#DA6761")
  .text("1998 - 2018")
  .style("opacity", 0)
  .attr("visibility", "visible")
  .transition().duration(1000)
  .style("opacity", 1);



  if (rVar == "density") {totalDensitySlopeGraph();}; // Bombing
  if (rVar == "pop") {totalPopulationSlopeGraph();};  // Assassination
  if (rVar == "land") {totalUrbanLandSlopeGraph();};  // Hijacking

}//initiateSlopeGraph


//Move circles to show Density between 2000 and 2010      // Bombing
function totalDensitySlopeGraph() {
  console.log('totalDensitySlopeGraph()');                   
  rVar = "density";
  slopeTitle = "Urban population density [in 1000 persons/sq. km]";
  changeSlope();
}//totalDensitySlopeGraph


//Move circles to show Population between 2000 and 2010    // Assassination
function totalPopulationSlopeGraph() {
  console.log('totalPopulationSlopeGraph()'); 
  rVar = "pop";
  slopeTitle = "Urban population [in millions]";
  changeSlope();
}//totalPopulationSlopeGraph

//Move circles to show Land between 2000 and 2010         // Hijacking 
function totalUrbanLandSlopeGraph() {
  console.log('totalUrbanSlopeGraph()');
  rVar = "land";
  slopeTitle = "Urban land [in sq. km.]";
  changeSlope();
}//totalUrbanLandSlopeGraph



//Actual function that sets the positions, lines and text of the slopgraph elements
function changeSlope() {
  console.log('changeSlope()');

  //rVar == "pop"; 

  var dur = (firstSlope == true ? 2000 : 2000);
  var delaySlope = (firstSlope == true ? 500 : 0);
  
  //Create domains of the scale
  //slopeScale.domain([d3.min(slopeData, function(d) {return eval("d." + rVar + "_2000");}),d3.max(slopeData, function(d) {return eval("d." + rVar + "_2010");})]);
  slopeScale.domain([d3.min(slopeData, function(d) {return d.bombing_2000; }), d3.max(slopeData, function(d) { return d.bombing_2010;})]); 

  //Move city circles of 2000 to left axis
  cities2000.selectAll(".city_2000")
  .transition().duration(dur)
  .style("fill-opacity", 0.8)
  .attr("r", 3)
  .attr("cx", xAxisLoc2000)
  //.attr("cy", function(d){return slopeScale(eval("d." + rVar + "_2000"));});
  .attr("cy", function (d) {
          if (rVar == "pop") { return slopeScale(d.bombing_2000);}
          if (rVar == "land") { return slopeScale(d.assault_2000);}
          if (rVar == "density") { return slopeScale(d.assassination_2000);}
        });
  
  //Move city circles of 2010 to right axis
  cities1990.selectAll(".city_1990")
  .transition().duration(dur)
  .style("fill","#DA6761")
  .style("fill-opacity", 0.8)
  .attr("r", 3)
  .attr("cx", xAxisLoc2010)
  //.attr("cy", function(d){return slopeScale(eval("d." + rVar + "_2010"));});
  .attr("cy", function (d) {
          if (rVar == "pop") { return slopeScale(d.bombing_2010);}
          if (rVar == "land") { return slopeScale(d.assault_2010);}
          if (rVar == "density") { return slopeScale(d.assassination_2010);}
        });
  
  //Draw the lines between the points
  slopes.selectAll(".slopes")
  .transition().duration(dur/2).delay(delaySlope)
  .style("opacity", 0)
  .call(endall, function () {
  slopes.selectAll(".slopes")
  .attr("x1", xAxisLoc2000)
  .attr("x2", xAxisLoc2010)
  //.attr("y1",function(d){return slopeScale(eval("d." + rVar + "_2000"));})
  .attr("y1",function(d){
        if (rVar == "pop") { return slopeScale(d.bombing_2000);}
        if (rVar == "land") { return slopeScale(d.assault_2000);}
        if (rVar == "density") { return slopeScale(d.assassination_2000);}
        })
  //.attr("y2",function(d){return slopeScale(eval("d." + rVar + "_2010"));})
  .attr("y2",function(d){
        if (rVar == "pop") { return slopeScale(d.bombing_2010);}
        if (rVar == "land") { return slopeScale(d.assault_2010);}
        if (rVar == "density") { return slopeScale(d.assassination_2010);}
        })
  .transition().duration(dur)
  .style("opacity", 0.4)
  });
  
  
  text2000.selectAll("text")
  .transition().duration(dur/2) 
  .style("opacity", 0)
  .call(endall,  function() {
  text2000.selectAll("text")
  .attr("x", xAxisLoc2000 - 10) 
  //.attr("y", function(d){return slopeScale(eval("d." + rVar + "_2000"));})
  .attr("y", function(d){
        if (rVar == "pop") { return slopeScale(d.bombing_2000);}
        if (rVar == "land") { return slopeScale(d.assault_2000);}
        if (rVar == "density") { return slopeScale(d.assassination_2000);}
        })

  .text(function(d) {
  if (rVar == "pop") {
  //if (d.pop_2000 > 1e6) {return d.city + ", " + d.country + " | " + numFormatOne(d.pop_2000/1e6);} 
  //else {return d.city + ", " + d.country + " | " + numFormatTwo(d.pop_2000/1e6);}
  return (d.terrorist);}
  if (rVar == "land") {
  //return d.city + ", " + d.country + " | " + d.land_2000;
  return (d.terrorist);}
  if (rVar == "density") {
  //return d.city + ", " + d.country + " | " + numFormatTwo(d.density_2000/1e3);
  return (d.terrorist);} 
  
  })  
  //.filter(function(d) { return eval("d.rank_" + rVar + " < 10");})
  .filter(function(d) { return (d.rank_pop < 10);})
  .transition().duration(dur/2)  
  .style("opacity", 0.7)
  });
  
  text2010.selectAll("text")
  .transition().duration(dur/2) 
  .style("opacity", 0)
  .call(endall,  function() {
  text2010.selectAll("text")
  .attr("x", xAxisLoc2010 + 10) 
  //.attr("y", function(d){return slopeScale(eval("d." + rVar + "_2010"));})
  .attr("y", function(d){
        if (rVar == "pop") { return slopeScale(d.bombing_2010);}
        if (rVar == "land") { return slopeScale(d.assault_2010);}
        if (rVar == "density") { return slopeScale(d.assassination_2010);}
        })

  .text(function(d) {
  if (rVar == "pop") {
  //if (d.pop_2010 > 1e6) {return d.city + ", " + d.country + " | " + numFormatOne(d.pop_2010/1e6);} 
  //else {return d.city + ", " + d.country + " | " + numFormatTwo(d.pop_2010/1e6);}
  return (d.terrorist);}
  if (rVar == "land") {
  //return d.city + ", " + d.country + " | " + d.land_2010;
  return (d.terrorist);}
  if (rVar == "density") {
  //return d.city + ", " + d.country + " | " + numFormatTwo(d.density_2010/1e3);
  return (d.terrorist);} 
  
  })
  //.filter(function(d) { return eval("d.rank_" + rVar + " < 10");})
  .filter(function(d) { return (d.rank_pop < 10);})
  .transition().duration(dur/2) 
  .style("opacity", 0.7)
  });
  

  
  slopeGraph.selectAll(".top")
  .text(slopeTitle);

  firstSlope = false;
}//changeSlope









/*

d3.select("#clicker")      
  .on("click", function(e){
  //order();
  introduceCities();
  });


d3.select("#skip")      
  .on("click", function(e){
  //order();
  initiateBarChart();
  });


d3.select("#fatalitiesButton")      
  .on("click", function(e){
  //order();
  totalKilledBarGraph();
  });

d3.select("#injuredButton")      
  .on("click", function(e){
  //order();
  totalInjuredBarGraph();
  });

d3.select("#incidentsButton")      
  .on("click", function(e){
  //order();
  totalIncidentsBarGraph();
  });

*/ 


 


/*
var mapZoom = d3.behavior.zoom()
  .translate(projection.translate())
  .scale(projection.scale())
  .on("zoom", zoomed);


//d3.select("svg").call(mapZoom);


function zoomed() {
  projection.translate(mapZoom.translate()).scale(mapZoom.scale());

  //d3.selectAll("path.graticule").attr("d", path);
  d3.selectAll("path.geo-path").attr("d", path);

  d3.selectAll("circle.city_2010")
  .attr("cx", function (d) { return projection([d.longitude, d.latitude])[0]; })
  .attr("cy", function (d) { return projection([d.longitude, d.latitude])[1]; });

}; 

*/