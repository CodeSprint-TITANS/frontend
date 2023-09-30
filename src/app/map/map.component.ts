import { Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';
// import 'heatmap.js';
// import { heatData } from '../../assets/map_data/heatmap';
// declare const HeatmapOverlay: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: any;

  ngOnInit(): void {
    this.initMap();
  }

  public initMap(): void {
    // Initialising map with center point by using the coordinates
    // Setting initial zoom to 3
    this.map = leaflet.map('map', {
      center: [1.352, 103.8198],
      zoom: 11,
    });

    // Initialising tiles to the map by using openstreetmap
    // Setting zoom levels
    const tiles = leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 11,
        minZoom: 3,
        attribution:
          '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    // Adding tiles to the map
    tiles.addTo(this.map);

    // // Setting up heat layer config
    // const heatLayerConfig = {
    //   radius: 0.01,
    //   maxOpacity: 0.8,
    //   scaleRadius: true,
    //   // property below is responsible for colorization of heat layer
    //   useLocalExtrema: true,
    //   // here we need to assign property value which represent lat in our data
    //   latField: 'lat',
    //   // here we need to assign property value which represent lng in our data
    //   lngField: 'lng',
    //   // here we need to assign property value which represent valueField in our data
    //   valueField: 'count',
    // };

    // // Initialising heat layer and passing config
    // const heatmapLayer = new HeatmapOverlay(heatLayerConfig);

    // //Passing data to a layer
    // heatmapLayer.setData(heatData);

    // //Adding heat layer to a map
    // heatmapLayer.addTo(this.map);
  }
}
