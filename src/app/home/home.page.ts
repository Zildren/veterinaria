import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    FormsModule
  ],
})
export class HomePage {
  usuario: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Validación básica
    if (!this.usuario || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.isLoading = true;

    // Simular proceso de carga
    setTimeout(() => {
      // Validación simple (puedes cambiar estas credenciales)
      if (this.usuario === 'admin' && this.password === '123456') {
        alert('¡Bienvenido!');
        this.router.navigate(['/clientes']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
      this.isLoading = false;
    }, 1500);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}