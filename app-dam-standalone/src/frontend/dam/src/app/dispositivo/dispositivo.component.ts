import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { SensorService } from '../services/detalles-sensor.service';
import { SensorComponent } from '../sensor/sensor.component';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss'],
  providers: [SensorComponent],
  standalone: true,
})
export class DispositivoComponent implements OnInit {
  constructor(
    private medicionService: MedicionService,
    private sensorComponent: SensorComponent
  ) {}

  @Input() dispositivo: any;
  @Output() onClick = new EventEmitter();

  elegirSensor() {
    this.medicionService
      .getLastMedicionById(this.dispositivo.dispositivoId)
      .subscribe(
        (data: any) => {
          this.sensorComponent.setNombreSensor(this.dispositivo.nombre);
          this.sensorComponent.setValorObtenido(data.valor);
        },
        (error: any) => {
          console.error('Error al obtener última medición:', error);
        }
      );
  }

  ngOnInit() {}
}
