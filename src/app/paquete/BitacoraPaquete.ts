import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-paquetes',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './BitacoraPaquete.html',
  styleUrls: ['./BitacoraPaquete.css']
})
export class BitacoraPaquete implements OnInit {
  paquetes: any[] = [];
  private apiUrl = 'http://localhost:5034/entrega'; // URL de la API

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerPaquetes();
  }

  obtenerPaquetes() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (response) => {
        // Formatear las fechas para que solo muestren la parte de la fecha, sin la hora
        this.paquetes = response.map(paquete => ({
          ...paquete,
          fechaEntrega: new Date(paquete.fechaEntrega).toLocaleDateString() // Formatear la fecha
        }));
        console.log('Paquetes:', this.paquetes);
      },
      (error) => {
        console.error('Error al obtener paquetes:', error);
      }
    );
  }

  // Método para aplicar clases CSS según el estado de entrega
  getEstadoClass(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'entregado':
        return 'estado-entregado';
      case 'pendiente':
        return 'estado-pendiente';
      case 'en ruta':
      case 'en tránsito':
        return 'estado-en-ruta';
      default:
        return '';
    }
  }
}
