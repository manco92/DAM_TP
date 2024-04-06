import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ListadoDispositivoService } from '../services/listado-dispositivo.service';
import { Dispositivo } from '../interfaces/dispositivo';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss'],
  standalone: true,
})
export class DispositivoComponent implements OnInit {
  constructor() {}

  @Input() dispositivo: any;
  @Output() onChange = new EventEmitter();

  cambiarNombre() {
    this.dispositivo.name = 'Nuevo nombre';
    this.onChange.emit(`El nuevo nombre es: ${this.dispositivo.name}`);
  }

  ngOnInit() {}
}
