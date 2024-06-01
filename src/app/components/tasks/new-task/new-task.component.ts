import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from '../tasks.types';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close =  new EventEmitter<void>();
  @Output() add = new EventEmitter<AddTask>()
  enteredTitle = '';
  enteredSummary = ''
  enteredDate = ''
  private taskService: TasksService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }

}
