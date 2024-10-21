<div class="container">
  <h2>Localización</h2>

  <div class="form-group">
    <label for="codigo-venta">Código venta</label>
    <input id="codigo-venta" type="text" [(ngModel)]="codigoVenta" class="form-control" placeholder="Ingrese el código de venta">
    <button (click)="buscarPaquete()">Buscar</button>
  </div>

  <!-- Componente de Google Maps -->
  <div class="map-container" style="height: 400px; width: 100%;"> <!-- Asegura dimensiones -->
    <google-map height="400px" width="100%" [center]="center" [zoom]="zoom">
      <map-marker [position]="markerPosition"></map-marker>
    </google-map>
  </div>
</div>
