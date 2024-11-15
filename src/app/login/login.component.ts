import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {  
  username: string = '';
  password: string = '';
  // username: any = '';
  // password: any = '';
  loggedIn: any = false;
  errorMessage: any = '';

  constructor(private router: Router) {
     
   }

  ngOnInit(): void {
   
  }
  onLogin(): void {
    // For simplicity, we’ll just check if fields are filled.
    // Implement actual authentication here.
    if (this.username && this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter both username and password');
    }
  }

}
