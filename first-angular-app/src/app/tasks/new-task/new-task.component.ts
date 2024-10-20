import { TasksService } from './../tasks.service';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>()

  // enteredTitle = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit()
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
    this.userId
    );
    this.close.emit();
  }
}
