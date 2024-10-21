import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-credito',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './AgregarCredito.html',
  styleUrls: ['./AgregarCredito.css']
})
export class AgregarCredito{
 
  credito = {
    tiponota: '',
    codigoventa: '',
    fecha: '',  
    montonota: '',    
  };

  mensaje: string = '';  
  private apiUrl = 'http://localhost:5034/NotaCredito/post';  // URL de la API

  constructor(private http: HttpClient) {}  

  
  guardarVenta() {
    const formattedDate = new Date(this.credito.fecha).toISOString();  // Convertir la fecha a formato ISO

    const creditoPayload = {
      tipoNota: this.credito.tiponota,
      codigoVenta: this.credito.codigoventa,
      fechaNota: formattedDate,               // Fecha en formato ISO
      montoNota: this.credito.montonota
    };

    console.log('Datos enviados:', creditoPayload);  // Ver los datos enviados

    this.http.post(this.apiUrl, creditoPayload).subscribe(
      (response) => {
        console.log('Nota de crédito registrada con éxito:', response);
        alert('Nota de crédito registrada con éxito');
        this.limpiarFormulario();
      },
      (error) => {
        console.error('Error al registrar la nota de crédito:', error);
        alert('Error al registrar la nota de crédito');
      }
    );
}
  






  limpiarFormulario() {
    this.credito = {
      tiponota: '',
      codigoventa: '',
      fecha: '',  
      montonota: '',   
    };
  }
}
