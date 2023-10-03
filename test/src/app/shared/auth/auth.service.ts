import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  isAuthenticated(): boolean {
    return this.getLog() === 'true';
  }

  private getLog() {
    let log = localStorage.getItem('loggin');
    return log;
  }

  public setLog() {
    localStorage.setItem('loggin', "true");
  }

  public exitApp(): void {
    let url = "/login";

    this.clearStorage();
    this.router.navigateByUrl('/login');
  }

  public clearStorage() {
    localStorage.removeItem("loggin");
  }
}
