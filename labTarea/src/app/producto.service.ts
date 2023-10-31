import { Injectable } from '@angular/core';

export interface Producto {
  codigo: number;
  descripcion: string;
  precio: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    { codigo: 1, descripcion: 'sprite', precio: '1.00' },
    { codigo: 2, descripcion: 'fanta', precio: '2.00' },
    { codigo: 3, descripcion: 'pepsi', precio: '1.50' },
    { codigo: 4, descripcion: 'limonada', precio: '1.25' },
    { codigo: 5, descripcion: 'te verde', precio: '1.75' },
    { codigo: 6, descripcion: 'te negro', precio: '1.75' },
    { codigo: 7, descripcion: 'jugo de naranja', precio: '2.25' },
    { codigo: 8, descripcion: 'agua mineral', precio: '0.75' },
    { codigo: 9, descripcion: 'manzanita', precio: '1.50' },
    { codigo: 10, descripcion: 'uva', precio: '1.50' }
  ];

  constructor() {}

  getProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  editarProducto(index: number, producto: Producto): void {
    this.productos[index] = producto;
  }

  eliminarProducto(index: number): void {
    this.productos.splice(index, 1);
  }
}
