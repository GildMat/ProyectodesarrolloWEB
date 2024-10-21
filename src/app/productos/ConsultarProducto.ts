import { HttpClient } from '@angular/common/http';  // Importa HttpClient directamente en el componente
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './ConsultarProducto.html',
  styleUrls: ['./IngresarProducto.css']
})
export class ConsultarProducto {

  producto = {
    codigo: '',
    descripcion: '',
    fechaVencimiento: '',
    codigoProveedor: '',
    ubicacionFisica: '',
    existenciaMinima: ''  
  };

  private apiUrl = 'http://localhost:5034/productos';  // URL de la API

  constructor(private http: HttpClient) {}  // Inyecta HttpClient directamente en el componente

  // Método para buscar el producto por código

  buscarProducto() {
    if (this.producto.codigo) {
      this.http.get(`${this.apiUrl}/${this.producto.codigo}`).subscribe(
        (producto: any) => {
          if (producto) {
            // Formatea la fecha para que sea compatible con el input de tipo "date"
            if (producto.fechaVencimiento) {
              producto.fechaVencimiento = new Date(producto.fechaVencimiento).toISOString().split('T')[0];
            }
            this.producto = producto;  // Asigna los datos del producto al modelo
            console.log('Producto encontrado:', this.producto);
          } else {
            console.error('Producto no encontrado');
          }
        },
        (error) => {
          console.error('Error al buscar el producto:', error);
        }
      );
    }
  }
  

}