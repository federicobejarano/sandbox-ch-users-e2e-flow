import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

// The root component is an architectural shell: no UI of its own.
// Its sole responsibility is mounting the hierarchy Ionic requires
// to manage navigation, transitions, and platform layout.
@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styles: [],
})
export class App {}
