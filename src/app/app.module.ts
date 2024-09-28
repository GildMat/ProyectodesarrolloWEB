import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { routes } from './app.routes';  // Importar las rutas
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { VentasComponent } from './ventas/ventas.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    ClientesComponent,
    PaqueteComponent,
    VentasComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Importar RouterModule y las rutas
  ],
  providers: [],
  bootstrap: [bootstrapApplication]  // El componente principal es AppComponent
})
export class AppModule { }
