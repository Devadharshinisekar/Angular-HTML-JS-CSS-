import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
[x: string]: any;
onSubmit() {
console.log("succesfull");
}
// name='';
// email='';
// password='';
submitted = false;
employeeForm!:FormGroup;
fDate:any;
Country:any;

}
