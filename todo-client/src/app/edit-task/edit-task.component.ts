import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodotasksService } from '../services/todotasks.service';
import { PARAMETERS } from '../../../node_modules/@angular/core/src/util/decorators';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  theEditedTask:any= {};

  constructor(private theRoute: ActivatedRoute,
    private myService: TodotasksService) { }

  ngOnInit() {
  }

  editTask(){
    this.theRoute.params
    .subscribe((params)=>{
      this.myService.editTask(params['id'])

    })

  }

}
