import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): true|UrlTree {
      const url: string = state.url;

      if(!this.authService.isLoggedIn){
        window.alert('請先登入');
      }

      return this.checkLogin(url);
    }

    checkLogin(url: string): true|UrlTree {
      if (this.authService.isLoggedIn) { return true; }

      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;

      // Redirect to the login page
      return this.router.parseUrl('/');
    }

}
