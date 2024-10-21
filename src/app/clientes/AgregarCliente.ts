import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // Importa HttpClient para hacer solicitudes HTTP
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './AgregarCliente.html',
  styleUrls: ['./AgregarCliente.css'] 
})
export class AgregarCliente {
 
  cliente = {
    nombresCliente: '',
    apellidosCliente: '',  
    nit: '',   
    direccionCliente: '',
    categoriaCliente: '',
    estadoCliente: '',
  };
  mensaje: string = '';  
  private apiUrl = 'http://localhost:5034/api/Clientes';  // URL de la API actualizada

  constructor(private http: HttpClient) {}  // Inyecta HttpClient en el constructor

  // Método para manejar la acción de guardar el cliente
  guardarCliente() {
    console.log('Datos del cliente:', this.cliente);
    
    // Realiza la solicitud POST para guardar los datos del cliente
    this.http.post(this.apiUrl, this.cliente).subscribe(
      (response) => {
        console.log('Cliente guardado con éxito:', response);
        this.mensaje = 'Cliente guardado con éxito';  // Muestra un mensaje
        alert('Cliente guardado con éxito');  // Muestra una alerta al guardar correctamente
        this.limpiarFormulario();  // Limpia el formulario después de guardar
      },
      (error) => {
        console.error('Error al guardar el cliente:', error);
        alert('Error al guardar el cliente');  // Muestra una alerta si ocurre un error
      }
    );
  }

  // Método para limpiar el formulario después de guardar
  limpiarFormulario() {
    this.cliente = {
      nombresCliente: '',
      apellidosCliente: '',  
      nit: '',   
      direccionCliente: '',
      categoriaCliente: '',
      estadoCliente: '',
    };
  }
}
