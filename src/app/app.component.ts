import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegidstrationComponent } from "./component/regidstration/regidstration.component";
import { HomeComponent } from "./component/home/home.component";
import { RegisterComponent } from "./register/register.component";
// import { RegidstrationComponent } from './component/regidstration/regidstration.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RegidstrationComponent, HomeComponent, RegisterComponent]
})
export class AppComponent {
  title = 'angulartask';
}
