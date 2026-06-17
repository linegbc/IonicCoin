import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // <-- Adicionamos isso explicitamente
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}