/////////////////////////////////////////////////// SPIRAL GRAPH JS  



    var width = 625,
      height = 625,
      start = 0,
      end = 2.25,
      numSpirals = 3,
      //margin = {top:50,bottom:50,left:50,right:50};
      margin = {top:20,bottom:30,left:40,right:40};

    var theta = function(r) {
      return numSpirals * Math.PI * r;
    };

    var color = d3.scale.category10();  

    var r = d3.min([width, height]) / 2 - 40;

    var radius = d3.scale.linear()
      .domain([start, end])
      .range([40, r]); 

    var svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.left + margin.right)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var points = d3.range(start, end + 0.001, (end - start) / 1000);

    var spiral = d3.svg.line.radial() 
      .interpolate("cardinal")
      .angle(theta)
      .radius(radius); 

    var path = svg.append("path")
      .datum(points)
      .attr("id", "spiral")
      .attr("d", spiral)
      .style("fill", "none")
      .style("stroke-width", 3)
      .style("stroke", "steelblue");

    var spiralLength = path.node().getTotalLength(),
        //N = 365, 
        N = 200,
        barWidth = (spiralLength / N) - 1;


    function type(d) {
      d.Date = timeScale(d.Date);
      d.ID = +d.ID; 
      d.Incidents = +d.Incidents; 
      return d;
    }

    var timeScale = d3.time.scale()
      .domain(d3.extent(spiralData, function(d){
        return d.Date;
      }))
      .range([0, spiralLength]);



      var yScale = d3.scale.linear()
      .domain([
       d3.min(spiralData, function (d) { return d.Killed, d.Injured, d.Attacks; }),
       d3.max(spiralData, function(d){ return d.Killed, d.Injured, d.Attacks; }),
       ])
       .range([0, (r / numSpirals) - 50]); 
       //.range([0, 20]);
       


    svg.selectAll("rect")
      .data(spiralData)
      .enter()
      .append("rect")
      .attr("x", function(d,i){
        
        var linePer = timeScale(d.Date),
            posOnLine = path.node().getPointAtLength(linePer),
            angleOnLine = path.node().getPointAtLength(linePer - barWidth);
      
        d.linePer = linePer; // % distance are on the spiral
        d.x = posOnLine.x; // x postion on the spiral
        d.y = posOnLine.y; // y position on the spiral
        
        d.a = (Math.atan2(angleOnLine.y, angleOnLine.x) * 180 / Math.PI) - 90; //angle at the spiral position

        return d.x;
      })
      .attr("y", function(d){
        return d.y;
      })
      .attr("width", function(d){
        return barWidth;
      })
      .attr("height", function(d){
        return yScale(d.Killed, d.Injured, d.Attacks); 
        //return yScale(d.Killed);

      })

      .style("fill", function(d){return color(d.ID);}) 
      .style("stroke", "none")
      .attr("transform", function(d){
        return "rotate(" + d.a + "," + d.x  + "," + d.y + ")"; // rotate the bar
      });

      
      svg.append("text")
          .attr("id", "titleSpiral")
          .attr("y", -300)
          .attr("x", -130)
          .attr("dy", ".35em")
          .style("font-size", "12px")
          .text("Total Injuries, Fatalities & Attacks: 1950 - 2018");


      svg.append("circle")
          .attr("id", "circle-fill-Spiral")
          .attr("cx", -10)
          .attr("cy", 5)
          .attr("r", 5)
          .style("stroke", "black")
          //.style("stroke-opacity", .1)
          .style("fill", "black");
       

    
    // add Date labels
    //var tF = d3.timeFormat("%b %Y"),
    var tF = d3.time.format("%b %Y"), 
        firstInMonth = {};

    svg.selectAll("text")
      .data(spiralData)
      .enter()
      .append("text")
      .attr("dy", 10)
      .style("text-anchor", "start")
      .style("font", "10px arial")
      .append("textPath")

      // only add for the first of each month
      
      .filter(function(d){
        //var sd = tF(d.Date);
        var sd = type(d.Date);
        if (!firstInMonth[sd]){
          firstInMonth[sd] = 1;
          return true;
        }
        return false;
      })
      .text(function(d){
        //return tF(d.Date);
          return type(d.Date); 
      })
       
      // place text along spiral
      .attr("xlink:href", "#spiral")
      .style("fill", "grey")
      .attr("startOffset", function(d){
        return ((d.linePer / spiralLength) * 100) + "%";
      })


