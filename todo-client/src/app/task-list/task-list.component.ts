import { Component, OnInit } from '@angular/core';
import { TodotasksService } from '../services/todotasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task:Array<any> = [];
  constructor(private tasks: TodotasksService) { }

  ngOnInit() {
    this.getTasks;
  }

  getTasks(){
    this.tasks.getTasks()
      .subscribe((task)=> this.task = task)
  }

}
