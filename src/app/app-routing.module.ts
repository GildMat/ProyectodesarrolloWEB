import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarProducto } from './productos/IngresarProducto';

import { ClientesComponent } from './clientes/clientes.component';
import { PaqueteComponent } from './paquete/RegistrarEntrega';
import { VentasComponent } from './ventas/RegistrarVenta';
import { ReportesComponent } from './NotasCredito/AgregarCredito';


const routes: Routes = [
 { path: 'productos', component: IngresarProducto },
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
