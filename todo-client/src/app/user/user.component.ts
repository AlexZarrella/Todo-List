import { Component, OnInit } from '@angular/core';
import { TodotasksService } from '../services/todotasks.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  signUpUser:any = {
    username: '',
    password: ''
  };

  theActualUser:any = {};
  loginUser:any = {};
  theError:any = {};

  constructor( private authService: TodotasksService) { }

  tryToSignUp(){
    this.authService.signup(this.signUpUser)
    .subscribe(res=>{ this.successCallback(res) },
  (error)=> {this.errorCallback(error)});
  }

  tryToLogIn(){
    // console.log(this.loginUser);
    this.authService.login(this.loginUser)
    .subscribe(res=>{ this.successCallback(res)},
    (error)=> {this.errorCallback(error)});
  }

logMeOut(){
  this.authService.logout()
  .subscribe(res => {this.theActualUser = {}});
}

successCallback(userObject){
this.theActualUser = userObject;
this.theError = null;
}

errorCallback(errorObject){
this.theError = errorObject;
this.theActualUser = {};
}

checkIfLoggedIn(){
  this.authService.isLoggedIn()
  .subscribe(
    res=> {this.successCallback(res)},
    error => {this.errorCallback(null)}
  )
}

  ngOnInit() {
    this.checkIfLoggedIn();
  }

}
