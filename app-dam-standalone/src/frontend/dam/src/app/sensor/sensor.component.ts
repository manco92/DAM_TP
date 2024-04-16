import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
  standalone: true,
})
export class SensorComponent implements OnInit {
  private nombreSensor: string = '';
  private valorObtenido: number = 0;
  public myChart: any;
  private chartOptions: any;

  public updateChart() {
    console.log(this.nombreSensor, this.valorObtenido, this.myChart);
    if (this.myChart) {
      this.myChart.update({
        title: {
          text: this.nombreSensor,
        },
        series: [
          {
            name: [this.nombreSensor],
            data: [this.valorObtenido],
            tooltip: {
              valueSuffix: ' kPA',
            },
          },
        ],
      });
    }
  }

  public setNombreSensor(nombre: string) {
    this.nombreSensor = nombre;
    this.updateChart();
  }

  public setValorObtenido(numero: number) {
    this.valorObtenido = numero;
    this.updateChart();
  }

  public getNombreSensor() {
    return this.nombreSensor;
  }

  public getValorObtenido() {
    return this.valorObtenido;
  }

  ngOnInit() {
    this.generarChart();
  }

  //  ionViewDidEnter() {
  //    this.generarChart();
  //  }

  generarChart() {
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: this.nombreSensor,
      },

      credits: { enabled: false },

      pane: {
        startAngle: -150,
        endAngle: 150,
      },
      // the value axis
      yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto',
        },
        title: {
          text: 'kPA',
        },
        plotBands: [
          {
            from: 0,
            to: 10,
            color: '#55BF3B', // green
          },
          {
            from: 10,
            to: 30,
            color: '#DDDF0D', // yellow
          },
          {
            from: 30,
            to: 100,
            color: '#DF5353', // red
          },
        ],
      },
      series: [
        {
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
            valueSuffix: ' kPA',
          },
        },
      ],
    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions);
    console.log(this.myChart);
  }
}
