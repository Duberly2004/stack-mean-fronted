import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/Models/User';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_API = 'http://localhost:3000/api/auth/';
  selectedUser: User = new User("","","","","","");
  constructor(private http: HttpClient,private router:Router) {}
  
  singUp(user:User){
    return this.http.post(`${this.URL_API}singup`,user)
  }
  singnIn(user:User){
    return this.http.post(`${this.URL_API}signin`,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token') 
  }

  logoUt(){
    if (confirm('Are you sure you want to log out?')){
      localStorage.removeItem('token')
      this.router.navigate(['/signin'])
    }
  }

  alertMessage(){
    if (!this.loggedIn()){
      
      alert('Please login first')
    }
  }
}
