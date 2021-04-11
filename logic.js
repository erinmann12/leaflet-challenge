// Store our API endpoint as queryUrl
// var queryUrl = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
//   "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"
// console.log(queryUrl);

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
  console.log(data.features);

//   // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
  function getColor(mag) {

//     //Use if/else if etc on mag to change colors
    if (mag > 3)
      return "red"
    else if (mag > 1.5)
      return "orange"
    else
      return "green";
  }

  function onEachFeature(feature, layer) {
    layer.bindPopup(`${feature.properties.place}<hr>Magnitude:${feature.properties.mag}<br>Depth:${feature.geometry.coordinates[2]}`);
  }

  var earthquakes = L.geoJSON(data.features, {
    onEachFeature: onEachFeature,
    // change markers to circles
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: function(feature) {
      return {
        "color": "white",
        "fillOpacity": 1,
        "fillColor": getColor(feature.properties.mag),
        "weight": 5,
        // make circle proportionate to data
        "radius": feature.properties.mag * 5,
        "opacity": 0.65    
      }
    }  
  })

//   // Define streetmap and darkmap layers
//   var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   });

//   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     accessToken: API_KEY
//   });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap,
//     "Dark Map": darkmap
//   };

//   var overlayMap = {
//     "Earthquakes": earthquakes
//   }
//   // Create a new map
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, earthquakes]
//   });

//   // Create a layer control containing our baseMaps
//   // Be sure to add an overlay Layer containing the earthquake GeoJSON
//   L.control.layers(baseMaps, overlayMap, {
//     collapsed: false
//   }).addTo(myMap);

//   //LEGEND GOES HERE

});