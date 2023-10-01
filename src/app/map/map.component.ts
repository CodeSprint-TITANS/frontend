import { Component, OnInit } from '@angular/core';
import {
  tileLayer,
  map,
  circle,
  Circle,
  Layer,
  layerGroup,
  marker,
  divIcon,
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
  private customLocation: any;

  ngOnInit(): void {
    this.renderMap();
  }

  constructor() {
    this.date = new Date().toLocaleString('en', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    var myIcon = divIcon({ className: 'my-div-icon' });

    this.customLocation = marker([1.352, 103.7598], { icon: myIcon });
  }

  onChange(value: number) {
    this.time = value;

    this.shapes.forEach((shape: Layer) => {
      this.map.removeLayer(shape);
    });
    this.shapes = this.transformHeatData(heatData.data[value], this.radius);
    this.tiles = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 15,
        minZoom: 2,
      }
    );
    layerGroup(this.shapes).addLayer(this.tiles).addTo(this.map);
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
    const label = marker([1.266556, 103.6566116], {
      icon: divIcon({
        iconSize: [100, 100],
        className: 'label',
        html:
          '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#1f0891}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><div>' +
          'Tuas Terminal Gateway' +
          '</div>',
      }),
    });
    const label1 = marker([1.2650221, 103.8050201], {
      icon: divIcon({
        iconSize: [100, 100],
        className: 'label',
        html:
          '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#1f0891}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><div>' +
          'Bukit Panjang Terminal ' +
          '</div>',
      }),
    });

    const label2 = marker([1.2510221, 103.8810201], {
      icon: divIcon({
        iconSize: [100, 100],
        className: 'label',
        html:
          '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#1f0891}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><div>' +
          'Tanjong Pagar Terminal ' +
          '</div>',
      }),
    });

    layerGroup(this.shapes).addLayer(this.tiles).addTo(this.map);
    layerGroup([label, label1, label2]).addTo(this.map);

    // Adding tiles to the map
    // this.tiles.addTo(this.map);
  }
}
