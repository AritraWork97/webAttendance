import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../models and services/authentication/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth : AuthenticationService) { }

  ngOnInit() {
  }

}
