import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

let L: any;

@Component({
  selector: 'app-buscarpaquete',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './BuscarPaquete.html',
  styleUrls: ['./BuscarPaquete.css'],
})
export class BuscarPaquete implements OnInit {
  codigoPaquete: string = '';
  paquete: any = null;
  mapaListo: boolean = false; // Añadir esta propiedad para manejar el estado del mapa
  private apiUrl = 'http://localhost:5034/entrega';
  
  // Declaramos la propiedad "map" aquí
  map: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Cargar dinámicamente Leaflet solo en el lado del cliente
      import('leaflet')
        .then((leafletModule) => {
          L = leafletModule;
          if (this.paquete) {
            this.geocodeAndShowMap(this.paquete.ubicacionEntrega);
          }
        })
        .catch((error) => {
          console.error('Error loading Leaflet:', error);
        });
    }
  }

  buscarPaquete() {
    this.http.get(`${this.apiUrl}/${this.codigoPaquete}`).subscribe(
      (response: any) => {
        this.paquete = response;
        console.log('Paquete encontrado:', this.paquete);

        // Mostrar mapa solo si hay una ubicación válida
        if (typeof window !== 'undefined' && this.paquete.ubicacionEntrega) {
          this.geocodeAndShowMap(this.paquete.ubicacionEntrega);
        } else {
          console.error('No se encontró ubicación en el paquete.');
        }
      },
      (error) => {
        console.error('Error al buscar el paquete:', error);
        alert('Paquete no encontrado.');
      }
    );
  }

  geocodeAndShowMap(direccion: string) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`;
    
    this.http.get(url).subscribe(
      (resultados: any) => {
        if (resultados && resultados.length > 0) {
          const lat = resultados[0].lat;
          const lon = resultados[0].lon;
          this.mapaListo = true; // Muestra el mapa cuando las coordenadas estén listas
          this.mostrarMapa([lat, lon], direccion);
        } else {
          console.error('No se pudieron obtener coordenadas para la dirección proporcionada.');
        }
      },
      (error) => {
        console.error('Error durante la geocodificación:', error);
      }
    );
}


  mostrarMapa(coordenadas: [number, number], direccion: string) {
    if (typeof window !== 'undefined' && L) {
        // Verificar si el contenedor del mapa existe en el DOM
        const mapContainer = document.getElementById('map');
        if (!mapContainer) {
            console.error("El contenedor del mapa no se encontró.");
            return;
        }

        // Verificar si ya existe un mapa para evitar la creación de múltiples instancias
        if (this.map) {
            this.map.remove();
        }

        // Crear el mapa centrado en las coordenadas proporcionadas
        this.map = L.map('map').setView(coordenadas, 13);

        // Añadir capa de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(this.map);

        // Marcador en las coordenadas proporcionadas
        L.marker(coordenadas)
            .addTo(this.map)
            .bindPopup(`Dirección: ${direccion}`)
            .openPopup();
    }
}

}
