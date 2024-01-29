import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";


@Injectable()
export class LoginGuard implements CanActivate {
  
  isLoggedIn = false;
  user:any = null;
  
  // here you can inject your auth service to check that user is signed in or not
  constructor(private login:LoginService, private router: Router) { }
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )

    if (this.isLoggedIn) {
      this.router.navigate(["/home"]); // or home
      return false;
    }
    
    return true;
  }

  /*
  this.isLoggedIn = this.login.isLoggedIn();
  this.user = this.login.getUser();
  
  this.login.loginStatusSubjec.asObservable().subscribe(
    data => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    }
  )
  */
}