import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { VentasComponent } from './ventas/ventas.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [
 { path: 'productos', component: ProductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'paquete', component: PaqueteComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})


export class AppRoutingModule {}  // Asegúrate de que esta línea esté presente
