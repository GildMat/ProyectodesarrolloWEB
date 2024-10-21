import { HttpClient } from '@angular/common/http';  // Importa HttpClient directamente en el componente
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './ActualizarProducto.html',
  styleUrls: ['./IngresarProducto.css']
})
export class ActualizarProducto {

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
            
            if (producto.fechaVencimiento) {
              producto.fechaVencimiento = new Date(producto.fechaVencimiento).toISOString().split('T')[0];
            }
            this.producto = producto;  
           
          console.log('Producto encontrado:', this.producto);
          } else {
            alert('Producto no encontrado');
            console.error('Producto no encontrado');
          }
        },
        (error) => {
          alert('¡Error al buscar producto!');
          console.error('Error al buscar el producto:', error);
        }
      );
    }
  }

  actualizarProducto() {
    if (this.producto.codigo) {
      this.http.put(`${this.apiUrl}/put/${this.producto.codigo}`, this.producto).subscribe(
        (response) => {
          alert('¡Producto actualizado con éxito!');
          console.log('Producto actualizado con éxito:', response);

          
        },
        (error) => {

          alert('¡Error al actualizar el producto!');
         
          console.error('Error al actualizar el producto:', error);
        }
      );
    } else {
      alert('Ingrese el Codigo del Producto:');
     
      console.error('ID del producto no proporcionado');
    }
  }
  
  





  

}