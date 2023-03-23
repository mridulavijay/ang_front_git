import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User={email:'',
password:''}
  constructor() { }

  ngOnInit(): void {
  }
display(){
  alert(`The entered values are Email:${this.User.email} Password:${this.User.password}`)
}
}
