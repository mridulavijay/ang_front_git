import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule,Validators} from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
signup=new FormGroup({
  email:new FormControl('',[Validators.email,Validators.required]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)])
})
  constructor() { }

  ngOnInit(): void {
  }
  get form2():any{
    return this.signup.controls;
  }
}
