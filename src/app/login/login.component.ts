import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {  
  username: string = '';
  password: string = '';
  loggedIn: any = false;
  errorMessage: any = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void { }
  // onLogin(): void {

  //   if (this.username && this.password) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     alert('Please enter both username and password');
  //   }
  // }
  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
      alert(this.errorMessage);
    }
  }

}
