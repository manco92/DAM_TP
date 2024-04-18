import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { popUpData } from '../types/popUpData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popUp-component',
  templateUrl: 'popUp.component.html',
  styleUrls: ['popUp.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class PopUpComponent implements OnInit {
  public isOpen: boolean;
  public popUpData: any;

  constructor() {
    this.isOpen = true;
    this.popUpData = [1, 2, 3, 4, 5, 5, 5];
  }

  @Output() onClick = new EventEmitter();

  onClose() {
    this.isOpen = false;
  }

  setIsOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  public getIsOpen() {
    return this.isOpen;
  }

  setData(popUpData: popUpData) {
    this.popUpData = popUpData;
  }

  public getData() {
    return this.popUpData;
  }

  ngOnInit() {}
}
