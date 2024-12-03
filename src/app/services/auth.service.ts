import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'password' },
    { username: 'user1', password: '123456' }
  ];

  constructor() {}

  // Validate login credentials
  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Logout
  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  
}
