///////////////////////////////// Flight Path Viz


var map = L.map('map').setView([20.476705, 25.824607], 4); 

//var map = L.map('map').setView([15.5007, 32.5599], 4); 

  //L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  //L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png?access_token={accessToken}',  { Black & White 
    //L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/ tile/{z}/{y}/{x}.png?access_token={accessToken}',  { Google Earth
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    minZoom: 4,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnVsbHliZWFyIiwiYSI6ImNqbDB1M2dnaDE4cWQza2xlazE3Z2t4ZnUifQ.m3UgrvGKwKUsPFDUa1MT5w'
}).addTo(map);



d3.json("static/data/israel/points.geojson", function(collection) {

    var svg = d3.select(map.getPanes().overlayPane).append("svg");

    var g = svg.append("g").attr("class", "leaflet-zoom-hide"); 


var featuresdata = collection.features.filter(function(d) {
            return d.properties.id == "route1"
        })

var transform = d3.geo.transform({
            point: projectPoint
        });

var d3path = d3.geo.path().projection(transform);

var toLine = d3.svg.line()
            .interpolate("linear")
            .x(function(d) {
                return applyLatLngToLayer(d).x
            })
            .y(function(d) {
                return applyLatLngToLayer(d).y
            });

var ptFeatures = g.selectAll("circle")
            .data(featuresdata)
            .enter()
            .append("circle")
            .attr("r", 3)
            .attr("class", "waypoints");

var linePath = g.selectAll(".lineConnect")
            .data([featuresdata])
            .enter()
            .append("path")
            .attr("class", "lineConnect");

        
var marker = g.append("circle")
            .attr("r", 10)
            .style("fill", "yellow")
            .attr("id", "marker")
            .attr("class", "travelMarker"); 
        


var originANDdestination = [featuresdata[0], featuresdata[1], featuresdata[2], featuresdata[3]]
var begend = g.selectAll(".drinks")
            .data(originANDdestination)
            .enter()
            .append("circle", ".drinks")
            .attr("r", 5)
            .style("fill", "red")
            .style("opacity", "1");

var text = g.selectAll("text")
            .data(originANDdestination)
            .enter()
            .append("text")
            .text(function(d) {
                return d.properties.name
            })
            .attr("class", "locnames")
            .attr("y", function(d) {
                return -10
            })



        map.on("viewreset", reset);

        reset();
        transition();


        

function reset() {
            var bounds = d3path.bounds(collection),
                topLeft = bounds[0],
                bottomRight = bounds[1];

            text.attr("transform",
                function(d) {
                    return "translate(" +
                        applyLatLngToLayer(d).x + "," +
                        applyLatLngToLayer(d).y + ")";
                });

            begend.attr("transform",
                function(d) {
                    return "translate(" +
                        applyLatLngToLayer(d).x + "," +
                        applyLatLngToLayer(d).y + ")";
                });
            ptFeatures.attr("transform",
                function(d) {
                    return "translate(" +
                        applyLatLngToLayer(d).x + "," +
                        applyLatLngToLayer(d).y + ")";
                });

            marker.attr("transform",
                function() {
                    var y = featuresdata[0].geometry.coordinates[1]
                    var x = featuresdata[0].geometry.coordinates[0]
                    return "translate(" +
                        map.latLngToLayerPoint(new L.LatLng(y, x)).x + "," +
                        map.latLngToLayerPoint(new L.LatLng(y, x)).y + ")";
                });

            svg.attr("width", bottomRight[0] - topLeft[0] + 120)
                .attr("height", bottomRight[1] - topLeft[1] + 120)
                .style("left", topLeft[0] - 50 + "px")
                .style("top", topLeft[1] - 50 + "px");
            // linePath.attr("d", d3path);
            linePath.attr("d", toLine)
            // ptPath.attr("d", d3path);
            g.attr("transform", "translate(" + (-topLeft[0] + 50) + "," + (-topLeft[1] + 50) + ")");
        } // end reset

         

function transition() {
            linePath.transition()
                .duration(15000)
                .attrTween("stroke-dasharray", tweenDash)
                .each("end", function() {
                    d3.select(this).call(transition);// infinite loop
                }); 
        } //end transition


function tweenDash() {
            return function(t) {
                //total length of path (single value)
                var l = linePath.node().getTotalLength(); 
            
                interpolate = d3.interpolateString("0," + l, l + "," + l);

                var marker = d3.select("#marker");
                
                var p = linePath.node().getPointAtLength(t * l);

                marker.attr("transform", "translate(" + p.x + "," + p.y + ")"); //move marker
                console.log(interpolate(t))
                return interpolate(t);
            }
        } //end tweenDash

function projectPoint(x, y) {
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        } //end projectPoint
    function applyLatLngToLayer(d) {
        var y = d.geometry.coordinates[1]
        var x = d.geometry.coordinates[0]
        return map.latLngToLayerPoint(new L.LatLng(y, x))
    }

    });






