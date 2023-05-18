import { Component } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(
    public userService: UserService,
    public router: Router,
    ){}

  signIn(form:NgForm){
    console.log(this.userService.selectedUser)
    this.userService.singnIn(form.value).subscribe(
      (res : any) =>{
        console.log(res.token)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/products'])
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
