import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


  standalone: true,
  imports: [RouterModule, CommonModule] 

})
export class AppComponent {
  title = 'angular-dashboard';
  userImagePath = './img/usuario.png';
    
    isUserMenuOpen = false;
    menuVisible = false;
  
    
    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    }
  
    showMenu() {
      this.menuVisible = true;
    }
  
    hideMenu() {
      this.menuVisible = false;
    }
  

  
}