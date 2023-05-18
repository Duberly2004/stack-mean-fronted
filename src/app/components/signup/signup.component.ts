import { Component } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    public userService: UserService,
    public router: Router,
    ){}
  signUp(form: NgForm){
    console.log(this.userService.selectedUser)
    this.userService.singUp(form.value).subscribe(
      (res:any) =>{
        console.log(res.token)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/products']);
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
