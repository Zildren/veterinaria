// clientes.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonAvatar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonListHeader,
  IonItem,
  IonIcon,
  AlertController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonAvatar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonList,
    IonListHeader,
    IonItem,
    IonIcon,
  ]
})
export class ClientesPage implements OnInit {
  selectedSegment: string = 'clientes';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  onSegmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Cerrar Sesión',
          cssClass: 'danger',
          handler: () => {
            // Limpiar datos de sesión
            localStorage.clear();
            sessionStorage.clear();
            
            // Redirigir al login
            this.router.navigate(['/home'], { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}