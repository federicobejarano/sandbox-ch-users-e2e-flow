import { Component, OnInit } from '@angular/core';
import { IonBackButton,
               IonButtons,
               IonToolbar,
               IonTitle,
               IonHeader,
               IonContent,
               IonGrid,
               IonRow,
               IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-grid-basic',
  imports: [
      IonBackButton,
      IonButtons,
      IonToolbar,
      IonTitle,
      IonHeader,
      IonContent,
      IonGrid,
      IonRow,
      IonCol
  ],
  templateUrl: './grid-basic.html',
  styleUrls: ['./grid-basic.scss'],
})
export class GridBasic  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
