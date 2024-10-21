import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-entrega',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './RegistrarEntrega.html',
  styleUrls: ['./RegistrarEntrega.css']
})
export class RegistrarEntrega {

  entrega = {
    CodigoCliente: '',
    CodigoProducto: '',  
    EstadoEntrega: '',  
    FechaEntrega: '',   
    UbicacionEntrega: '',  
  };

  cliente: any = null;  // Almacenar temporalmente el cliente
  producto: any = null; // Almacenar temporalmente el producto

  mensaje: string = '';  
  private apiUrl = 'http://localhost:5034/entrega/post';  // URL de la API para registrar entrega
  private apiUrlCliente = 'http://localhost:5034/clientes';  // URL de la API para clientes
  private apiUrlProducto = 'http://localhost:5034/productos'; // URL de la API para productos

  constructor(private http: HttpClient) {}  

  // Método para buscar el cliente por código
  buscarCliente() {
    if (this.entrega.CodigoCliente) {
      this.http.get(`${this.apiUrlCliente}/${this.entrega.CodigoCliente}`).subscribe(
        (cliente: any) => {
          if (cliente) {
            this.cliente = cliente;  // Almacenar temporalmente los datos del cliente
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

  // Método para buscar el producto por código
  buscarProducto() {
    if (this.entrega.CodigoProducto) {
      this.http.get(`${this.apiUrlProducto}/${this.entrega.CodigoProducto}`).subscribe(
        (producto: any) => {
          if (producto) {
            this.producto = producto;  
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

  // Método para guardar la entrega
  guardarEntrega() {
    const entregaPayload = {
      codigoCliente: this.entrega.CodigoCliente,
      codigoProducto: this.entrega.CodigoProducto,
      fechaEntrega: new Date(this.entrega.FechaEntrega).toISOString(),
      estadoEntrega: this.entrega.EstadoEntrega,
      ubicacionEntrega: this.entrega.UbicacionEntrega
    };
  
    this.http.post(this.apiUrl, entregaPayload).subscribe(
      (response) => {
        console.log('Entrega registrada con éxito:', response);
        alert('Entrega registrada con éxito');
        this.limpiarFormulario();
      },
      (error) => {
        console.error('Error al registrar la entrega:', error);
        alert('Error al registrar la entrega');
      }
    );
  }
  








  // Método para limpiar el formulario después de guardar
  limpiarFormulario() {
    this.entrega = {
      CodigoCliente: '',
      CodigoProducto: '',  
      EstadoEntrega: '',  
      FechaEntrega: '',   
      UbicacionEntrega: '',  
    };
    this.cliente = null; 
    this.producto = null; 
  }
}
