import { Component, OnInit, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-card', // para HTML
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonLabel, IonButton ],
  /*
    template: `
      <div class="user-card">
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
          <button (click)="onEdit()">Edit User</button>
      </div>
    `,
  */
  templateUrl: './profile-card.html', // ubicación de la plantilla
  /* inline
    styles: [`
        .user-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin: 8px 0;
        }
    `]
   */
  styleUrls: ['./profile-card.scss'],
})
export class ProfileCard  {

    @Input() nombre = '';
    @Input() rol = '';
    @Input() activo = false;

  constructor() { }
  /* Nota: En Angular 21 el patrón preferido es
    usar la función `inject()` para obtener servicios,
    en lugar del constructor tradicional */

    onVerDetalle() {
      console.log('Navegando al detalle de:', this.nombre);
    }

}
