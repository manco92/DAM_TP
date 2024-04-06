import { Injectable } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root',
})
export class ListadoDispositivoService {
  listado: Dispositivo[] = [
    {
      id: 1,
      name: 'Sensor 1',
      location: 'Patio',
    },
    {
      id: 2,
      name: 'Sensor 2',
      location: 'Casa',
    },
    {
      id: 3,
      name: 'Sensor 3',
      location: 'Armario',
    },
    {
      id: 4,
      name: 'Sensor 4',
      location: 'Parque',
    },
    {
      id: 5,
      name: 'Sensor 5',
      location: 'Garage',
    },
    {
      id: 6,
      name: 'Sensor 6',
      location: 'Jardin',
    },
  ];

  getListadoDispositivos(): Dispositivo[] {
    return this.listado;
  }

  constructor() {}
}
