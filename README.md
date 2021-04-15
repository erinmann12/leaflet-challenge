# leaflet-challenge

**Background**

For this project, I needed to visualize United States Geological Survey earthquake data. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. I took a dataset from the past week and mapped all earthquakes greater than 2.5 magnitude.

![](https://github.com/erinmann12/leaflet-challenge/blob/main/images/leafletmap.PNG)

**Tools Used**

1. USGS GeoJSON
2. Leaflet
3. JavaScript
4. CSS
5. HTML

**Project Tasks**

First I visited the USGS GeoJSON feed page and chose a data set to visualize. Using the URL of the data set, I pulled the data into my JavaScript file. Next, I used Leaflet to create a map that plots all the earthquakes from my data set based on their longitude and latitude. The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. The earthquakes with the higher magnitudes appear larger than the others and the earthquakes with greater depth appear darker in color. 

![](https://github.com/erinmann12/leaflet-challenge/blob/main/images/mapwithpopup.PNG)

If a user clicks on a data point, a popup will appear to provide more information like the location of the earthquake, the magnitude, and the depth. I also created a legend to provide context for the map data.