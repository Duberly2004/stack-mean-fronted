import {Injectable,inject} from '@angular/core';
import {CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {UserService} from '../services/user/user.service'
@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private userService : UserService,private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.userService.loggedIn()) {
      this.router.navigate(['/signin']);
      return false;
    }else{
      return true;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}