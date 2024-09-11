import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router'; // Si estás usando enrutamiento

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot([]))], // Añade el módulo de rutas si es necesario
}).catch(err => console.error(err));
