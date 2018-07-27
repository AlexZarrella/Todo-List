import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodotasksService } from '../services/todotasks.service';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

theActualEntry: any;

  constructor(private theRoute: ActivatedRoute,
  private myService: TodotasksService) { }

  ngOnInit() {
    this.theRoute.params
      .subscribe((params)=> {
        this.myService.getOneTask(params['id'])
        .subscribe((theTaskFromService)=> {
          this.theActualEntry = theTaskFromService
          console.log(this.theActualEntry)
        })
      })

  }
  deleteTask(){
    this.theRoute.params
    .subscribe((params)=> {
      this.myService.deleteTask(params['id'])
    .subscribe((theTaskToDelete)=> {
    })
    })
  }

}
