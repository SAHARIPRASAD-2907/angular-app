import { Injectable } from '@angular/core';
import { dummyTasks } from './tasks/dummy-tasks';
import { AddTask, Task } from './tasks/tasks.types';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Task[]  = dummyTasks
  constructor() { 
    const tasks= localStorage.getItem('tasks')
    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string){
    return this.tasks.filter((task:Task)=>task.userId === userId);
  }
  addTask(taskData: AddTask,userId: string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
  }
  removeTask(id: string){
    this.tasks = this.tasks.filter((task:Task)=>task.id!==id)
  }
  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}
