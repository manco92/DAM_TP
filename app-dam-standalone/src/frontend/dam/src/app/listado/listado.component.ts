import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDispositivoService } from '../services/listado-dispositivo.service';
import { Dispositivo } from '../interfaces/dispositivo';
import { DispositivoComponent } from '../dispositivo/dispositivo.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  imports: [CommonModule, DispositivoComponent],
  standalone: true,
})
export class ListadoComponent implements OnInit {
  constructor(private listadoDispositivoService: ListadoDispositivoService) {}

  listado: Dispositivo[] =
    this.listadoDispositivoService.getListadoDispositivos();

  manejador(event: any) {
    console.log(event);
  }

  ngOnInit() {}
}
