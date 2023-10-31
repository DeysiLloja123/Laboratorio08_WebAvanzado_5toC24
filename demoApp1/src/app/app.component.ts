import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demoApp1';

  @ViewChild('selector2') selector: 
  SelectornumericoComponent = new SelectornumericoComponent();
  fijarSelector2(valor: number){
    this.selector.fijar(valor);
}
  productos = [
    {codigo:1, descripcion: 'coronita', precio: '0.50'},
    {codigo:2, descripcion: 'incakola', precio: '2.50'},
    {codigo:3, descripcion: 'cocacola', precio: '2.50'},
    {codigo:4, descripcion: 'cañonazo', precio: '0.70'},
    {codigo:5, descripcion: 'agua cielo', precio: '1.20'}
  ];
}
