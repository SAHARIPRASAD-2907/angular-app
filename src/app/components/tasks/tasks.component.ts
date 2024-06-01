import { Component, inject, input, Input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { AddTask, Task } from './tasks.types';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent,FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>()
  tasks:Task[]  = dummyTasks
  isAddingTask = false;



  get selectedUserTasks():Task[]{
    return this.tasks.filter((task:Task)=>task.userId === this.userId());
  }

  onCompletedTask(id: string):void{
    this.tasks = this.tasks.filter((task:Task)=>task.id!==id)
  }

  onStartAddTask():void{
    this.isAddingTask = true
  }

  onCloseAddTask(){
    this.isAddingTask = false
  }

}
