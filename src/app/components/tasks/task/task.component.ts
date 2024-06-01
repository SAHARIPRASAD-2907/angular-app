import { Component, Input, input, output } from '@angular/core';
import { Task } from '../tasks.types';
import { CardComponent } from '../card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  //@Input({required:true}) task!: Task;
  task = input.required<Task>()
  complete = output<string>();

  onCompleteTask(){
    this.complete.emit(this.task().id);
  }
}
