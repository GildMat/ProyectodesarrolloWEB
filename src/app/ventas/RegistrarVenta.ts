import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './RegistrarVenta.html',
  styleUrls: ['./RegistrarVenta.css']
})
export class RegistrarVenta {
 
  venta = {
    tipoventa: '',
    fecha: '',  
    totalventa: '',    
  };

  mensaje: string = '';  
  private apiUrl = 'http://localhost:5034/ventas/post';  // URL de la API

  constructor(private http: HttpClient) {}  
  guardarVenta() {
    const formattedDate = new Date(this.venta.fecha).toISOString().split('T')[0];
    const ventaPayload = {
      tipoVenta: this.venta.tipoventa,
      fechaVenta: formattedDate,  
      totalVenta: this.venta.totalventa
    };
  
    this.http.post(this.apiUrl, ventaPayload).subscribe(
      (response) => {
        console.log('Venta registrada con éxito:', response);
        alert('Venta registrada con éxito');
        this.limpiarFormulario();
      },
      (error) => {
        console.error('Error al registrar la venta:', error);
        alert('Error al registrar la venta');
      }
    );
  }
    
  limpiarFormulario() {
    this.venta = {
      tipoventa: '',
      fecha: '',  
      totalventa: '',   
    };
  }
}