import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from '../shared/service.service';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public dataSource: any;
  public countries = [];
  
  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.getMapData();
  }

  public getMapData() {
    this.service.getMapData().subscribe((data: any) => {
      this.dataSource = JSON.parse(data.body);     
      //get countries list
      for (const element of this.dataSource.map) {
        this.countries.push(element);
      }
      this.createMap(this.countries);       
    },
      (error: any) => { }
    );
  }

  public createMap(countries) {
    let chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.exporting.menu = new am4core.ExportMenu();
    chart.zoomControl = new am4maps.ZoomControl();
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#e6e6e6");
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#bfbfbf");
    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];
    // Add some data
    polygonSeries.data = countries;
    // Bind "fill" property to "fill" key in data
    polygonTemplate.propertyFields.fill = "fill";

    let worldSeriesName = "world";
    polygonSeries.name = worldSeriesName;
    polygonSeries.useGeodata = true;
    polygonSeries.fillOpacity = 0.8;
    polygonSeries.hiddenInLegend = true;
    polygonSeries.mapPolygons.template.nonScalingStroke = true;

  }


}
