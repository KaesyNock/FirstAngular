import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  exports: [TasksComponent],
  //every module must work on it's own. if a module needs something it must declare or import itself. it can't get it from a parent module. hence imports
  imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}
