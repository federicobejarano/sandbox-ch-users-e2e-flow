import { Component, OnInit } from '@angular/core';
import { IonText } from @'ionic/angular/standalone';

@Component({
  selector: 'app-profile-card', // selector HTML
  imports: [ IonText ],
  templateUrl: './profile-card..html', // ubicación de la plantilla
  styleUrls: ['./profile-card..scss'],
})
export class ProfileCard  implements OnInit {

  constructor() { }
  /* Nota: En Angular 21 el patrón preferido es
    usar la función `inject()` para obtener servicios,
    en lugar del constructor tradicional */

}
