import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginservice: LoginService,
    private route: Router
    ){}
  canActivate(): boolean {
    if(this.loginservice.isAuthenticated())
    return true;
    else {
      this.route.navigate(['login']);
      return false;
    }
  }
}