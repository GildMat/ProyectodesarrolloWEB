import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './EliminarProducto.html',
  styleUrls: ['./EliminarProducto.css']
})
export class eliminarProducto {

    producto = {
   
        descripcion: '',
        fechaVencimiento: '',
        codigoProveedor: '',
        ubicacionFisica: '',
        existenciaMinima: ''  
      };
    
  productos: any[] = [];  // Lista de productos
  mensaje: string = '';   // Para mostrar mensajes de éxito o error

  private apiUrl = 'http://localhost:5034/productos';  // URL de la API
  private apiUr2 = 'http://localhost:5034/productos/delete';  // URL de la API
  constructor(private http: HttpClient) {
    this.obtenerProductos();  // Llama a este método cuando el componente se inicialice
  }

  // Método para obtener todos los productos
  obtenerProductos() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.productos = data;
        console.log('Productos obtenidos:', this.productos);
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  // Método para eliminar un producto
  eliminarProducto(codigo: string) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.http.delete(`${this.apiUr2}/${codigo}`).subscribe(
        () => {
          this.mensaje = 'Producto eliminado con éxito';
          this.obtenerProductos();  // Refresca la lista de productos
          setTimeout(() => this.mensaje = '', 3000);  // Borra el mensaje después de 3 segundos
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
          this.mensaje = 'Error al eliminar el producto';
          setTimeout(() => this.mensaje = '', 3000);
        }
      );
    }
  }
}
