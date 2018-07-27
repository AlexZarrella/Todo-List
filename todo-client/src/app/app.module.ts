import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TodotasksService } from './services/todotasks.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id/details', component: TaskDetailsComponent },
  { path: 'tasks/create', component: TaskFormComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodotasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
