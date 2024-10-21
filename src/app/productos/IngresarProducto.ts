import { HttpClient } from '@angular/common/http';  // Importa HttpClient directamente en el componente
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './IngresarProducto.html',
  styleUrls: ['./IngresarProducto.css']
})

export class IngresarProducto {

  producto = {
   
    descripcion: '',
    fechaVencimiento: '',
    codigoProveedor: '',
    ubicacionFisica: '',
    existenciaMinima: ''  
  };

  private apiUrl = 'http://localhost:5034/productos';  // URL de la API

  constructor(private http: HttpClient) {}  // Inyecta HttpClient directamente en el componente


  

  // Método para ingresar un producto
  ingresarProducto() {
    this.http.post(`${this.apiUrl}/post`, this.producto).subscribe(
      (response) => {
        console.log('Producto ingresado con éxito:', response);
      },
      (error) => {
        console.error('Error al ingresar el producto:', error);
      }
    );
  }
  
  // Método para limpiar el formulario
  limpiarFormulario() {
    this.producto = {
    
      descripcion: '',
      fechaVencimiento: '',
      codigoProveedor: '',
      ubicacionFisica: '',
     existenciaMinima: ''
    };
  }
}
