import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class TodotasksService {

  newTask:any = {
    title: String,
    description: String,
    finished: Boolean
  }

  errorMessage:any;

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get('http://localhost:3000/api/tasks')
    .map((res)=> res.json());
  }

  getOneTask(theIdOfTask) {
    return this.http.get('http://localhost:3000/api/tasks/' +theIdOfTask+ '/details')
    .map((res)=>res.json());
  }

  addTask(newTask) {
    return this.http.post('http://localhost:3000/api/tasks/create', newTask)
    .map((res)=> res.json());
  }

  deleteTask(theIdOfTask) {
    return this.http.post('http://localhost:3000/api/tasks/' +theIdOfTask+ '/delete', {})
    .map((res)=> res.json());
  }

  editTask(theIdOfTask) {
    return this.http.get('http://localhost:3000/api/tasks/' +theIdOfTask+ '/edit')
    .map((res)=> res.json());
  }

  handleError(e){
    this.errorMessage = e.json().message;

    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http:localhost:3000/api/signup`, user)
    .map(res => res.json())
    .catch(this.handleError);
  }
   login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
