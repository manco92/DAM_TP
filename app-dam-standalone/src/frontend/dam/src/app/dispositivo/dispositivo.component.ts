import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { SensorComponent } from '../sensor/sensor.component';
import { MedicionService } from '../services/medicion.service';
import { PopUpComponent } from '../popUp/popUp.component';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss'],
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
          this.sensorComponent.setValoresSensor({
            nombreSensor: this.dispositivo.nombre,
            valorObtenido: Number(data.valor),
          });
        },
        (error: any) => {
          console.error('Error al obtener última medición:', error);
        }
      );
  }

  ngOnInit() {}
}
