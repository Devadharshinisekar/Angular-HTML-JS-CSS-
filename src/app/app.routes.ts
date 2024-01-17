import { Routes } from '@angular/router';
import { RegidstrationComponent } from './component/regidstration/regidstration.component';
import { LoginComponent } from './component/login/login.component';
// import { RegidstrationComponent } from './component/regidstration/regidstration.component';

export const routes: Routes = [
     {path:'register',component:RegidstrationComponent},
     {path:'login',component:LoginComponent}
];
