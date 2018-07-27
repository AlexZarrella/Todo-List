import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class TodotasksService {

  newTask:any = {
    title: String,
    description: String,
    finished: Boolean
  }

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
}
