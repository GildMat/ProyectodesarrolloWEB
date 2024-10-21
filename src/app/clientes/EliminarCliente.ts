import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './EliminarCliente.html',
  styleUrls: ['./EliminarCliente.css']
})
export class EliminarCliente {

  clientes: any[] = [];  // Lista de clientes
  mensaje: string = '';   // Para mostrar mensajes de éxito o error

  private apiUrl = 'http://localhost:5034/cliente';   // URL de la API para obtener y eliminar clientes

  constructor(private http: HttpClient) {
    this.obtenerClientes();  // Llama a este método cuando el componente se inicialice
  }

  // Método para obtener todos los clientes
  obtenerClientes() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.clientes = data;
        console.log('Clientes obtenidos:', this.clientes);
      },
      (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }

  // Método para eliminar un cliente
  eliminarCliente(id: number) {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(
        () => {
          this.mensaje = 'Cliente eliminado con éxito';
          this.obtenerClientes();  // Refresca la lista de clientes
          setTimeout(() => this.mensaje = '', 3000);  // Borra el mensaje después de 3 segundos
        },
        (error) => {
          console.error('Error al eliminar el cliente:', error);
          this.mensaje = 'Error al eliminar el cliente';
          setTimeout(() => this.mensaje = '', 3000);
        }
      );
    }
  }
}
