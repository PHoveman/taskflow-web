import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { SubTaskModel } from '@features/tasks/models/sub-task.model';
import { TaskCompletionCalcPipe } from '@features/tasks/pipes/task-completion-calc.pipe';

@Component({
  selector: 'app-task-td-progress',
  standalone: true,
  imports: [NgStyle, TaskCompletionCalcPipe],
  templateUrl: './task-td-progress.component.html',
  styleUrl: './task-td-progress.component.scss'
})
export class TaskTDProgressComponent {
  subTasks = input.required<SubTaskModel[]>()
}
