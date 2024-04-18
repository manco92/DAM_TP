import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ValoresSensor } from '../interfaces/valoresSensor';
import { PopUpComponent } from '../popUp/popUp.component';
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
  public valoresSensor: ValoresSensor;
  public myChart: any;
  public chartOptions: any;

  constructor(private popUpComponent: PopUpComponent) {
    this.valoresSensor = { valorObtenido: 0, nombreSensor: 'Elegir Sensor' };
  }

  @Output() onClick = new EventEmitter();

  onVerTodasLasMedicionesClick() {
    this.popUpComponent.setIsOpen(true);
  }

  onVerLogRiegosClick() {
    this.popUpComponent.setIsOpen(true);
  }

  setValoresSensor(valoresSensor: ValoresSensor) {
    this.valoresSensor = valoresSensor;
    this.generarChart(valoresSensor);
  }

  getValoresSensor() {
    return this.valoresSensor;
  }

  ngOnInit() {
    this.generarChart(this.valoresSensor);
  }

  generarChart(valoresSensor: ValoresSensor) {
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: valoresSensor.nombreSensor,
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
          name: [this.valoresSensor.nombreSensor],
          data: [this.valoresSensor.valorObtenido],
          tooltip: {
            valueSuffix: ' kPA',
          },
        },
      ],
    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions);
  }
}
