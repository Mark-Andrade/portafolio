import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
   this.cargarProductos();
   }

   private cargarProductos() {
    this.http.get('https://angular-html-9325b.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {
      console.log(resp);
      this.productos = resp;

      setTimeout(() => {
        this.cargando = false;
      }, 2000);
    });
  }
}