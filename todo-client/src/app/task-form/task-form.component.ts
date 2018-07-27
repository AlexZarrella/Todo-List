import { Component, OnInit } from '@angular/core';
import { TodotasksService } from '../services/todotasks.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private tasks: TodotasksService) { }

  ngOnInit() {
  }

  myTask:any = {};

  addTask(){
    this.tasks.addTask(this.myTask)
      .subscribe((task)=>{

      })
  }

}
