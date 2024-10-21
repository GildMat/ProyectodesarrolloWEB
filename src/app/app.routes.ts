import { Routes } from '@angular/router';
import { IngresarProducto } from './productos/IngresarProducto';
import { ConsultarProducto } from './productos/ConsultarProducto';
import { ActualizarProducto } from './productos/ActualizarProducto';
import { eliminarProducto } from './productos/EliminarProducto';

import {AgregarCliente } from './clientes/AgregarCliente';
import {ConsultarCliente } from './clientes/ConsultarCliente';
import {ActualizarCliente } from './clientes/ActulizarCliente';
import {EliminarCliente } from './clientes/EliminarCliente';
import { RegistrarVenta } from './ventas/RegistrarVenta';
import {AgregarCredito } from './NotasCredito/AgregarCredito';
import { RegistrarEntrega } from './paquete/RegistrarEntrega';
import {BuscarPaquete } from './paquete/BuscarPaquete';

import {BitacoraPaquete } from './paquete/BitacoraPaquete';


export const routes: Routes = [
  { path: 'productos/IngresarProducto', component: IngresarProducto },
  { path: 'productos/ConsultarProducto', component: ConsultarProducto },
  { path: 'productos/ActualizarProducto', component: ActualizarProducto },
  { path: 'productos/EliminarProducto', component: eliminarProducto },
  
  { path: 'clientes/AgregarCliente', component: AgregarCliente }, 
  { path: 'clientes/ConsultarCliente', component: ConsultarCliente },
  { path: 'clientes/ActualizarCliente', component: ActualizarCliente },
  { path: 'clientes/EliminarCliente', component: EliminarCliente },

  { path: 'ventas/RegistrarVenta', component: RegistrarVenta },
  { path: 'NotasCredito/AgregarCredito', component: AgregarCredito },
  { path: 'paquete/RegistrarEntrega', component: RegistrarEntrega },
  { path: 'paquete/BuscarPaquete', component: BuscarPaquete },
  { path: 'paquete/BitacoraPaquete', component: BitacoraPaquete },
 
 
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' }
];
