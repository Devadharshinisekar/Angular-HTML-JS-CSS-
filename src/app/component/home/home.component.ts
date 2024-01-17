import { Component } from '@angular/core';
import { RegidstrationComponent } from "../regidstration/regidstration.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RegidstrationComponent]
})
export class HomeComponent {

}
