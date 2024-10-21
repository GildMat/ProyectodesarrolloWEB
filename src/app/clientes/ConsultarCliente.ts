import { HttpClient } from '@angular/common/http';  // Importa HttpClient
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './ConsultarCliente.html',
  styleUrls: ['./ConsultarCliente.css']
})
export class ConsultarCliente {

  cliente = {
    codigoCliente: '',
    nombresCliente: '',
    apellidosCliente: '',
    nit: '',
    direccionCliente: '',
    categoriaCliente: '',
    estadoCliente: ''
  };

  private apiUrl = 'http://localhost:5034/cliente';  // URL de la API

  constructor(private http: HttpClient) {}  // Inyecta HttpClient

  // Método para buscar el cliente por código
  buscarCliente() {
    if (this.cliente.codigoCliente) {
      this.http.get(`${this.apiUrl}/${this.cliente.codigoCliente}`).subscribe(
        (cliente: any) => {
          if (cliente) {
            this.cliente = cliente;  // Asigna los datos del cliente al modelo
            console.log('Cliente encontrado:', this.cliente);
          } else {
            console.error('Cliente no encontrado');
          }
        },
        (error) => {
          console.error('Error al buscar el cliente:', error);
        }
      );
    }
  }
}
