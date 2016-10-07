import { Component, OnInit } from '@angular/core';
import { LoginService } from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.loginState(true);
  }

  ngOnDestroy(){
    this.loginService.loginState(false);
  }

}
