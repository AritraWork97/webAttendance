import { Component, OnInit } from '@angular/core';

import { AuthenticationService, TokenRegisterPayload} from '../../models and services/authentication/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials : TokenRegisterPayload  = {
    _id : '',
    name : '',
    username : '',
    address : '',
    email : '',
    mobile : '',
    password : ''
  };
  constructor(private  auth : AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile')
    }, (err) => {
      console.log(err);
    })
  }

}
