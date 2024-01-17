import { Component } from '@angular/core';
import { NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-regidstration',
  standalone: true,
  imports: [],
  templateUrl: './regidstration.component.html',
  styleUrl: './regidstration.component.css'
})
export class RegidstrationComponent {
  registerForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',Validators.required)
  });
  ngOnInit(){
  }
  
  onSubmit():void{
    console.log("form submitted");
    
  }
  
}

