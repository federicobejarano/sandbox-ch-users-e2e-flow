import { Component, OnInit, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-card', // selector HTML
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonLabel, IonButton ],
  templateUrl: './profile-card.html', // ubicación de la plantilla
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
