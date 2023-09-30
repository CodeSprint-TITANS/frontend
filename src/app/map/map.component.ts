import { Component, OnInit } from '@angular/core';
import {
  tileLayer,
  map,
  circle,
  control,
  Circle,
  Layer,
  TileLayer,
} from 'leaflet';
import { heatData } from '../../../assets/map_data/heatmap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: any;
  date: string;
  private time: number = 0;
  private shapes: any;
  private radius: number = 300;
  private tiles: any;

  ngOnInit(): void {
    this.renderMap();
  }

  constructor() {
    this.date = new Date().toLocaleString('en', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  onChange(value: number) {
    this.time = value;

    this.shapes.forEach((shape: Layer) => {
      this.map.removeLayer(shape);
    });
    this.shapes = this.transformHeatData(heatData.data[value], this.radius);
    this.map.layers = this.shapes;
    this.tiles = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 15,
        minZoom: 2,
      }
    );
    this.tiles.addTo(this.map);
  }

  transformHeatData(heatData: any, radius: number) {
    var result: Circle[] = [];
    heatData.forEach(function (element: any) {
      if (element.count > 100) {
        return result.push(
          circle([element.lat, element.lng], {
            color: '#f03',
            fillColor: '#f03',
            fillOpacity: 0.8,
            radius: radius,
          })
        );
      } else if (element.count > 70) {
        return result.push(
          circle([element.lat, element.lng], {
            color: '#FFA500',
            fillColor: '#FFA500',
            fillOpacity: 0.8,
            radius: radius,
          })
        );
      } else if (element.count > 30) {
        return result.push(
          circle([element.lat, element.lng], {
            color: '#FFFF00',
            fillColor: '#FFFF00',
            fillOpacity: 0.8,
            radius: radius,
          })
        );
      } else {
        return result.push(
          circle([element.lat, element.lng], {
            color: 'green',
            fillColor: '#008000',
            fillOpacity: 0.8,
            radius: radius,
          })
        );
      }
    });
    return result;
  }

  public renderMap(time: number = 0): void {
    // Initialising heat layer and passing config

    //Passing data to a layer
    this.shapes = this.transformHeatData(heatData.data[time], this.radius);

    // Initialising map with center point by using the coordinates
    // Setting initial zoom to 3
    this.map = map('map', {
      center: [1.352, 103.8198],
      zoom: 11,
      layers: this.shapes,
    });

    // Initialising tiles to the map by using openstreetmap
    // Setting zoom levels
    this.tiles = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 15,
        minZoom: 2,
      }
    );

    // Adding tiles to the map
    this.tiles.addTo(this.map);
  }
}
