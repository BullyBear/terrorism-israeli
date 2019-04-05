

///////////////////////////////// Missle Arc Viz




var widthFirework = 960,
    heightFirework = 500,
    colorFirework = d3.scale.category20b();
    rand = d3.random.normal(widthFirework/2,100),
    randomX = function(b){ return d3.random.normal(b, 80)()},
    randomY = d3.random.normal(heightFirework/2, 80);


var clientWidth = document.documentElement.clientWidth;
var firework = d3.select("#firework").append("svg")
                        .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                        .attr("width", clientWidth )
                        .attr("height", 500);

var dataFirework = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework = firework.selectAll("circle").data(dataFirework).enter()
                        .append("circle");


var firework2 = d3.select("#firework2").append("svg")
                          .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                          .attr("width", clientWidth )
                          .attr("height", 500);

var dataFirework2 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework2 = firework2.selectAll("circle").data(dataFirework2).enter()
                        .append("circle");


var firework3 = d3.select("#firework3").append("svg")
                          .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                          .attr("width", clientWidth )
                          .attr("height", 500);

var dataFirework3 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework3 = firework3.selectAll("circle").data(dataFirework3).enter()
                        .append("circle");


var firework4 = d3.select("#firework4").append("svg")
                      .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                      .attr("width", clientWidth )
                      .attr("height", 500);

var dataFirework4 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework4 = firework4.selectAll("circle").data(dataFirework4).enter()
                        .append("circle");

var firework5 = d3.select("#firework5").append("svg")
                        .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                        .attr("width", clientWidth )
                        .attr("height", 500);

var dataFirework5 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework5 = firework5.selectAll("circle").data(dataFirework5).enter()
                        .append("circle");

var firework6 = d3.select("#firework6").append("svg")
                      .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                      .attr("width", clientWidth )
                      .attr("height", 500);

var dataFirework6 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework6 = firework6.selectAll("circle").data(dataFirework6).enter()
                        .append("circle");

var firework7 = d3.select("#firework7").append("svg")
                        .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                        .attr("width", clientWidth )
                        .attr("height", 500);

var dataFirework7 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework7 = firework7.selectAll("circle").data(dataFirework7).enter()
                        .append("circle");

var firework8 = d3.select("#firework8").append("svg")
                        .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                        .attr("width", clientWidth )
                        .attr("height", 500);

var dataFirework8 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework8 = firework8.selectAll("circle").data(dataFirework8).enter()
                        .append("circle");

var firework9 = d3.select("#firework9").append("svg")
                      .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                      .attr("width", clientWidth )
                      .attr("height", 500);

var dataFirework9 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework9 = firework9.selectAll("circle").data(dataFirework9).enter()
                        .append("circle");

var firework10 = d3.select("#firework10").append("svg")
                        .attr("viewBox", "0 0 " + widthFirework + " " + heightFirework)
                        .attr("width", clientWidth )
                        .attr("height", 500);

var dataFirework10 = d3.range(100).map(function() { return {x: 950, y: -200}; });


var circlesFirework10 = firework10.selectAll("circle").data(dataFirework10).enter()
                        .append("circle");




function fireworks(){
            var base = rand();
            dataFirework = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework.data(dataFirework)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(4200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }



//setInterval(function() { fireworks(); }, 4000);





function fireworksTwo(){
            var base = rand();
            dataFirework2 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework2.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework2.data(dataFirework2)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(8200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksTwo();



function fireworksThree(){
            var base = rand();
            dataFirework3 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework3.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework3.data(dataFirework3)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(12200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksThree();



function fireworksFour(){
            var base = rand();
            dataFirework4 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework4.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework4.data(dataFirework4)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(16200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksFour();



function fireworksFive(){
            var base = rand();
            dataFirework5 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework5.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework5.data(dataFirework5)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(20200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksFive();



function fireworksSix(){
            var base = rand();
            dataFirework6 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework6.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework6.data(dataFirework6)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(24200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksSix();



function fireworksSeven(){
            var base = rand();
            dataFirework7 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework7.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework7.data(dataFirework7)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(28200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksSeven();



function fireworksEight(){
            var base = rand();
            dataFirework8 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework8.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework8.data(dataFirework8)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(32200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksEight();



function fireworksNine(){
            var base = rand();
            dataFirework9 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework9.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework9.data(dataFirework9)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(36200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksNine();



function fireworksTen(){
            var base = rand();
            dataFirework10 = d3.range(100).map(function() { return {x: 950, y: -200}; });
            circlesFirework10.transition().ease('circle').duration(1500).attr("cy", function(d){ return d.y; })

            circlesFirework10.data(dataFirework10)
                .attr("opacity",1)
                //.attr({r:1,cx:base,cy:heightFirework,fill:"black"})
                .attr("r", 1)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .transition()
                    .ease('circle')
                    .duration(2000)
                    //.attr({cy:heightFirework/2})
                    .attr("cy", function(d){ return d.y; })
                .transition().delay(40200)
                    .ease("exp")
                    .duration(300)
                    //.attr("cx", function(d){ return d.x; })
                    .attr("cx", function(d){ return randomX(base); })
                    //.attr("cy", function(d){ return d.y; })
                    .attr("cy", function(d){ return randomY(base); })
                    .attr("r", 2)
                    .attr("opacity",1)
                    .attr("fill", function(d){ return colorFirework(d.x); })
                    .transition()
                    .ease("circle")
                    .duration(2000)
                    .attr("opacity",0);



        }


// fireworksTen();






////////////////////////////// SPACESHIPS


var height = 400;
var width = 200;
var padding = {top: 40, bottom: 61, right: 20, left: 20 };
var selector = ".canvas";




function generateSpaceship(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocket = d3.select(config.selector + " #rocket-container")
    .attr('transform', 'rotate(225 0 0)')
    //.attr("style", "position: absolute; left: calc(50% - 5px); bottom: 0;")
    //.attr("style", "position: absolute; right: "+ axisScale(width)+"; top: "+ yScale(height)+"; ")
    .attr("style", "position: absolute; right: 1000; top: 1000")
    .transition().delay(4000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(4400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(4500).duration(100)

    rocket.selectAll("g").remove();

  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceship = generateSpaceship({
      height: height,
      width: width,
      padding: padding,
      selector: selector
      //selector: selector + "01"
    })
*/


function generateSpaceshipTwo(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketTwo = d3.select(config.selector + " #rocket-container2")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(8000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")

    .transition(8400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(8500).duration(100)

    rocketTwo.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipTwo = generateSpaceshipTwo({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipThree(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketThree = d3.select(config.selector + " #rocket-container3")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(12000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")

    .transition(12400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(12500).duration(100)

    rocketThree.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipThree = generateSpaceshipThree({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipFour(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketFour = d3.select(config.selector + " #rocket-container4")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(16000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(16400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(16500).duration(100)

    rocketFour.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipFour = generateSpaceshipFour({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipFive(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketFive = d3.select(config.selector + " #rocket-container5")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(20000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(20400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(20500).duration(100)

    rocketFive.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipFive = generateSpaceshipFive({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipSix(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketSix = d3.select(config.selector + " #rocket-container6")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(24000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(24400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(24500).duration(100)

    rocketSix.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipSix = generateSpaceshipSix({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipSeven(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketSeven = d3.select(config.selector + " #rocket-container7")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(28000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(28400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(28500).duration(100)

    rocketSeven.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipSeven = generateSpaceshipSeven({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipEight(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketEight = d3.select(config.selector + " #rocket-container8")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(32000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(32400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(32500).duration(100)

    rocketEight.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipEight = generateSpaceshipEight({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipNine(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketNine = d3.select(config.selector + " #rocket-container9")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(36000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(36400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(36500).duration(100)

    rocketNine.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipNine = generateSpaceshipNine({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/


function generateSpaceshipTen(config) {


  var data = {
    //current: 0,
    current: d3.svg.diagonal()
           .source( {"x":width, "y":height} )
           .target( {"x":width/2, "y":height} ),
    total: 20000
  };

  var height = config.height;
  var width = config.width;
  var rocketHeight = 55;
  var rocketWidth = 11;
  var padding = config.padding;
  var heightPadded = height + padding.top + padding.bottom;
  var widthPadded = width + padding.left + padding.right;

  var yScale = d3.scale.linear()
    .domain([0, data.total])
    .range([0, height])

  var axisScale = d3.scale.linear()
    .domain([0, data.total])
    .range([height, 0])

  var flameWidthScale = d3.scale.linear()
    .domain([0, data.total])
    .range([1, 4])

  var labelColorScale = d3.scale.linear().domain([0,4]).range([d3.rgb("#FF2525"), d3.rgb('#FFFFFF')]);

  var rocketTen = d3.select(config.selector + " #rocket-container10")
    .attr('transform', 'rotate(225 0 0)')
    .attr("style", "position: absolute; right: 1000; top: 0")
    .transition().delay(40000).duration(100)
    .attr("style", "position: absolute; right: -250; top: -150")
    .transition(24100).duration(100)
    .attr("style", "position: absolute; right: -150; top: -50")
    .transition(24200).duration(100)
    .attr("style", "position: absolute; right: -50; top: 50")
    .transition(24300).duration(100)
    .attr("style", "position: absolute; right: 50; top: 150")
    .transition(40400).duration(100)
    //.attr("style", "position: absolute; right: 500; top: 400")
    //.transition(40500).duration(100)

    rocketTen.selectAll("g").remove();



  d3.selectAll("line").remove();
  d3.selectAll(".domain").remove();

};



/*var spaceshipTen = generateSpaceshipTen({
      height: height,
      width: width,
      padding: padding,
      selector: selector
    });
*/






// Missle Arcs


function render(innerRadius) {

  console.log('render');

  var width = 402,
        height = 402,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcOne").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);


    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},

    ];



    var arc = d3.svg.arc().outerRadius(201).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(201,201)")
        .selectAll("path.arc")
            .data(data)
            .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            //.style("opacity", function() { return Math.random();  })

            // INSERT BLOCK HERE

            .transition().duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })

    svg.append("text")
          .attr("id", "label")
          .attr("y", 275)
          .attr("x", 375)
          .attr("dy", ".35em")
          .transition().delay(2000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line")
          .attr("x1", 390)
          .attr("y1", 225)
          .attr("x2", 390)
          .attr("y2", 265)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill")
          .transition().delay(2000).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 9)
          .style("stroke", "black")
          .style("fill", "none")
          .transition().delay(34500).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle")
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 0)
          .transition().delay(2500).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(16500).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(32500).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(34500).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(36500).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(38500).duration(2000)
          .attr("cx", 390)
          .attr("cy", 210)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}


// render(200);


function renderA(innerRadius) {

  var width = 402,
        height = 402,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);


    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},

    ];



    var arc = d3.svg.arc().outerRadius(201).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(201,201)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(16000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


}

//renderA(200);



function renderB(innerRadius) {

  var width = 402,
        height = 402,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);


    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},

    ];



    var arc = d3.svg.arc().outerRadius(201).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(201,201)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(32000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })




}

//renderB(200);




function render2(innerRadius) {

  var width = 202,
        height = 202,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTwo").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(101).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(101,101)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(1000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })

    svg.append("text")
          .attr("id", "label5")
          .attr("y", 175)
          .attr("x", 175)
          .attr("dy", ".35em")
          .transition().delay(3000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line5")
          .attr("x1", 190)
          .attr("y1", 125)
          .attr("x2", 190)
          .attr("y2", 165)
          .transition().delay(3000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill5")
          .transition().delay(3000).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(35500).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle5")
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 0)
          .transition().delay(3500).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(17500).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(33500).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(35500).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(37500).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(39500).duration(2000)
          .attr("cx", 190)
          .attr("cy", 110)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}



//render2(100);




function render2A(innerRadius) {

  var width = 202,
        height = 202,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTwoA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(101).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(101,101)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(17000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render2A(100);


function render2B(innerRadius) {

  var width = 202,
        height = 202,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTwoB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(101).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(101,101)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(33000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render2B(100);




function render3(innerRadius) {

  var width = 602,
        height = 602,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcThree").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(301).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(301,301)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(2000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label6")
          .attr("y", 375)
          .attr("x", 580)
          .attr("dy", ".35em")
          .transition().delay(4000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line6")
          .attr("x1", 590)
          .attr("y1", 325)
          .attr("x2", 590)
          .attr("y2", 365)
          .transition().delay(4000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill6")
          .transition().delay(4000).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(36500).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");



    svg.append("circle")
          .attr("id", "circle6")
          .attr("cx",590)
          .attr("cy", 310)
          .attr("r", 0)
          .transition().delay(4500).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(18500).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(34500).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(36500).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(38500).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(40500).duration(2000)
          .attr("cx", 590)
          .attr("cy", 310)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}





//render3(300);



function render3A(innerRadius) {

  var width = 602,
        height = 602,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcThreeA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(301).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(301,301)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(18000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render3A(300);


function render3B(innerRadius) {

  var width = 602,
        height = 602,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcThreeB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(301).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(301,301)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(34000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render3B(300);


function render4(innerRadius) {

  var width = 1002,
        height = 802,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFour").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
        //{startAngle: -0.5 * Math.PI, endAngle: .785},


    ];




    var arc = d3.svg.arc().outerRadius(401).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(401,401)")
        .selectAll("path.arc")
            .data(data)
            .enter()
            .append("path")
            .attr("class", "arc")
           .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(3000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                //var start = {startAngle: -0.5 * Math.PI, endAngle: -.785} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })

    svg.append("text")
          .attr("id", "label4")
          .attr("y", 475)
          .attr("x", 775)
          .attr("dy", ".35em")
          .transition().delay(5000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line4")
          .attr("x1", 790)
          .attr("y1", 420)
          .attr("x2", 790)
          .attr("y2", 460)
          .transition().delay(5000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill4")
          .transition().delay(5000).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(37500).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle4")
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 0)
          .transition().delay(5500).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(19500).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(35500).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(37500).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(39500).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(41500).duration(2000)
          .attr("cx", 790)
          .attr("cy", 410)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



        svg.append("text")
          .attr("id", "label69")
          .attr("y", 50)
          .attr("x", 700)
          .attr("dy", ".35em")
          .style("font-size", "16px")
          .style('fill', 'red')
          .transition().delay(5000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(7000).duration(1000)
          .text("")
          .transition().delay(8000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(10000).duration(1000)
          .text("")
          .transition().delay(13000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(15000).duration(1000)
          .text("")
          .transition().delay(16000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(18000).duration(1000)
          .text("")
          .transition().delay(21000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(23000).duration(1000)
          .text("")
          .transition().delay(24000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(26000).duration(1000)
          .text("")
          .transition().delay(29000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(31000).duration(1000)
          .text("")
          .transition().delay(32000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(34000).duration(1000)
          .text("")
          .transition().delay(37000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(39000).duration(1000)
          .text("")
          .transition().delay(40000).duration(2000)
          .text("Intercepted by the Iron Dome")
          .transition().delay(42000).duration(1000)
          .text("");


    svg.append("text")
          .attr("id", "label77")
          .attr("y", 25)
          .attr("x", 0)
          .attr("dy", ".35em")
          .transition().delay(2000).duration(2000)
          .text("Gaza")
          .style("font-weight", "bold");

    svg.append("line")
          .attr("id", "line77")
          .attr("x1", 0)
          .attr("y1", 40)
          .attr("x2", 0)
          .attr("y2", 340)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 1)
          .style("stroke-dasharray", ("3, 3"))
          .attr("stroke", "black");



}



//render4(400);



function render4A(innerRadius) {

  var width = 802,
        height = 802,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFourA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
        //{startAngle: -0.5 * Math.PI, endAngle: .785},


    ];




    var arc = d3.svg.arc().outerRadius(401).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(401,401)")
        .selectAll("path.arc")
            .data(data)
            .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(19000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                //var start = {startAngle: -0.5 * Math.PI, endAngle: -.785} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render4A(400);


function render4B(innerRadius) {

  var width = 802,
        height = 802,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFourB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
        //{startAngle: -0.5 * Math.PI, endAngle: .785},


    ];




    var arc = d3.svg.arc().outerRadius(401).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(401,401)")
        .selectAll("path.arc")
            .data(data)
            .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(35000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                //var start = {startAngle: -0.5 * Math.PI, endAngle: -.785} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render4B(400);


function render5(innerRadius) {

  var width = 752,
        height = 752,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFive").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);




    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(376).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(376,376)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
           .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(4000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })

    svg.append("text")
          .attr("id", "label2")
          .attr("y", 450)
          .attr("x", 725)
          .attr("dy", ".35em")
          .transition().delay(6000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line2")
          .attr("x1", 740)
          .attr("y1", 400)
          .attr("x2", 740)
          .attr("y2", 440)
          .transition().delay(6000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill2")
          .transition().delay(6000).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(38500).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle2")
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 0)
          .transition().delay(6500).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(20500).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(36500).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(38500).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(40500).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(42500).duration(2000)
          .attr("cx", 740)
          .attr("cy", 385)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}



//render5(375);



function render5A(innerRadius) {

  var width = 752,
        height = 752,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFiveA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);




    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(376).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(376,376)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(20000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}


//render5A(375);

function render5B(innerRadius) {

  var width = 752,
        height = 752,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFiveB").append("svg")
  .attr("viewBox", "0 0 " + width + " " + height)
  .attr("width", clientWidth)
  .attr("height", height);




    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(376).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(376,376)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(36000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}


//render5B(375);





function render6(innerRadius) {

  var width = 102,
        height = 132,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSix").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(51).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(51,51)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(5000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label7")
          .attr("y", 120)
          .attr("x", 80)
          .attr("dy", ".35em")
          .transition().delay(7000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line7")
          .attr("x1", 90)
          .attr("y1", 70)
          .attr("x2", 90)
          .attr("y2", 105)
          .transition().delay(7000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill7")
          .transition().delay(7000).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
           .transition().delay(39500).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle7")
          .attr("cx",90)
          .attr("cy", 55)
          .attr("r", 0)
          .transition().delay(7500).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(21500).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(37500).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(39500).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(41500).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(43500).duration(2000)
          .attr("cx", 90)
          .attr("cy", 55)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}




//render6(50);




function render6A(innerRadius) {

  var width = 102,
        height = 102,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSixA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(51).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(51,51)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(21000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render6A(50);

function render6B(innerRadius) {

  var width = 102,
        height = 102,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSixB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(51).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(51,51)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(37000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render6B(50);


function render7(innerRadius) {

  var width = 152,
        height = 162,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSeven").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(76).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(76,76)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
           .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(6000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label8")
          .attr("y", 150)
          .attr("x", 120)
          .attr("dy", ".35em")
          .transition().delay(8000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line8")
          .attr("x1", 140)
          .attr("y1", 100)
          .attr("x2", 140)
          .attr("y2", 135)
          .transition().delay(8000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill8")
          .transition().delay(8000).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(40500).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle8")
          .attr("cx",140)
          .attr("cy", 85)
          .attr("r", 0)
          .transition().delay(8500).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(22500).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(38500).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(40500).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(42500).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(44500).duration(2000)
          .attr("cx", 140)
          .attr("cy", 85)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}





//render7(75);






function render7A(innerRadius) {

  var width = 152,
        height = 152,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSevenA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(76).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(76,76)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(22000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render7A(75);


function render7B(innerRadius) {

  var width = 152,
        height = 152,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSevenB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(76).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(76,76)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(38000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render7B(75);


function render8(innerRadius) {

  var width = 702,
        height = 702,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcEight").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(351).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(351,351)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(7000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label9")
          .attr("y", 425)
          .attr("x", 670)
          .attr("dy", ".35em")
          .transition().delay(9000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line9")
          .attr("x1", 690)
          .attr("y1", 375)
          .attr("x2", 690)
          .attr("y2", 410)
          .transition().delay(9000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill9")
          .transition().delay(9000).duration(2000)
          .attr("cx", 690)
          .attr("cy", 360)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(41500).duration(2000)
          .attr("cx", 690)
          .attr("cy", 360)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle9")
          .attr("cx",690)
          .attr("cy", 360)
          .attr("r", 0)
          .transition().delay(9500).duration(2000)
          .attr("cx", 690)
          .attr("cy",360)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(23500).duration(2000)
          .attr("cx", 690)
          .attr("cy", 360)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(39500).duration(2000)
          .attr("cx", 690)
          .attr("cy", 360)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(41500).duration(2000)
          .attr("cx", 690)
          .attr("cy", 360)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(43500).duration(2000)
          .attr("cx", 690)
          .attr("cy", 360)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(45500).duration(2000)
          .attr("cx", 690)
          .attr("cy", 360)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}




//render8(350);





function render8A(innerRadius) {

  var width = 702,
        height = 702,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcEightA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(351).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(351,351)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(23000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render8A(350);

function render8B(innerRadius) {

  var width = 702,
        height = 702,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcEightB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(351).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(351,351)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(39000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render8B(350);


function render9(innerRadius) {

  var width = 502,
        height = 502,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcNine").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(251).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(251,251)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(8000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label10")
          .attr("y", 325)
          .attr("x", 475)
          .attr("dy", ".35em")
          .transition().delay(10000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line10")
          .attr("x1", 490)
          .attr("y1", 275)
          .attr("x2", 490)
          .attr("y2", 310)
          .transition().delay(10000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill10")
          .transition().delay(10000).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(42500).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle10")
          .attr("cx",490)
          .attr("cy", 260)
          .attr("r", 0)
          .transition().delay(10500).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(24500).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(40500).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(42500).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(44500).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(46500).duration(2000)
          .attr("cx", 490)
          .attr("cy", 260)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}





//render9(250);




function render9A(innerRadius) {

  var width = 502,
        height = 502,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcNineA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(251).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(251,251)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(24000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render9A(250);

function render9B(innerRadius) {

  var width = 502,
        height = 502,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcNineB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(251).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(251,251)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(40000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render9B(250);


function render10(innerRadius) {

  console.log('render10');

  var width = 302,
        height = 302,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTen").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(151).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(151,151)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(9000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label11")
          .attr("y", 225)
          .attr("x", 280)
          .attr("dy", ".35em")
          .transition().delay(11000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line11")
          .attr("x1", 290)
          .attr("y1", 175)
          .attr("x2", 290)
          .attr("y2", 215)
          .transition().delay(11000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill11")
          .transition().delay(11000).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(43500).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");



    svg.append("circle")
          .attr("id", "circle11")
          .attr("cx",290)
          .attr("cy", 160)
          .attr("r", 0)
          .transition().delay(11500).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(24500).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(41500).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(43500).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(45500).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(47500).duration(2000)
          .attr("cx", 290)
          .attr("cy", 160)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}





//render10(150);




function render10A(innerRadius) {

  console.log('render10');

  var width = 302,
        height = 302,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTenA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(151).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(151,151)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(25000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render10A(150);


function render10B(innerRadius) {

  console.log('render10');

  var width = 302,
        height = 302,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTenB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(151).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(151,151)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
           .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(41000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render10B(150);






function render11(innerRadius) {

  console.log('render11');

  var width = 52,
        height = 152,
        top = 155,
        left = 175,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcEleven").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);
        //.attr("x", 175)
        //.attr("y", 155);

  //$("svg").css({top: 155, left: 175, position:'absolute'});


    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(26).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(26,26)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
           .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(10000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label12")
          .attr("y", 95)
          .attr("x", 25)
          .attr("dy", ".35em")
          .transition().delay(12000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line12")
          .attr("x1", 40)
          .attr("y1", 45)
          .attr("x2", 40)
          .attr("y2", 85)
          .transition().delay(12000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill12")
          .transition().delay(12000).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(44500).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");



    svg.append("circle")
          .attr("id", "circle12")
          .attr("cx",40)
          .attr("cy", 30)
          .attr("r", 0)
          .transition().delay(12500).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(25500).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(42500).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(44500).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(46500).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(48500).duration(2000)
          .attr("cx", 40)
          .attr("cy", 30)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}



//render11(25);





function render11A(innerRadius) {

  console.log('render11');

  var width = 52,
        height = 52,
        top = 155,
        left = 175,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcElevenA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);
        //.attr("x", 175)
        //.attr("y", 155);

  //$("svg").css({top: 155, left: 175, position:'absolute'});


    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(26).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(26,26)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(26000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}



//render11A(25);


function render11B(innerRadius) {

  console.log('render11');

  var width = 52,
        height = 52,
        top = 155,
        left = 175,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcElevenB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);
        //.attr("x", 175)
        //.attr("y", 155);

  //$("svg").css({top: 155, left: 175, position:'absolute'});


    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(26).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(26,26)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
           .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(42000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}



//render11B(25);







function render12(innerRadius) {


  var width = 252,
        height = 252,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTwelve").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(126).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(126,126)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(11000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label13")
          .attr("y", 200)
          .attr("x", 225)
          .attr("dy", ".35em")
          .transition().delay(13000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line13")
          .attr("x1", 240)
          .attr("y1", 150)
          .attr("x2", 240)
          .attr("y2", 190)
          .transition().delay(13000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill13")
          .transition().delay(13000).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(45500).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");



    svg.append("circle")
          .attr("id", "circle13")
          .attr("cx",240)
          .attr("cy", 135)
          .attr("r", 0)
          .transition().delay(13500).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(26500).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(43500).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(45500).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(47500).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(49500).duration(2000)
          .attr("cx", 240)
          .attr("cy", 135)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}



//render12(125);




function render12A(innerRadius) {


  var width = 252,
        height = 252,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTwelveA").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(126).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(126,126)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(27000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render12A(125);


function render12B(innerRadius) {


  var width = 252,
        height = 252,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcTwelveB").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];




    var arc = d3.svg.arc().outerRadius(126).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(126,126)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(43000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render12B(125);




function render13(innerRadius) {


  var width = 352,
        height = 352,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcThirteen").append("svg")
        //.attr("class", "pie")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", clientWidth)
        .attr("height", height);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(176).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(176,176)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(12000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label14")
          .attr("y", 250)
          .attr("x", 320)
          .attr("dy", ".35em")
          .transition().delay(14000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line14")
          .attr("x1", 340)
          .attr("y1", 200)
          .attr("x2", 340)
          .attr("y2", 240)
          .transition().delay(14000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill14")
          .transition().delay(14000).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(46500).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");



    svg.append("circle")
          .attr("id", "circle14")
          .attr("cx",340)
          .attr("cy", 185)
          .attr("r", 0)
          .transition().delay(14500).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(27500).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(44500).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(46500).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(48500).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(50500).duration(2000)
          .attr("cx", 340)
          .attr("cy", 185)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}




//render13(175);






function render13A(innerRadius) {


  var width = 352,
        height = 352,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcThirteenA").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(176).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(176,176)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(28000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render13A(175);


function render13B(innerRadius) {


  var width = 352,
        height = 352,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcThirteenB").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(176).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(176,176)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(44000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render13B(175);



function render14(innerRadius) {


  var width = 452,
        height = 452,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFourteen").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(226).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(226,226)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(13000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label15")
          .attr("y", 300)
          .attr("x", 420)
          .attr("dy", ".35em")
          .transition().delay(15000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line15")
          .attr("x1", 440)
          .attr("y1", 250)
          .attr("x2", 440)
          .attr("y2", 290)
          .transition().delay(15000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill15")
          .transition().delay(15000).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(47500).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");



    svg.append("circle")
          .attr("id", "circle15")
          .attr("cx",440)
          .attr("cy", 235)
          .attr("r", 0)
          .transition().delay(15500).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(28500).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(45500).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(47500).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(49500).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(51500).duration(2000)
          .attr("cx", 440)
          .attr("cy", 235)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}



//render14(225);





function render14A(innerRadius) {


  var width = 452,
        height = 452,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFourteenA").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(226).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(226,226)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(29000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render14A(225);

function render14B(innerRadius) {


  var width = 452,
        height = 452,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFourteenB").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(226).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(226,226)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(45000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render14B(225);



function render15(innerRadius) {


  var width = 552,
        height = 552,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFifteen").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(276).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(276,276)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(14000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


      svg.append("text")
          .attr("id", "label16")
          .attr("y", 350)
          .attr("x", 520)
          .attr("dy", ".35em")
          .transition().delay(16000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line16")
          .attr("x1", 540)
          .attr("y1", 300)
          .attr("x2", 540)
          .attr("y2", 340)
          .transition().delay(16000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill16")
          .transition().delay(16000).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(48500).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");


    svg.append("circle")
          .attr("id", "circle16")
          .attr("cx",540)
          .attr("cy", 285)
          .attr("r", 0)
          .transition().delay(16500).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(29500).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(46500).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(48500).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(50500).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(52500).duration(2000)
          .attr("cx", 540)
          .attr("cy", 285)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}



//render15(275);





function render15A(innerRadius) {


  var width = 552,
        height = 552,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFifteenA").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(276).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(276,276)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(30000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render15A(275);


function render15B(innerRadius) {


  var width = 552,
        height = 552,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcFifteenB").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);



    var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



    var arc = d3.svg.arc().outerRadius(276).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(276,276)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(46000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

//render15B(275);




function render16(innerRadius) {


  var width = 652,
        height = 652,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSixteen").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);


  //$("svg").css({top: -150, left: 175, position:'absolute'});



  var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



  var arc = d3.svg.arc().outerRadius(326).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(326,326)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(8, 141, 209)")
            .style("stroke-width", 1)
            .style("fill", "none")
            .style("opacity", .3)
            .transition().delay(15000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })


    svg.append("text")
          .attr("id", "label17")
          .attr("y", 400)
          .attr("x", 620)
          .attr("dy", ".35em")
          .transition().delay(17000).duration(2000)
          .text("Hit");

    svg.append("line")
          .attr("id", "line17")
          .attr("x1", 640)
          .attr("y1", 350)
          .attr("x2", 640)
          .attr("y2", 390)
          .transition().delay(17000).duration(2000)
          .attr("stroke-width", 1)
          .attr("stroke", "black");

    svg.append("circle")
          .attr("id", "circle-fill17")
          .transition().delay(17000).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 9)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "none")
          .transition().delay(49500).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 12)
          .style("stroke", "none")
          .style("fill", "none");



    svg.append("circle")
          .attr("id", "circle17")
          .attr("cx",640)
          .attr("cy", 335)
          .attr("r", 0)
          .transition().delay(17500).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 3)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "yellow")
          .transition().delay(30500).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 6)
          .style("stroke", "black")
          .style("stroke-opacity", .7)
          .style("fill", "orange")
          .transition().delay(47500).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 9)
          .style("stroke", "black")
          .style("stroke-opacity", .9)
          .style("fill", "red")
          .transition().delay(49500).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 10)
          .style("stroke-opacity", 0)
          .style("opacity", .7)
          .style("fill", "red")
          .transition().delay(51500).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 11)
          .style("stroke-opacity", 0)
          .style("opacity", .5)
          .style("fill", "red")
          .transition().delay(53500).duration(2000)
          .attr("cx", 640)
          .attr("cy", 335)
          .attr("r", 12)
          .style("stroke-opacity", 0)
          .style("opacity", .3)
          .style("fill", "red");



}





// render16(325);




function render16A(innerRadius) {


  var width = 652,
        height = 652,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSixteenA").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);


  //$("svg").css({top: -150, left: 175, position:'absolute'});



  var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



  var arc = d3.svg.arc().outerRadius(326).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(326,326)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
            .style("stroke", "rgb(19, 85, 119)")
            .style("stroke-width", 3)
            .style("fill", "none")
            .style("opacity", .5)
            .transition().delay(31000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

// render16A(325);


function render16B(innerRadius) {


  var width = 652,
        height = 652,
        //endAngle = 2 * Math.PI,
        colors = d3.scale.category20();

  var svg = d3.select("#arcSixteenB").append("svg")
        //.attr("class", "pie")
        .attr("height", height)
        .attr("width", width);


  //$("svg").css({top: -150, left: 175, position:'absolute'});



  var data = [
        {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},


    ];



  var arc = d3.svg.arc().outerRadius(326).innerRadius(innerRadius);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(326,326)")
        .selectAll("path.arc")
            .data(data)
        .enter()
            .append("path")
            .attr("class", "arc")
             .style("stroke", "rgb(8, 26, 35)")
            .style("stroke-width", 5)
            .style("fill", "none")
            .style("opacity", .7)
            .transition().delay(47000).duration(2000)
            .attrTween("d", function (d) {
                var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
                var interpolate = d3.interpolate(start, d); // <-B
                return function (t) {
                    return arc(interpolate(t)); // <-C
                };
            })



}

function initiateMissileAnimationLaunch() {
    fireworks();
    fireworksTwo();
    fireworksThree();
    fireworksFour();
    fireworksFive();
    fireworksSix();
    fireworksSeven();
    fireworksEight();
    fireworksNine();
    fireworksTen();
    var spaceship = generateSpaceship({
      height: height,
      width: width,
      padding: padding,
      selector: selector
      //selector: selector + "01"
    })
    var spaceshipTwo = generateSpaceshipTwo({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipThree({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipFour({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipFive({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipSix({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipSeven({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipEight({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipNine({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    var spaceshipTwo = generateSpaceshipTen({
          height: height,
          width: width,
          padding: padding,
          selector: selector
    });
    render(200);
    renderA(200);
    renderB(200);
    render2(100);
    render2A(100);
    render2B(100);
    render3(300);
    render3A(300);
    render3B(300);
    render4(400);
    render4A(400);
    render4B(400);
    render5(375);
    render5A(375);
    render5B(375);
    render6(50);
    render6A(50);
    render6B(50);
    render7(75);
    render7A(75);
    render7B(75);
    render8(350);
    render8A(350);
    render8B(350);
    render9(250);
    render9A(250);
    render9B(250);
    render10(150);
    render10A(150);
    render10B(150);
    render11(25);
    render11A(25);
    render11B(25);
    render12(125);
    render12A(125);
    render12B(125);
    render13(175);
    render13A(175);
    render13B(175);
    render14(225);
    render14A(225);
    render14B(225);
    render15(275);
    render15A(275);
    render15B(275);
    render16(325);
    render16A(325);
    render16B(325);
}


// render16B(325);

//setInterval(function() { render16(325); }, 2000);

var isMissileAnimationTriggered = false;

$(window).on('scroll', function() {
    if (isMissileAnimationTriggered === false) {
        var yScrollOffset = window.pageYOffset;
        var triggerPoint = $('.container-missle').offset().top - 300;
        if (yScrollOffset >= triggerPoint) {
            isMissileAnimationTriggered = true;
            initiateMissileAnimationLaunch();
        }
    }

});
